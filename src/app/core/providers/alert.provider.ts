import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/modals/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertProvider {

  constructor(
    private matDialog: MatDialog,
  ) { }

  public async presentAlert(title: string, message: string): Promise<any> {
    return new Promise<any>(resolve => {
      const dialogRef = this.matDialog.open(AlertComponent, {
        data: {title, message},
      });
      dialogRef.afterClosed().subscribe( async result => {
        resolve(result);
      });
    })
  }
}
