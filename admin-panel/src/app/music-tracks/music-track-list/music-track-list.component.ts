import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, matSortAnimations } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/databaseService/database.service';
import { RealtimeDatabaseService } from 'src/app/services/realtimeDatabaseService/realtime-database.service';
import { DialogService } from 'src/app/services/dialogService/dialog.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';
import { IMusicTrack } from 'src/app/services/interfaces/musicTrack';
import firebase from 'firebase';
import {MusicTrackComponent} from '../music-track/music-track.component';
@Component({
  selector: 'app-music-track-list',
  templateUrl: './music-track-list.component.html',
  styleUrls: ['./music-track-list.component.scss']
})
export class MusicTrackListComponent implements OnInit {
/*
  constructor() { }

  ngOnInit(): void {
  }
*/
  //////////////////// 
  public dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey!: string;

  constructor(private dialogsvc: DialogService, private svc: RealtimeDatabaseService
    , private dialog: MatDialog, private notif: NotificationService) { }

  async ngOnInit()
  {
    this.svc.getMusicTracks().subscribe(
      r =>
      {
        let array = r.map(item =>
        {

          return {
            $key: item.key,

            ...item.payload.val()
          };

        });

        //console.log("array", array);
        this.dataSource = new MatTableDataSource(array);
        //console.log("Rr", this.dataSource.filteredData.length);
        this.dataSource.sort = this.sort;
        //this.dataSource.sortingDataAccessor
        this.dataSource.paginator = this.paginator;
        this.displayedColumns = ["id", "title", "date" , "actions"];
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
    this.dialog.open(MusicTrackComponent, dialogConfig);
  }
  onEdit(row: any)
  {
    //console.log(row);

    this.svc.poulatemusicTrackForm(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    this.dialog.open(MusicTrackComponent, dialogConfig);
  }

  onDelete(key: any, row: any)
  {
    this.dialogsvc.openConfirmDialog('Are you sure you want to delete the music track').afterClosed().subscribe(res =>
    {
      if (res) {
        this.svc.deleteMusicTrack(key);
        this.notif.warn('Deleted');
      }
    });
  }

}
