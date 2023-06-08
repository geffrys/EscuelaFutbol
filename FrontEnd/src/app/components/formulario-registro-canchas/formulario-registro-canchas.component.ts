import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro-canchas',
  templateUrl: './formulario-registro-canchas.component.html',
  styleUrls: ['./formulario-registro-canchas.component.css']
})
export class FormularioRegistroCanchasComponent implements OnInit {

  cancha: any = {"tipo_cancha": ""}

  private TYPOADMIN : number = 2;
  isAdmin: boolean = false;

  canchas: any = []

  constructor(private router: Router) { }



  ngOnInit(): void {

    // primero vamos a consultar el tipo de usuario
    fetch('http://localhost:3000/register/userType', {
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
        console.log(data[0].id_usuario)
        if(data[0].id_usuario==this.TYPOADMIN){
          this.isAdmin= true;
        }
      })
      .catch(error => {
        // Manejo de errores
        console.error('Error:', error);
      });

      fetch('http://localhost:3000/sedes', {
      method: 'GET', // Reemplaza con el método HTTP deseado
      headers: {
        'Content-Type': 'application/json' // Reemplaza con el tipo de contenido adecuado
      }
    })
      .then(response => response.json())
      .then(data => {
        this.canchas = data
      })
      .catch(error => {
        // Manejo de errores
        console.error('Error:', error);
      });


  }




  formValidacion(): boolean {
    let flag = true;
    if (!this.cancha.nombre) {
      flag = false
    }
    if (!this.cancha.horario) {
      flag = false
    }
    if (!this.cancha.foto) {
      flag = false
    }
    if (!this.cancha.tipo_cancha) {
      flag = false
    }
    if (!this.cancha.direccion) {
      flag = false
    }
    return flag;
  }

  submit() {
    console.log(this.cancha);

    if (this.formValidacion()) {

      fetch('http://localhost:3000/sedes', {
        method: 'POST', // Reemplaza con el método HTTP deseado
        headers: {
          'Content-Type': 'application/json' // Reemplaza con el tipo de contenido adecuado
        },
        body: JSON.stringify({
          "nombre": this.cancha.nombre,
          "horario": this.cancha.horario,
          "foto": this.cancha.foto,
          "tipocancha": this.cancha.tipo_cancha,
          "direccion": this.cancha.direccion
        }) // Reemplaza 'data' con los datos que deseas enviar en el cuerpo
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (!data.errno) {
            window.location.href='/sedes'
            this.cancha={}
          }
          else {
            // this.router.navigate(['/'])
          }
        })
        .catch(error => {
          // Manejo de errores
          console.error('Error:', error);
        });
    }
    else {
      console.log('falta info');
      console.log(this.cancha);

    }
  }
}
