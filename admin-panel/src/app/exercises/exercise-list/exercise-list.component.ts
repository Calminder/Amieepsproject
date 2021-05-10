import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, matSortAnimations } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/databaseService/database.service';
import { RealtimeDatabaseService } from 'src/app/services/realtimeDatabaseService/realtime-database.service';
import { DialogService } from 'src/app/services/dialogService/dialog.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';
import { IExercise } from 'src/app/services/interfaces/exercise';
import { ExerciseComponent } from '../exercise/exercise.component';
import firebase from 'firebase';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit
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
    this.svc.getExercise().subscribe(
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

        //console.log("array",array)
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
    this.dialog.open(ExerciseComponent, dialogConfig);
  }
  onEdit(row: any)
  {
    //console.log(row);

    this.svc.poulateexerciseForm(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ExerciseComponent, dialogConfig);
  }

  onDelete(key: any, row: any)
  {
    this.dialogsvc.openConfirmDialog('Are you sure you want to delete the question').afterClosed().subscribe(res =>
    {
      if (res) {
        if (row.url != '') {
          var httpsReference = firebase.storage().refFromURL(`${ row.url }`);
          //this.files.push(httpsReference);
          //console.log('dataform url', httpsReference);
          var desertRef = firebase.storage().ref().child(httpsReference.name);

          // Delete the file
          desertRef.delete().then(() =>
          {
            // File deleted successfully
          }).catch((error) =>
          {
            // Uh-oh, an error occurred!
          });
          
        }
       
        this.svc.deleteExercise(key);
        this.notif.warn('Deleted');
      }
    });
  }

}
