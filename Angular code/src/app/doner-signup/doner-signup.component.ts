import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-doner-signup',
  templateUrl: './doner-signup.component.html',
  styleUrls: ['./doner-signup.component.css']
})
export class DonerSignupComponent implements OnInit {
  statuslog:Status=new Status();
  doner:DonerClass=new DonerClass();
  constructor(private http:HttpClient,private router: Router) { }
  ngOnInit() {
  }
  donersignupcheck() {
    var url = "http://localhost:8090/reguser";
    this.http.post(url, this.doner).subscribe(data => {
    alert("login successfull"+this.doner.email);
    if(data["statusCode"]==333){
      sessionStorage['name']=this.doner.email;
      this.router.navigate(['/donerLogin']);
      }
    else{
      alert("else")
      this.router.navigate(['/regdoner']);
      }
    })
  }
}

class DonerClass{
  username: string;
  email: string;
  mobile: string;
  password: string;  
  
}

class Status{
  statusCode:number;
  statusMessage:string;
  loggedInCustomer:DonerClass;

}
