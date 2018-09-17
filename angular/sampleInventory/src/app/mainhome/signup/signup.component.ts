import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signUpData: object = {}
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.signUpData)
  }
}
