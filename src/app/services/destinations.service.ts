import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { map, tap, catchError } from 'rxjs/operators';
const endpoint = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(
    private http: HttpClient
  ) { }
  
  findUser() {
    return this.http.get<any>(endpoint + "user/email?email=" + "asd@asd.com", {headers: this.getHeaders(true)})
    .pipe(
      tap((data) => console.log(data))
      );
  }

  private getHeaders(login, multipart?) {
    if (login) {
      if (multipart) {
        return new HttpHeaders().set('Authorization', window.localStorage.getItem("token"));
      } else {
        return new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', window.localStorage.getItem("token"));
      }
    } else {
      return new HttpHeaders().set('Content-Type', 'application/json');
    }
  }
}
