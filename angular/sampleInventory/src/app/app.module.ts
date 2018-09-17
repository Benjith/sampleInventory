import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { routes } from './/app-routing.module'
import { RouterModule } from '@angular/router';
import { SigninComponent } from './mainhome/signin/signin.component';
import { SignupComponent } from './mainhome/signup/signup.component';
import { HomeComponent } from './mainhome/home/home.component';
import { DashboardComponent } from './poloAcc/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import { ProductgroupComponent } from '../app/poloAcc/Inventory/Masters/productgroup/productgroup.component'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    ProductgroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
