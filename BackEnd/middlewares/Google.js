import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { getUsuarioByEmail } from '../controller/Usuario';

const GOOGLE_CLIENT_ID = process.env.CLIENTID_ESCUELAFUTBOL;
const GOOGLE_CLIENT_SECRET = process.env.CLIENTSECRET_ESCUELAFUTBOL;

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {

    // aqui debemos hacer la query para buscar si el email de la persona existe
    const isCreado = getUsuarioByEmail(profile.emails[0].value)
    .then(res=>res)
    .then(res=>res)
    .catch(err=>{throw err}).length == 0 ? false : true

    if(isCreado){
        done(null, profile)
    }else{
        // se debe crear el email en la base de datos.
    }


    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));