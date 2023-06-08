import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoggedServiceService } from 'src/app/services/Logged/logged-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  protected isLogged: boolean = false

  constructor(private router: Router, protected loggedSerice:LoggedServiceService){}
  ngOnInit(): void {   
    console.log(window.localStorage.getItem('email'));
    if(this.loggedSerice.getIsLogged()==true){
      this.isLogged=true;
    }
    if(window.localStorage.getItem('email')){
      this.isLogged=true;
      console.log(this.isLogged);
    }
  }

  
  

  navigateTo(url: string){
    this.router.navigate([`${url}`])
  }
  
}
