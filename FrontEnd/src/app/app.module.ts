import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { InformacionPersonalExtraComponent } from './components/informacion-personal-extra/informacion-personal-extra.component';
import { FormularioRegistroCanchasComponent } from './components/formulario-registro-canchas/formulario-registro-canchas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InformacionPersonalExtraComponent,
    FormularioRegistroCanchasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
