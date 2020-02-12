import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donerhome',
  templateUrl: './donerhome.component.html',
  styleUrls: ['./donerhome.component.css']
})

export class DonerhomeComponent implements OnInit {
 
  myvar: any;
  dlist: any;
  mulist: any;
  
  listed:OrphanClass=new OrphanClass();
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() { 
  if(sessionStorage['name']!=null){
    this.router.navigate(['/homepage'])
  }
  else{
    this.router.navigate(['/donerLogin'])
  }  
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
  
  nag(){
    this.listed.city="nagpur"
    var url = "http://localhost:8090/nagpurlist";
    this.http.post<OrphanClass>(url,this.listed).subscribe(data => {

      alert(JSON.stringify(data))
      this.mulist=data;
    })
  }

  
  pune(){
    this.listed.city="pune"
    var url = "http://localhost:8090/punelist";
    this.http.post<OrphanClass>(url,this.listed).subscribe(data => {

      alert(JSON.stringify(data))
      this.mulist=data;
    })
  }
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
