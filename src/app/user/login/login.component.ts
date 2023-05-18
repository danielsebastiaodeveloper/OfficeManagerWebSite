import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm;

  constructor (){
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      terms: new FormControl(false)
    });
  }

  onLogin() : void {
    console.log(`Email: ${this.loginForm.controls.email.value} \n Password: ${this.loginForm.controls.password.value}`)
    this.loginForm.reset();
  }
}
