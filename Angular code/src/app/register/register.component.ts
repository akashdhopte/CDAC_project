import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registration:any ={

  }
  constructor(private auth:AuthService) { }

  ngOnInit() {
    // this.auth.
    // this.auth.getToken()
  }

}