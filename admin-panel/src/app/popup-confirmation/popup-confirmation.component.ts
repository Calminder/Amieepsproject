
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.scss']
})
export class PopupConfirmationComponent implements OnInit
{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PopupConfirmationComponent>) { }

  ngOnInit()
  {
  }

  closeDialog()
  {
    this.dialogRef.close(false);
  }

}
