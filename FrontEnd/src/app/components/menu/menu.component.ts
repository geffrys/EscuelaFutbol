import { Component , Input} from '@angular/core';
import { LoggedServiceService } from 'src/app/services/Logged/logged-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(protected loggedService: LoggedServiceService){}

  logOut () {
    window.localStorage.removeItem('jwt');
    this.loggedService.setIsLogged(false)
    console.log('token borrado');
  }

  hrefChange (href: string){
    window.location.href = '/'+ href;
  }
}
