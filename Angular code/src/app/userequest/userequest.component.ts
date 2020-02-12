import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-userequest',
  templateUrl: './userequest.component.html',
  styleUrls: ['./userequest.component.css']
})
// export class UserequestComponent implements OnInit {
// addl: any;
//   data1:Data = new Data();


//   obj:appointment=new appointment();


//   constructor(private http:HttpClient, private router:Router) {}

//   ngOnInit() {
//   }
//   getlist()
//   {
    
//     var url="http://localhost:8090/getitems";
//     this.http.get(url).subscribe(data=>{
//       this.addl=data;
    
      
//     })
//   }


//   getappointment(){
//       var date=this.obj.date;
//       alert(date)
//       var time=this.obj.time;
//       alert(time)
//       var url = "http://localhost:8090/appointment";
      
//       alert("login successfull"+this.obj.date+" "+this.obj.time);

    

      
    
//   }

// // alert(JSON.stringify(this.orphan))
// //     var url = "http://localhost:8090/regorphan";
// //     this.http.post(url, this.orphan).subscribe(data => {
// //     alert("login successfull"+this.orphan.email);
// //     if(data["statusCode"]==333)
// //             {
              
// //                 sessionStorage['name']=this.orphan.email;
// //                 this.router.navigate(['/orphanageLogin']);
// //             }
// //             else {
// //               this.router.navigate(['/donerSignup']);
// //             }


// }
// class Data{
//   food:number;
//   stationary:number;
//   cloths:number;
// }


// class appointment{

//   date:Date;
//   time:Time;
// }




export class UserequestComponent implements OnInit {
addl: any;
  data1:Data = new Data();
  
  
  
  date1:String;
  time1:String;



  obj:appointment=new appointment;
  
  
  
  obj2:any;
  msg:string;
  Eventmsg:string;
  Evntobj:event=new event();  



  constructor(private http:HttpClient, private router:Router) {}

  ngOnInit() {

    
    var url="http://localhost:8090/getappointment";
    this.http.get(url).subscribe(data=>{

      this.obj2=data;
    
      // this.obj.date=JSON.stringify(data.date);
      // this.obj.time=JSON.stringify(data.time);

      // alert(JSON.stringify(data.time))
      // alert(JSON.stringify())
      // this.obj.date=data.date; 
      // this.obj.time=data.time;
         
    })
  

  

    
    if(localStorage.getItem('accept')!=null)
    {
      this.msg=JSON.stringify( localStorage.getItem('accept'));
      localStorage.removeItem('accept');

    }

    if(localStorage.getItem('Eventaccept')!=null)
    {
      this.Eventmsg=JSON.stringify( localStorage.getItem('accept'));
      localStorage.removeItem('accept');

    }
    

  }
  getlist()
  {
    
    var url="http://localhost:8090/getitems";
    this.http.get(url).subscribe(data=>{
      this.addl=data;
    
      
    })
  }


  getappointment(){
    alert("Appointment Request send on::")
     
      alert(this.obj.date)
      // this.time=this.obj.time;
     alert(this.obj.time)
      var url = "http://localhost:8090/appointment";
      this.http.post(url,this.obj).subscribe(data => {
        alert(JSON.stringify(this.obj.date))
      
        
      })



  }

  postevent(){
    alert("Event Request is sent ")

    var url = "http://localhost:8090/createevent";
      this.http.post(url,this.Evntobj).subscribe(data => {
      
      })

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


