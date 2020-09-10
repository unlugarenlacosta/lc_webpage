// IMPORTS DE ANGULAR
import { Injectable } from '@angular/core';
// IMPORT HTTPCLIENT PARA PODER HACER LAS PETICIONES
import { HttpClient } from '@angular/common/http';
// IMPORT ENVIRONMENT PARA PODER USAR EL ENDPOINT
import { environment } from '../../environments/environment';
// IMPORTAMOS OBSERVABLE PARA DECIRLE A LOS METODOS EL TIPO DE RESPUESTA QUE TIENE QUE DEVOLVER
import { Observable } from 'rxjs';
// IMPORTAMOS DIFERENTES OPERADORES QUE SON LOS QUE OPERAN CON LAS RESPUESTAS HTTP
import { map, tap, catchError } from 'rxjs/operators';
//IMPORTAMOS ENTIDAD USUARIO PARA MAPEAR LAS RESPUESTAS DE USUARIO EN LA ENTIDAD
import { User } from '../entities/user';
import { EmailValidator } from '@angular/forms';

/**
 * VARIABLE DE ENTERNO PARA EL ENDPOINT 
**/
const endpoint = environment.endpoint;

@Injectable({
  providedIn: 'root',
})
// ESTA CLASE SE ENCARGA DE GESTIONAR TODOS LOS SERVICIOS ENTRE BACKEND I FRONTEND RESPECTO AL USUARIO
export class UserService {
  constructor(private http: HttpClient) {}

  /**
   * PETICION HTTP DE LOGIN PARA INICIAR SESION CON USUARIO Y CONTRASEÑA
   * FALTA TOKEN
   */
  doLogin(email: string, password: string): Observable<User> {
    return this.http
      .post<any>(endpoint + 'user/login', this.loginMap(email, password))
      .pipe(
        map(
          (data) =>
            new User (
            data.object.id,
            data.object.email,
            data.object.isDeleted,
            data.object.password,
            data.object.username
          )
        )
      );
  }

  doRegister(email: string, username: string, password: string): Observable<User>{
    return this.http.post<any>(endpoint + 'user/register', this.registerMap(email, username, password)).pipe(map(
      (data) => 
        new User (
            data.object.id,
            data.object.email,
            data.object.isDeleted,
            data.object.password,
            data.object.username
        )
    ));
  }

  /**
   * MAPPING
   * 
   * MAPEO JSON, SIRVE PARA MAPEAR LOS DATOS QUE ENVIAMOS Y SE ENVIEN EN FORMA DE JSON, ES DECIR, ENVIAMOS UN BODY JSON
   */

  // MAP doLogin
  loginMap(email, password) {
    return {
      email: email,
      password: password,
    };
  }

  // MAP doRegister
  registerMap(email: string, username: string, password: string) {
    return {
      email: email,
      username: username,
      password: password
    }
  }
}
