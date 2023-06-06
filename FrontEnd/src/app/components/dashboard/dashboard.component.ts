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
     
    if(window.localStorage.getItem('email')!=null){
      this.isLogged=true;
    }
  }

  
  

  navigateTo(url: string){
    this.router.navigate([`${url}`])
  }
  
}
