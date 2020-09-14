import { Component, OnInit } from '@angular/core';
// IMPORTAMOS ROUTER PARA PODER MOVERNOS POR LAS DIFERENTES PAGINAS ENRUTANDO NUESTRA WEB
import { Router } from '@angular/router';
// IMPORTAMOS ATRIBUTOS DEL FORMS PARA PODER RELLENAR I UTILIZAR FORMULARIOS EN NUESTRA WEB, COMO EJEMPLO FORMCONTROL QUE ES PARA CONTROLAR VALIDACIONES DE EMAIL ETC, COMO EL VALIDATORS
import { FormControl, Validators } from '@angular/forms';
// IMPORTAMOS EL USERSERVICE PARA PODER USAR SUS METODOS Y ASI PODER HACER UNA PETICION HTTP
import { UserService } from '../../services/user.service';
// IMPORTAMOS EL SERVICE CREADO DE SNACKBAR PARA PODER UTILIZARLO
import { SnackBarService } from '../../utils/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    // EL FORMCONTROL MIRA SI EL CAMPO EMAIL ESTA VACIO SI ES A SI, TE SALTARA UN MENSAJE DE ERROR DEBAJO DICIENDOTE QUE ES NECESARIO RELLENARLO
    email = new FormControl('', [Validators.required, Validators.email]);
    // DECLARANDO UNA VARIABLE AQUI Y PONIENDO [(NgModel)] EN EL HTML ANGULAR YA SABE CAZAR LAS DOS VARIABLES
    username: string;
    password: string;
    passwordConfirm: string;
    // VARIABLE PARA MOSTRAR O NO LA CONTRASEÑA
    hidePassword = true;
    hidePasswordConfirm = true;

  constructor(
    private route: Router,
    private userService: UserService,
    private snackBarService: SnackBarService
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

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  /**
   * METODO PARA REGISTRAR HA UN USUARIO EN LA BASE DE DATOS
  **/
  doRegister() {
    // letters condiciona a que el username tenga letras o numeros.
    let letters = /^[0-9a-zA-Z]+$/;
    if(!this.email.hasError('email') && this.password != undefined && this.passwordConfirm != undefined && this.username != undefined && this.password.length < 8 && this.passwordConfirm.length < 8 && this.username.match(letters)) {
      if(this.password == this.passwordConfirm) {
        this.userService.doRegister(this.email.value, this.username, this.password).subscribe((data) => {
          this.snackBarService.basicSnackBar('Usuario creado correctamente', 'Cerrar');
          this.route.navigate(['login'])
        })
      }else {
        this.snackBarService.basicSnackBar('Las contraseñas no cuenciden', 'Cerrar');
      }
    }else {
      this.snackBarService.basicSnackBar('Falta algún campo por rellenar o algún campo no es correcto', 'Cerrar');
    }
  }

  /**
   * METODO PARA CANCELAR Y TE DEVOLVERA A LA PANTALLA DEL LOGIN
  **/
  doCancel() {
    this.route.navigate(['login']);
  }
}
