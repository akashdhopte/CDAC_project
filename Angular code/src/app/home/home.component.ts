import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  myvar: any;
  dlist: any;
  mulist: any;
  
  listed:OrphanClass=new OrphanClass();
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  
 
  if(sessionStorage['name']!=null)
  {
    this.router.navigate(['/homepage'])
  }
  else{
    this.router.navigate(['/donerLogin'])
  }
  
  
  }

  buton(){
    alert("finished")
  }
  dropfunc(){
    var url = "http://localhost:8090/search";
      this.http.get(url).subscribe(data => {
      this.myvar=data;
    })
  }

  datalist(){
    var url = "http://localhost:8090/detaillist";
    this.http.get(url).subscribe(data => {
      this.dlist=data;
    })
  }

  mum(){
    this.listed.city="mumbai"
    var url = "http://localhost:8090/mumlist";
    this.http.post<OrphanClass>(url,this.listed).subscribe(data => {

      alert(JSON.stringify(data))
      this.mulist=data;
    })
  }

  // mum(){
  //   var url = "http://localhost:8090/mumlist";
  //   alert(JSON.stringify(this.listed))
  
  //   this.http.post(url,this.listed).subscribe(data => {
  //     this.mulist=data;
  //     alert(this.listed.city)
  //    //   alert(JSON.stringify(this.dlist))
  //   })
  // }
  
  logout(){
  sessionStorage.clear();
    if(sessionStorage['name']==null)
    {
      this.router.navigate(['/donerLogin'])
    }
  }
}


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
