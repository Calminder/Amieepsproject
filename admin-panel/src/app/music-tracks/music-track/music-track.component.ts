import { Component, OnInit, Optional, ViewChild, ElementRef } from '@angular/core';
import {IMusicTrack} from 'src/app/services/interfaces/musicTrack';
import {MusicTrackListComponent} from '../music-track-list/music-track-list.component';
import { RealtimeDatabaseService } from 'src/app/services/realtimeDatabaseService/realtime-database.service';
import { DatabaseService } from 'src/app/services/databaseService/database.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";
import firebase from 'firebase';
import { snapshotChanges } from '@angular/fire/database';

@Component({
  selector: 'app-music-track',
  templateUrl: './music-track.component.html',
  styleUrls: ['./music-track.component.scss']
})
export class MusicTrackComponent implements OnInit {

  constructor(public svc: RealtimeDatabaseService, private note: NotificationService,
    @Optional() public dialogRef: MatDialogRef<MusicTrackListComponent>,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.svc.getMusicTracks();
  }

  onSubmit()
  {
    if (this.svc.musicTrackForm.valid) {
      if (!this.svc.musicTrackForm.get('$key')?.value) {
        var musicTrackPost: IMusicTrack = {
          title: this.svc.musicTrackForm.value.title,
          link: this.svc.musicTrackForm.value.link
        };
        this.svc.createMusicTrack(musicTrackPost);
        this.note.succes('was successfully added!');
      } else {
        var musicTrackUpdate: IMusicTrack = {
          $key: this.svc.musicTrackForm.value.$key,
          title: this.svc.musicTrackForm.value.title,
          link: this.svc.musicTrackForm.value.link
        };
        this.svc.updateMusicTrack(musicTrackUpdate);
        this.note.succes('was successfully updated!');
      }
      this.svc.musicTrackForm.reset();
      this.svc.initializemusicTrackForm();
      this.onClose();
    }
  }

  onClose()
  {
    this.svc.musicTrackForm.reset();
    this.svc.initializemusicTrackForm();
    this.dialogRef.close();
  }
}
