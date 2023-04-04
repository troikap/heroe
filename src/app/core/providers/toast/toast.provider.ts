import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastProvider {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  public presentToast(message: string) {
    this.matSnackBar.open(message, 'Cerrar');
  }
}
