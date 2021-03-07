import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, matSortAnimations, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ILocation } from 'src/app/Interfaces/ILocation';
import { ApiCallsService } from 'src/app/Services/api-calls.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { LocationComponent } from '../location/location.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { IQuestion } from 'src/app/Interfaces/IQuestion';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LocationListComponent implements OnInit
{
  dataSource = new MatTableDataSource<ILocation>();
  dataSource2 = new MatTableDataSource<IQuestion>();
  displayedColumns: string[];
  displayedColumns2: string[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  searchKey: string;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  constructor(private dialogsvc: DialogService, private svc: ApiCallsService, private dialog: MatDialog, private notif: NotificationService) { }

  async ngOnInit()
  {
    this.svc.GetLocations().subscribe((r) =>
    {
      //console.log("question-list", r);
      //console.log(ELEMENT_DATA);
      const rows = [];
      r.forEach(element => rows.push(element, { detailRow: true, element }));
      this.dataSource = new MatTableDataSource(rows);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.displayedColumns = ['id', 'street', 'actions'];

    });
    this.svc.GetQuestion().subscribe((r: IQuestion[]) =>
    {
      //console.log("question-list", r);
      //console.log(ELEMENT_DATA);

      this.dataSource2 = new MatTableDataSource(r);
      this.displayedColumns2 = ['id', 'title', 'actions'];
    });
  }

  searchClear()
  {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter()
  {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';


    this.dialog.open(LocationComponent, dialogConfig);
  }
  onEdit(row)
  {
    this.svc.poulateFormLocation(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';

    this.dialog.open(LocationComponent, dialogConfig);
  }

  onDelete(key)
  {
    this.dialogsvc.openConfirmDialog('Bent u zeker dat u de vraag wilt verwijderen?').afterClosed().subscribe(res =>
    {
      if (res) {
        this.svc.DeleteLocation(key).subscribe(
          data => console.log(data),
          error => console.log(error)
        );
        this.notif.warn('Verwijderd');
      }
    });
  }

  idLocaction: any;
  Location(data)
  {
    console.log("begin idlocation: ", data);

    this.idLocaction = data;
  }
  boolAdd: boolean[] = [];

  booleanChecker()
  {

  }
  onAddQuestion(data)
  {
    var bodyPatch =
    {
      id: this.idLocaction.id,
      city: this.idLocaction.city,
      street: this.idLocaction.street,
      number: this.idLocaction.number,
      allquestions: [{
        id: data.id,
        type: data.type,
        source: data.source,
        title: data.title,
        possibleAnswers: data.possibleAnswers,
        correctAnswer: data.correctAnswer,
        score: data.score
      },]
    };
    this.svc.UpdateLocation(bodyPatch).subscribe();
    this.boolAdd[data.id] = false;

    console.log("dataquestion: " + data + " idLocation: " + this.idLocaction);

  }
  onDeleteQuestion(data)
  {
    this.boolAdd[data.id] = true;
  }

}
