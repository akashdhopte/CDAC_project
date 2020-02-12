import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orphanagerequest',
  templateUrl: './orphanagerequest.component.html',
  styleUrls: ['./orphanagerequest.component.css']
})



export class OrphanagerequestComponent implements OnInit {
  data1:Data =new Data();

  obj:any;



  constructor(private http:HttpClient, private router:Router) { }
  myobj:event=new event();
  ngOnInit() {
    
  
    var url="http://localhost:8090/getappointment";
    this.http.get(url).subscribe(data=>{

      this.obj=data;





       
   
    
      // this.obj.date=JSON.stringify(data.date);
      // this.obj.time=JSON.stringify(data.time);

      // alert(JSON.stringify(data.time))
      // alert(JSON.stringify())
      // this.obj.date=data.date; 
      // this.obj.time=data.time;
         
    })
  

  }


  postdata(){
   
     var url="http://localhost:8090/postitems";
     this.http.post(url,this.data1).subscribe(data=>{
       alert("successful");
     })
 
   }



   Accept(){

    var date1=this.obj.date;
      localStorage.setItem('accept',"appointment accepted...!");
      
   }



   
   Reject(){
    localStorage.setItem('accept',"Appointment Reject");
     
   }

   EventAccept(){

    
      localStorage.setItem('Eventaccept',"Event accepted ");
      
   }
   
   EventReject(){
    localStorage.setItem('Eventaccept',"Event Rejected");
     
   }





}


 
  class Data{
 
   food:number;
   stationary:number;
   cloths:number;

 }
 class appointment{

  date:String;
  time:String;
}

class event{
  events:string;
  date1:string;
  time1:string;
}




