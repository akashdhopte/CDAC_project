import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { AuthService } from './auth.service';
import { DonerLoginComponent } from './doner-login/doner-login.component';
import { OrphanageLoginComponent } from './orphanage-login/orphanage-login.component';
import { DonerSignupComponent } from './doner-signup/doner-signup.component';
import { OrphanageSignupComponent } from './orphanage-signup/orphanage-signup.component';
import { HomeComponent } from './home/home.component';
import { UserequestComponent } from './userequest/userequest.component';
import { OrphanagerequestComponent } from './orphanagerequest/orphanagerequest.component';
import { IndexcomponentComponent } from './indexcomponent/indexcomponent.component';
import { OrphnagehomeComponent } from './orphnagehome/orphnagehome.component';
import { OrphnageuserComponent } from './orphnageuser/orphnageuser.component';
import { DonerhomeComponent } from './donerhome/donerhome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    DonerLoginComponent,
    OrphanageLoginComponent,
    DonerSignupComponent, 
    OrphanageSignupComponent, 
    HomeComponent, 
    UserequestComponent,
    OrphanagerequestComponent,
    IndexcomponentComponent,
    OrphnagehomeComponent,
    OrphnageuserComponent,
    DonerhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [LoginService,AuthService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
