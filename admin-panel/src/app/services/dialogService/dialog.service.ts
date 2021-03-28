import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmationComponent } from '../../popup-confirmation/popup-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService
{

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg: string)
  {
    return this.dialog.open(PopupConfirmationComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "10px" },
      data: {
        message: msg
      }
    });
  }
}
