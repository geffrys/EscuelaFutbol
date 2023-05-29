import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedServiceService {

  private isLogged: boolean | undefined;

  getIsLogged(): boolean | undefined{
    return this.isLogged;
  }

  setIsLogged(value: boolean){
    this.isLogged=value;
  }
}
