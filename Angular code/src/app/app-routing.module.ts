import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

import { OrphanageLoginComponent } from './orphanage-login/orphanage-login.component';
import { DonerSignupComponent } from './doner-signup/doner-signup.component';
import { DonerLoginComponent } from './doner-login/doner-login.component';
import { OrphanageSignupComponent } from './orphanage-signup/orphanage-signup.component';
import { HomeComponent } from './home/home.component';
import { UserequestComponent } from './userequest/userequest.component';
import { IndexcomponentComponent } from './indexcomponent/indexcomponent.component';
import { OrphanagerequestComponent } from './orphanagerequest/orphanagerequest.component';
import { OrphnagehomeComponent } from './orphnagehome/orphnagehome.component';
import { DonerhomeComponent } from './donerhome/donerhome.component';

const routes: Routes = [
  {
    path:'', component: IndexcomponentComponent,
    pathMatch:'full'
  },{
    path:'Login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent,canActivate: 
    [AuthGuard]
  },
 
  {path: 'orphanageSignup',component:OrphanageSignupComponent},
  {path: 'orphanageLogin',component:OrphanageLoginComponent},
  {path: 'donerSignup',component:DonerSignupComponent},
  {path: 'donerLogin',component:DonerLoginComponent},
  {path:'homePage' ,component:HomeComponent},
  {path: 'userrequest',component:UserequestComponent},
  {path: 'orphanagerequest',component: OrphanagerequestComponent},
  {path:'orphanagehome',component:OrphnagehomeComponent},
  {path: 'donerhome',component: DonerhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
