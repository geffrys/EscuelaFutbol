import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  token: string = '';
  @Input() isLogged: boolean = false;

  constructor() {}

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
      window.localStorage.setItem('jwt', token)      
      // Realizar acciones con el token, como autenticación o almacenarlo en el almacenamiento local
    } else {
      console.log('No se encontró ningún token en la URL');
      // Realizar acciones alternativas si no se encuentra ningún token
    }


  }

  onGoogleSignIn(response: any) {
    // Obtener el token de acceso de Google
    const googleToken = response.credential;

    // Realizar la lógica de inicio de sesión con Google
    console.log('Token de acceso de Google:', googleToken);
    // Realizar la autenticación y otras acciones necesarias
  }

  signInWithGoogle() {
    // Iniciar el flujo de inicio de sesión de Google
    window.location.href = 'http://localhost:3000/auth/google';
  }
}
