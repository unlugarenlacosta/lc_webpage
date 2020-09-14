import { Component, OnInit } from '@angular/core';
// IMPORTAMOS ATRIBUTOS DEL FORMS PARA PODER RELLENAR I UTILIZAR FORMULARIOS EN NUESTRA WEB, COMO EJEMPLO FORMCONTROL QUE ES PARA CONTROLAR VALIDACIONES DE EMAIL ETC, COMO EL VALIDATORS
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  // EL FORMCONTROL MIRA SI EL CAMPO EMAIL ESTA VACIO SI ES A SI, TE SALTARA UN MENSAJE DE ERROR DEBAJO DICIENDOTE QUE ES NECESARIO RELLENARLO
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

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

  doRecoveryPassword() {

  }

  doRecoveryAccount() {

  }

  doSendEmailVerification() {

  }
}
