import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource } from '@angular/material';
import { IQuestion } from 'src/app/Interfaces/IQuestion';
import { ApiCallsService } from 'src/app/Services/api-calls.service';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit
{

  dataSource = new MatTableDataSource<IQuestion>();
  displayedColumns: string[];
  listQuestions: IQuestion[] = [];
  constructor(private svc: ApiCallsService, private not: NotificationService, public dialogRef: MatDialogRef<LocationComponent>) { }

  async ngOnInit()
  {
    this.svc.GetLocations().subscribe(r => { });
    await this.svc.GetQuestion().subscribe((r: IQuestion[]) =>
    {
      //console.log("question-list", r);
      //console.log(ELEMENT_DATA);

      this.dataSource = new MatTableDataSource(r);
      this.displayedColumns = ['id', 'title', 'actions'];
    });
  }

  onSubmit()
  {

    if (this.svc.formLocation.valid) {
      if (!this.svc.formLocation.get('id').value) {
        const bodypost: any =
        {
          city: this.svc.formLocation.value.city,
          street: this.svc.formLocation.value.street,
          number: String(this.svc.formLocation.value.number),
          coordinate: {
            latitude: this.svc.formLocation.value.coordinate.latitude,
            longitude: this.svc.formLocation.value.coordinate.longitude
          },
          allquestions: this.listQuestions
        };
        console.log(bodypost);
        this.svc.PostLocation(bodypost).subscribe(
          data => console.log(data),
          error => console.log(error)
        );

        this.not.succes('Toegevoegd!');
      } else {
        const bodypatch: any =
        {
          id: this.svc.formLocation.value.id,
          city: this.svc.formLocation.value.city,
          street: this.svc.formLocation.value.street,
          number: this.svc.formLocation.value.number,
          coordinate: {
            latitude: Number(this.svc.formLocation.value.coordinate.latitude),
            longitude: this.svc.formLocation.value.coordinate.longitude
          },
          allquestions: this.listQuestions
        };
        console.log(bodypatch);

        this.svc.UpdateLocation(bodypatch).subscribe(
          data => console.log(data),
          error => console.log(error)
        );
        this.not.succes('Updated!');
      }
      //this.svc.patchQuestions();
      this.svc.formLocation.reset();
      this.svc.initializeLocationFormGroup();

      this.onClose();
    }
  }

  onClose()
  {
    this.svc.formLocation.reset();
    this.svc.initializeLocationFormGroup();
    this.dialogRef.close();
  }


}
