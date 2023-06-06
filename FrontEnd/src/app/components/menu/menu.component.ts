import { Component , Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoggedServiceService } from 'src/app/services/Logged/logged-service.service';
import { TokenService } from 'src/app/services/Token/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  protected isLogged: boolean = false

  constructor(protected loggedService: LoggedServiceService, protected tokenService: TokenService, private router: Router){}
  ngOnInit(): void {
    if(window.localStorage.getItem('email')!=null){
      this.isLogged=true;
    }
  }

  logOut () {
    window.localStorage.removeItem('jwt');
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('id')
    this.loggedService.setIsLogged(false);
    this.tokenService.setToken('');
    this.isLogged = false
    console.log('token borrado');
    this.router.navigate(['/'])
  }

  hrefChange (href: string){
    window.location.href = '/'+ href;
  }
}
