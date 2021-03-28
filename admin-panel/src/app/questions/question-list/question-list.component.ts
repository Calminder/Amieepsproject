import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, matSortAnimations } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IQuestion } from 'src/app/services/interfaces/question';
import { DatabaseService } from 'src/app/services/databaseService/database.service';
import { RealtimeDatabaseService } from 'src/app/services/realtimeDatabaseService/realtime-database.service';
import { DialogService } from 'src/app/services/dialogService/dialog.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit
{
  public dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey!: string;
  constructor(private dialogsvc: DialogService, private svc: RealtimeDatabaseService
    , private dialog: MatDialog, private notif: NotificationService) { }

  async ngOnInit()
  {
    this.svc.getQuestions().subscribe(
      r =>
      {
        let array = r.map(item =>
        {

          return {
            $key: item.key,
            ...item.payload.val()
          };
          //console.log("item");
        });


        this.dataSource = new MatTableDataSource(array);
        //console.log("Rr", this.dataSource.filteredData.length);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.displayedColumns = ["id", "title", "actions"];
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
  onEdit(row: any)
  {
    this.svc.poulatequestionForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(QuestionComponent, dialogConfig);
  }

  onDelete(key: any)
  {
    this.dialogsvc.openConfirmDialog('Are you sure you want to delete the question').afterClosed().subscribe(res =>
    {
      if (res) {
        this.svc.deleteQuestion(key);
        this.notif.warn('Deleted');
      }
    });
  }

}
