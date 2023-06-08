import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro-canchas',
  templateUrl: './formulario-registro-canchas.component.html',
  styleUrls: ['./formulario-registro-canchas.component.css']
})
export class FormularioRegistroCanchasComponent implements OnInit {

  cancha: any = {}

  constructor(private router: Router) { }



  ngOnInit(): void {

    // primero vamos a consultar el tipo de usuario
    fetch('http://localhost:3000/register/userType', {
      method: 'POST', // Reemplaza con el método HTTP deseado
      headers: {
        'Content-Type': 'application/json' // Reemplaza con el tipo de contenido adecuado
      },
      body: JSON.stringify({
        "emil": window.localStorage.getItem('email')
      }) // Reemplaza 'data' con los datos que deseas enviar en el cuerpo
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
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
            this.router.navigate(['/'])
          }
          else {
            prompt('Usuario ya registro informacion personal')
            this.router.navigate(['/'])
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
