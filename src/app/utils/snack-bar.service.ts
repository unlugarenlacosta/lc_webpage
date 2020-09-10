import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  basicSnackBar(message: string, messageClose: string) {

    this.snackBar.open(message, messageClose);
  }
}
