import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string | undefined;

  setToken(token: string){
    this.token = token;
  }

  getToken(){
    return this.token;
  }

}
