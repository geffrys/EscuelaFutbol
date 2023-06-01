import { Component , Input} from '@angular/core';
import { LoggedServiceService } from 'src/app/services/Logged/logged-service.service';
import { TokenService } from 'src/app/services/Token/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(protected loggedService: LoggedServiceService, protected tokenService: TokenService){}

  logOut () {
    window.localStorage.removeItem('jwt');
    this.loggedService.setIsLogged(false);
    this.tokenService.setToken('');
    console.log('token borrado');
  }

  hrefChange (href: string){
    window.location.href = '/'+ href;
  }
}
