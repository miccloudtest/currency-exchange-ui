import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn=false;
  username:string="";
  password:string="";
  validUser:Boolean=false;
  invalidUser=false;
  invalidLoginMsg="Please Enter Valid Username and Password!"
  @ViewChild('f', {static: true}) loginForm:NgForm;
  constructor(private router:Router) { }

  ngOnInit() {
    sessionStorage.setItem("username","HdFctest");
    sessionStorage.setItem("password","Roman@123#");
  }
  onSubmit(form:NgForm){

    this.username=this.loginForm.value.username;
    this.password=this.loginForm.value.password;
    if(this.validateUser()){
      this.router.navigate(['currencydata']);
      this.isLoggedIn=true;
    }
    else{
      this.invalidUser=true;
    }

  }
  validateUser():Boolean{
     if(this.username===sessionStorage.getItem("username")&& 
     this.password===sessionStorage.getItem("password")){
     this.validUser=true;
     return this.validUser;
     }
  }

}
