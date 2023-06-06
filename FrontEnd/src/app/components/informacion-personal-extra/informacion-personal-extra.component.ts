import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informacion-personal-extra',
  templateUrl: './informacion-personal-extra.component.html',
  styleUrls: ['./informacion-personal-extra.component.css']
})
export class InformacionPersonalExtraComponent {

  nombre: string = '';
  apellido: string = '';
  documento: string = '';
  nacimiento: string = '';
  rh: string = '';
  sexo: string = '';
  celular: string = '';
  eps: string = '';
  contacto: string = '';

  constructor(protected http: HttpClient, private router: Router) { }

  isValid(): boolean {
    let flag = true;
    if (this.documento == '') {
      flag = false;
    }
    if (this.nombre == '') {
      flag = false;
    }
    if (this.apellido == '') {
      flag = false;
    }
    if (this.celular == '') {
      flag = false;
    }
    if (this.nacimiento == '') {
      flag = false;
    }
    if (this.sexo == '') {
      flag = false;
    }
    if (this.rh == '') {
      flag = false;
    }
    if (this.contacto == '') {
      flag = false;
    }
    if (this.eps == '') {
      flag = false;
    }
    return flag;
  }

  registrar() {
    if (this.isValid()) {
      fetch('', {
        method: 'POST', // Reemplaza con el método HTTP deseado
        headers: {
          'Content-Type': 'application/json' // Reemplaza con el tipo de contenido adecuado
        },
        body: JSON.stringify({
            "id": window.localStorage.getItem('id'),
            "nacimiento": this.nacimiento,
            "genero": this.sexo,
            "tiposangre": this.rh,
            "contacto": this.contacto,
            "tipousuario": 1,
            "celular": this.celular,
            "documento": this.documento,
            "eps": this.eps,
            "nombre": this.nombre,
            "apellido": this.apellido
        }) // Reemplaza 'data' con los datos que deseas enviar en el cuerpo
      })
        .then(response => response.json())
        .then(data => {
          console.log(data); 
        })
        .catch(error => {
          // Manejo de errores
          console.error('Error:', error);
        });
    }
    else{
      console.log('faltan campos');
      
    }
  }


}
