import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-doner-login',
  templateUrl: './doner-login.component.html',
  styleUrls: ['./doner-login.component.css']
})

export class DonerLoginComponent implements OnInit {

  statusCode:number;
  donerlogin: DonerClass = new DonerClass();
  statuslog:Status=new Status();

  constructor(private http: HttpClient, private router: Router) {}

  donerlogincheck() {
      var url = "http://localhost:8090/loginuser";
      this.http.post(url, this.donerlogin).subscribe(data => {
      if(data["statusCode"]==333){
        sessionStorage['name']=this.donerlogin.email;
        this.router.navigate(['/donerhome'])
        }
      else{
        this.router.navigate(['/regLogin']);
      }   
    })
  }
  ngOnInit() {}
}

export class DonerClass {
  email: string;
  password: string;
}

class Status{
  statusCode:number;
  statusMessage:string;
}