import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedServiceService } from 'src/app/services/Logged/logged-service.service';
import { TokenService } from 'src/app/services/Token/token.service';
// import * as jwt from 'jsonwebtoken';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  token: string = '';
  email: string | null = '';

  private counterFetchUserInfor: number = 0;

  private initialized: boolean = false;

  private state: number = 1

  constructor(protected loggedService: LoggedServiceService, protected tokenService: TokenService, private router: Router) { }

  onSubmit() {
    // Lógica para enviar el formulario
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Realizar la autenticación y otras acciones necesarias
  }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const email = urlParams.get('email');



    if (token) {
      this.initialized = true;
      this.state = 2
      console.log('Token recibido:', token);
      window.localStorage.setItem('jwt', token);
      window.localStorage.setItem('email', email ? email : 'no')

      window.location.href = '/login';
      this.tokenService.setToken(token)
      this.loggedService.setIsLogged(true);
    }
    let tokenInterno = window.localStorage.getItem('jwt');
    if (tokenInterno) {
      this.initialized = true;
      this.state = 2;
      console.log('existe el token en memoria', tokenInterno);
      this.tokenService.setToken(tokenInterno)
      this.loggedService.setIsLogged(true)
    }
    else {
      this.loggedService.setIsLogged(false)
      console.log('No se encontró ningún token en la URL');
    }

    const APIURLconsultarID = 'http://localhost:3000/register/id'

    fetch(APIURLconsultarID, {
      method: 'POST', // Reemplaza con el método HTTP deseado
      headers: {
        'Content-Type': 'application/json' // Reemplaza con el tipo de contenido adecuado
      },
      body: JSON.stringify({
        "email": window.localStorage.getItem('email')
      }) // Reemplaza 'data' con los datos que deseas enviar en el cuerpo
    })
      .then(response => response.json())
      .then(data => {
        window.localStorage.setItem('id', data[0].id)
      })
      .catch(error => {
        // Manejo de errores
        console.error('Error:', error);
      });

      if(this.loggedService.getIsLogged()){
        fetch('http://localhost:3000/register/verify', {
          method: 'POST', // Reemplaza con el método HTTP deseado
          headers: {
            'Content-Type': 'application/json' // Reemplaza con el tipo de contenido adecuado
          },
          body: JSON.stringify({
            "email": window.localStorage.getItem('email')
          }) // Reemplaza 'data' con los datos que deseas enviar en el cuerpo
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            
              if(data.errno || data.length == 0){
                this.router.navigate(['/informacionPersonalExtra'])
              }else{
                this.router.navigate(['/'])
              }
          })
          .catch(error => {
            // Manejo de errores
            console.error('Error:', error);
          });
      }


    





  }




  async sendData(url: string) {
    const apiUrl = url;
  
    try {
      const data = {
        // Datos que deseas enviar en el cuerpo
        "email": window.localStorage.getItem('email')
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST', // Reemplaza con el método HTTP deseado
        headers: {
          'Content-Type': 'application/json' // Reemplaza con el tipo de contenido adecuado
        },
        body: JSON.stringify(data) // Convierte los datos a JSON antes de enviarlos
      });
  
      const responseData = await response.json();
  
      // Aquí puedes hacer algo con los datos de la respuesta
      if(responseData.errno){
        window.location.href = '/informacionPersonalExtra'
      }
    } catch (error) {
      // Manejo de errores
      console.error('Error:', error);
    }
  }


  signInWithGoogle() {
    window.location.href = 'http://localhost:3000/auth/google';
  }


}
