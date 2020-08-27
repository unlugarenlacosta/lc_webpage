import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
