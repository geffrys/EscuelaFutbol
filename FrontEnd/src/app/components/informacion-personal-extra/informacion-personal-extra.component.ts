import { Component } from '@angular/core';

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
  rh: string='';
  sexo: string = '';
  celular: string = '';
  eps: string = '';
  contacto: string = '';


  onSubmit(){
    // validaciones



  }

}
