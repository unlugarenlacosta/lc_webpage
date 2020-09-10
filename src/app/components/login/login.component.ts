import { Component, OnInit } from '@angular/core';
// IMPORTAMOS ROUTER PARA PODER MOVERNOS POR LAS DIFERENTES PAGINAS ENRUTANDO NUESTRA WEB
import { Router } from '@angular/router';
// IMPORTAMOS ATRIBUTOS DEL FORMS PARA PODER RELLENAR I UTILIZAR FORMULARIOS EN NUESTRA WEB, COMO EJEMPLO FORMCONTROL QUE ES PARA CONTROLAR VALIDACIONES DE EMAIL ETC, COMO EL VALIDATORS
import { FormControl, Validators } from '@angular/forms';
// IMPORTAMOS EL USERSERVICE PARA PODER USAR SUS METODOS Y ASI PODER HACER UNA PETICION HTTP
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // EL FORMCONTROL MIRA SI EL CAMPO EMAIL ESTA VACIO SI ES A SI, TE SALTARA UN MENSAJE DE ERROR DEBAJO DICIENDOTE QUE ES NECESARIO RELLENARLO
  email = new FormControl('', [Validators.required, Validators.email]);
  // DECLARANDO UNA VARIABLE AQUI Y PONIENDO [(NgModel)] EN EL HTML ANGULAR YA SABE CAZAR LAS DOS VARIABLES
  password: string;
  // VARIABLE PARA MOSTRAR O NO LA CONTRASEÑA
  hide = true;

  constructor(
    // ES NECESARIO DECLARAR MUCHAS DE LAS IMPORTACIONES DE ARRIBA PARA ASI PODER USARLAS.
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  /** 
   * METODO QUE ENVIA EL MENSAJE DE ERROR CUANDO EL CAMPO EMAIL ESTA VACIO O NO ES VALIDO
  **/
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'El campo de correo electrónico es obligatorio';
    }

    return this.email.hasError('email') ? 'El formato de correo electrónico no es correcto' : '';
  }

  /**
   * METODO PARA INICIAR SESION QUE ES LLAMADA POR EL BOTON DE INICIAR SESION DEL HTML (CLICK) 
  **/
  doLogin() {
    console.log(this.email.value + " " + this.password)
    this.userService.doLogin(this.email.value, this.password).subscribe(data => {
      console.log(data)
    })
  }

  doNewRegister() {
    this.route.navigate(['register']);
  }
}
