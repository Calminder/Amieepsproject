import { Component, OnInit, Optional, ViewChild, ElementRef } from '@angular/core';
import { IExercise } from 'src/app/services/interfaces/exercise';
import { RealtimeDatabaseService } from 'src/app/services/realtimeDatabaseService/realtime-database.service';
import { DatabaseService } from 'src/app/services/databaseService/database.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ExerciseListComponent } from '../exercise-list/exercise-list.component';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";
import firebase from 'firebase';
import { snapshotChanges } from '@angular/fire/database';
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit
{
  files: File[] = [];
  imageToFirebase: any[] = [];
  isHovering!: boolean;
  selectedFile!: File;
  downloadURL!: string;
  toggleHover(event: boolean)
  {
    this.isHovering = event;
  }


  onSelect(event: any)
  {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.imageToFirebase.push(event);
    console.log("files", this.files[0]);
  }

  onRemove(event: any)
  {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    this.imageToFirebase.splice(this.imageToFirebase.indexOf(event), 1);
  }

  fileChangeEvent(event: any)
  {

  }

  constructor(public svc: RealtimeDatabaseService, private note: NotificationService,
    @Optional() public dialogRef: MatDialogRef<ExerciseListComponent>,
    private storage: AngularFireStorage) { }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) =>
  {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  };

  ngOnInit(): void
  {
    this.svc.getExercise();
    //console.log(this.svc.exerciseForm.value.date);

  }


  onSubmit()
  {
    var uploadTask = firebase.storage().ref().child(`${ this.imageToFirebase[0].addedFiles[0].name }`).put(this.imageToFirebase[0].addedFiles[0].name);
    console.log(uploadTask);
    uploadTask.on('state_changed', (snapshotChanges) =>
    {

    },
      (error) =>
      {
        console.log(error);
      },
      () =>
      {
        uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) =>
        {
          console.log('File available at', downloadURL);
          this.downloadURL = await downloadURL;
          if (this.svc.exerciseForm.valid) {
            if (!this.svc.exerciseForm.get('$key')?.value) {
              var exercisepost: IExercise = {
                title: this.svc.exerciseForm.value.title,
                date: this.svc.exerciseForm.value.date,
                age: this.svc.exerciseForm.value.age,
                duration: this.svc.exerciseForm.value.duration,
                category: this.svc.exerciseForm.value.category,
                description: this.svc.exerciseForm.value.description,
                wonder: this.svc.exerciseForm.value.wonder,
                materials: this.svc.exerciseForm.value.materials,
                instructions: this.svc.exerciseForm.value.instructions,
                extra: this.svc.exerciseForm.value.extra,
                url: this.downloadURL
              };
              //console.log(exercisepost);

              // this.svc.createExercise(exercisepost);
              this.svc.updateExercise(exercisepost);
              console.log("this line 114", downloadURL);

              this.note.succes('was successfully added!');
            } else {
              var exerciseupdate: IExercise = {
                $key: this.svc.exerciseForm.value.$key,
                title: this.svc.exerciseForm.value.title,
                date: this.svc.exerciseForm.value.date,
                age: this.svc.exerciseForm.value.age,
                duration: this.svc.exerciseForm.value.duration,
                category: this.svc.exerciseForm.value.category,
                description: this.svc.exerciseForm.value.description,
                wonder: this.svc.exerciseForm.value.wonder,
                materials: this.svc.exerciseForm.value.materials,
                instructions: this.svc.exerciseForm.value.instructions,
                extra: this.svc.exerciseForm.value.extra,
                url: this.downloadURL
              };
              //console.log(exerciseupdate);

              this.svc.updateExercise(exerciseupdate);
              this.fileChangeEvent(this.imageToFirebase[0]);
              this.note.succes('was successfully updated!');
            }
            this.svc.exerciseForm.reset();
            this.svc.initializeexerciseFrom();
            this.onClose();
          }
        });

      });
    //this.fileChangeEvent(this.imageToFirebase[0]);
  }

  onClose()
  {
    this.onRemove(this.imageToFirebase[0]);
    this.svc.exerciseForm.reset();
    this.svc.initializeexerciseFrom();
    this.dialogRef.close();
  }

}
