import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

/*
 * ESTE SERVICIO ES UNA UTIL PARA PODER UTILIZARLO DESDE TODOS LOS COMPONENTES. 
 * ASÍ NO HACE FALTA ESTAR DECLARANDO UN SNACKBAR EN CADA COMPONENTE, UNICAMENTE SE LLAMA HA ESTE I SE UTILIZA.
*/ 
@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  basicSnackBar(message: string, messageClose: string) {
    this.snackBar.open(message, messageClose, {
      duration: 3000,
    });
  }
}
