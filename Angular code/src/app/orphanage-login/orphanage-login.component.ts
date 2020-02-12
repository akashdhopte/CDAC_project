import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Router} from  '@angular/router';
import {AuthService} from '../auth.service';;


@Component({
  selector: 'app-orphanage-login',
  templateUrl: './orphanage-login.component.html',
  styleUrls: ['./orphanage-login.component.css']
})

 


export class OrphanageLoginComponent implements OnInit {

  statuslog:Status=new Status();
  orphanlogin:OrphanClass=new OrphanClass("","");



  constructor(private http:HttpClient,private AuthService:AuthService,private router: Router) {
  
   }

  ngOnInit() {
  }



  orphanlogincheck() {
    var url = "http://localhost:8090/logorphan";
    this.http.post(url, this.orphanlogin).subscribe(data => {
        alert(JSON.stringify(data));
        if(data["statusCode"]==333)
        {
          alert("iof ")
            sessionStorage['name']=this.orphanlogin.email;
            this.router.navigate(['/orphanagehome']);
        }

        else  {
          alert("else")
          this.router.navigate(['/orphanageLogin'])
            
        }
    })
}


}





class OrphanClass{

  constructor(
public email:string,
public password:string,

  ){}
}

class Status{
  statusCode:number;
  statusMessage:string;
  loggedInOrphan:OrphanClass;

}
