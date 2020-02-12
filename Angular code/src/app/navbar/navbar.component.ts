import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private auth:AuthService) { }
  user:any ={
    'name':null,
    'password':null
  }
  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}