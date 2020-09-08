import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password: string;
  hide = true;

  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'El campo de correo electrónico es obligatorio';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  doLogin() {
    console.log(this.email.value + " " + this.password)
    this.userService.login(this.email.value, this.password).subscribe(data => {
      console.log(data)
    })
  }
}
