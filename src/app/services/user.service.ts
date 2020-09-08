import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { User } from '../entities/user';


const endpoint = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(endpoint + 'user/login', this.loginMap(email, password)).pipe(map((data) => new User(
      data.id,
      data.email,
      data.isDeleted,
      data.password,
      data.username
    )))
  }

  loginMap(email, password){
    return {
      email: email,
      password: password
    }
  }
}
