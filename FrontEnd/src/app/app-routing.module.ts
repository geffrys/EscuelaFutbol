import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformacionPersonalExtraComponent } from './components/informacion-personal-extra/informacion-personal-extra.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioRegistroCanchasComponent } from './components/formulario-registro-canchas/formulario-registro-canchas.component';

const routes: Routes = [
  {
    path: 'informacionPersonalExtra',
    component:  InformacionPersonalExtraComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sedes',
    component: FormularioRegistroCanchasComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
