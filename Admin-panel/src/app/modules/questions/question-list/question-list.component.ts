import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, matSortAnimations, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { IQuestion } from 'src/app/Interfaces/IQuestion';
import { ApiCallsService } from 'src/app/Services/api-calls.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit
{
  dataSource = new MatTableDataSource<IQuestion>();
  displayedColumns: string[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  searchKey: string;
  constructor(private dialogsvc: DialogService, private svc: ApiCallsService, private dialog: MatDialog, private notif: NotificationService) { }

  async ngOnInit()
  {
    await this.svc.GetQuestion().subscribe((r: IQuestion[]) =>
    {
      //console.log("question-list", r);
      //console.log(ELEMENT_DATA);

      this.dataSource = new MatTableDataSource(r);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.displayedColumns = ['id', 'title', 'actions'];
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
    this.dialog.open(QuestionComponent, dialogConfig);
  }
  onEdit(row)
  {
    this.svc.poulateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(QuestionComponent, dialogConfig);
  }

  onDelete(key)
  {
    this.dialogsvc.openConfirmDialog('Bent u zeker dat u de vraag wilt verwijderen?').afterClosed().subscribe(res =>
    {
      if (res) {
        this.svc.DeleteQuestion(key).subscribe(
          data => console.log(data),
          error => console.log(error)
        );
        this.notif.warn('Verwijderd');
      }
    });
  }

}
