import { Component,  OnInit , Input, Output, EventEmitter} from '@angular/core';
import { LoggedServiceService } from 'src/app/services/Logged/logged-service.service';
import { TokenService } from 'src/app/services/Token/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  token: string = '';

  constructor(protected loggedService: LoggedServiceService, protected tokenService: TokenService) {}

  onSubmit() {
    // Lógica para enviar el formulario
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Realizar la autenticación y otras acciones necesarias
  }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      console.log('Token recibido:', token);
      window.localStorage.setItem('jwt', token);
      window.location.href='/';  
      this.tokenService.setToken(token)
      this.loggedService.setIsLogged(true); 
    } 
    let tokenInterno = window.localStorage.getItem('jwt')
    if(tokenInterno){
      console.log('existe el token en memoria',tokenInterno);
      this.tokenService.setToken(tokenInterno)
      this.loggedService.setIsLogged(true)
    }
    else {
      this.loggedService.setIsLogged(false)
      console.log('No se encontró ningún token en la URL');
    }


  }


  signInWithGoogle() {
    window.location.href = 'http://localhost:3000/auth/google';
  }

  
}
