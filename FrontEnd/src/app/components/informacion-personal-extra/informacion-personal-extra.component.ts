import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informacion-personal-extra',
  templateUrl: './informacion-personal-extra.component.html',
  styleUrls: ['./informacion-personal-extra.component.css']
})
export class InformacionPersonalExtraComponent {

  informacionPersonal : any = {}

  constructor(protected http: HttpClient, private router: Router) { 
   
  }

  isValid(): boolean {
    let flag = true;
    if (!this.informacionPersonal.documento) {
      flag = false;
    }
    if (!this.informacionPersonal.nombre ) {
      flag = false;
    }
    if (!this.informacionPersonal.apellido ) {
      flag = false;
    }
    if (!this.informacionPersonal.celular ) {
      flag = false;
    }
    if (!this.informacionPersonal.nacimiento ) {
      flag = false;
    }
    if (!this.informacionPersonal.sexo ) {
      flag = false;
    }
    if (!this.informacionPersonal.rh ) {
      flag = false;
    }
    if (!this.informacionPersonal.contacto ) {
      flag = false;
    }
    if (!this.informacionPersonal.eps ) {
      flag = false;
    }
    console.log(this.informacionPersonal.nombre, this.informacionPersonal.apellido, this.informacionPersonal.nacimiento, this.informacionPersonal.celular, this.informacionPersonal.sexo, this.informacionPersonal.rh, this.informacionPersonal.contacto, this.informacionPersonal.eps,this.informacionPersonal.documento)
    return flag;
  }

  registrar() {
    if (this.isValid()) {
      fetch('http://localhost:3000/register', {
        method: 'POST', // Reemplaza con el método HTTP deseado
        headers: {
          'Content-Type': 'application/json' // Reemplaza con el tipo de contenido adecuado
        },
        body: JSON.stringify({
            "id": window.localStorage.getItem('id'),
            "nacimiento": this.informacionPersonal.nacimiento,
            "genero": this.informacionPersonal.sexo,
            "tiposangre": this.informacionPersonal.rh,
            "contacto": this.informacionPersonal.contacto,
            "tipousuario": 1,
            "celular": this.informacionPersonal.celular,
            "documento": this.informacionPersonal.documento,
            "eps": this.informacionPersonal.eps,
            "nombre": this.informacionPersonal.nombre,
            "apellido": this.informacionPersonal.apellido
        }) // Reemplaza 'data' con los datos que deseas enviar en el cuerpo
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if(!data.errno){
            this.router.navigate(['/'])
          } 
          else{
            prompt('Usuario ya registro informacion personal')
            this.router.navigate(['/'])
          }
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
