import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import passport from 'passport';
import { getUsuarioByEmail, createUser } from '../controller/Usuario.js';
import Usuario from '../models/Usuario.js';

const GOOGLE_CLIENT_ID = process.env.CLIENTID_ESCUELAFUTBOL;
const GOOGLE_CLIENT_SECRET = process.env.CLIENTSECRET_ESCUELAFUTBOL;

passport.use("auth-google",new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google",
    passReqToCallback   : true
  },
  async function (request, accessToken, refreshToken, profile, done) {

    // aqui debemos hacer la query para buscar si el email de la persona existe
    let isCreado = await getUsuarioByEmail(profile.emails[0].value)
    // console.log(isCreado);
    if (isCreado.length == 0) {
      const user = new Usuario(null, profile.displayName, profile.emails[0].value, profile.id, accessToken, 1);
      await createUser(user);
      console.log('usuario creado.');
    }
    // console.log(token);
    return done(null, profile);
  }
));

