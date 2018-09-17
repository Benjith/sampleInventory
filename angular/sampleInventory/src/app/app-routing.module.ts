import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './mainhome/signin/signin.component';
import { SignupComponent } from './mainhome/signup/signup.component';
import { HomeComponent } from './mainhome/home/home.component';
import { DashboardComponent } from './poloAcc/dashboard/dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  declarations: []
})

export class AppRoutingModule { }

export const routes: Routes = [
  {path:'', redirectTo:'/Home/signUp',pathMatch:'full'},
  {
    path:'Home', 
    component: HomeComponent,
    children:[
      {path: 'signIn', component:SigninComponent},
      {path: 'signUp', component:SignupComponent}
    ]
  },
  {path:'poloAcc', component:DashboardComponent}
];