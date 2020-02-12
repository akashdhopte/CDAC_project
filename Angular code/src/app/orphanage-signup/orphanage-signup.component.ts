import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-orphanage-signup',
  templateUrl: './orphanage-signup.component.html',
  styleUrls: ['./orphanage-signup.component.css']
})
export class OrphanageSignupComponent implements OnInit {
  statuslog:Status=new Status();
  orphan:OrphanClass=new OrphanClass();
  constructor(private http:HttpClient,private router: Router) { }



  ngOnInit() {
  }

  orphansignupcheck() {
   alert(JSON.stringify(this.orphan))
    var url = "http://localhost:8090/regorphan";
    this.http.post(url, this.orphan).subscribe(data => {
    alert("login successfull"+this.orphan.email);
    if(data["statusCode"]==333)
            {
             
                sessionStorage['name']=this.orphan.email;
                this.router.navigate(['/orphanageLogin']);
            }
            else {

              this.router.navigate(['/orphanageSignup']);
            }

    })
}

}

//  donersignupcheck111() {
//     var url = "http://localhost:8090/reguser";
//     this.http.post(url, this.doner).subscribe(data => {
//     alert("login successfull"+this.doner.email);
//     if(data["statusCode"]==333)
//             {
//               alert("done")
//                 sessionStorage['name']=this.doner.email;
//                 this.router.navigate(['/donerLogin']);
//             }
//             else  {
//               alert("else")
//               this.router.navigate(['/regorphan']);
//             }

//     })
// }


 


class OrphanClass{
  username: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  registrationid: number;
  nooforphan: number;
  password: string;  
}

class Status{
  statusCode:number;
  statusMessage:string;
  loggedInCustomer:OrphanClass;

}
