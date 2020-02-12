import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient,private app:AppComponent) { 
    
  }

  login(){
    return this.http.get(this.app.url  + 'login').toPromise();
  }
}
