import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
    
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any ={
    'name':null,
    'password':null
  }
  constructor(private service:LoginService,private AuthService:AuthService,private route:Router) { 
    this.user.name =null;
    this.user.password =null;
  }

  ngOnInit() {
    console.log(this.user.name);
  }

testdata(){
      debugger;
    if(this.user.name && this.user.password){
      this.AuthService.sendToken("190840520085");
      this.route.navigateByUrl("register");
    }else{
      alert("Details not valid");

    }
}
  // logindata(){

 
    
  //   // try {
  //   //   this.service.login().then(data=>{
  //   //     try {
          
  //   //     } catch (error) {
          
  //   //     }
  //   //   },err=>{
  
  //   //   })
  //   // } catch (error) {
      
  //   // }

    
  // }
}
