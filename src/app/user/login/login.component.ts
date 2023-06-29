import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm;

  constructor (){
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      terms: new FormControl(false)
    });
  }

  ngOnInit(): void {
    
  }

  onLogin() : void {
    console.log(`Email: ${this.loginForm.controls.email.value} \n Password: ${this.loginForm.controls.password.value}`)
    this.loginForm.reset();
  }
}
