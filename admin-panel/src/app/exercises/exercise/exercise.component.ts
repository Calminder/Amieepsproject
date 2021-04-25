import { Component, OnInit, Optional, ViewChild, ElementRef } from '@angular/core';
import { IExercise } from 'src/app/services/interfaces/exercise';
import { RealtimeDatabaseService } from 'src/app/services/realtimeDatabaseService/realtime-database.service';
import { DatabaseService } from 'src/app/services/databaseService/database.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ExerciseListComponent } from '../exercise-list/exercise-list.component';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit
{
  files: File[] = [];

  onSelect(event: any)
  {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any)
  {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  constructor(public svc: RealtimeDatabaseService, private note: NotificationService,
    @Optional() public dialogRef: MatDialogRef<ExerciseListComponent>) { }
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
  }


  onSubmit()
  {
    if (this.svc.exerciseForm.valid) {
      if (!this.svc.exerciseForm.get('$key')?.value) {
        var exercisepost: IExercise = {
          title: this.svc.exerciseForm.value.title,
          date: String(this.svc.exerciseForm.value.date),
          age: this.svc.exerciseForm.value.age,
          category: this.svc.exerciseForm.value.category,
          description: this.svc.exerciseForm.value.description,
          wonder: this.svc.exerciseForm.value.wonder,
          materials: this.svc.exerciseForm.value.materials,
          instructions: this.svc.exerciseForm.value.instructions,
          extra: this.svc.exerciseForm.value.extra,
        };
        console.log(exercisepost);

        // this.svc.createExercise(exercisepost);
        this.svc.updateExercise(exercisepost);

        this.note.succes('was successfully added!');
      } else {
        var exerciseupdate: IExercise = {
          $key: this.svc.exerciseForm.value.$key,
          title: this.svc.exerciseForm.value.title,
          date: String(this.svc.exerciseForm.value.date),
          age: this.svc.exerciseForm.value.age,
          category: this.svc.exerciseForm.value.category,
          description: this.svc.exerciseForm.value.description,
          wonder: this.svc.exerciseForm.value.wonder,
          materials: this.svc.exerciseForm.value.materials,
          instructions: this.svc.exerciseForm.value.instructions,
          extra: this.svc.exerciseForm.value.extra,
        };
        console.log(exerciseupdate);

        this.svc.updateExercise(exerciseupdate);
        this.note.succes('was successfully updated!');
      }
      this.svc.questionForm.reset();
      this.svc.initializequestionFrom();
      this.onClose();
    }
  }

  onClose()
  {
    this.svc.questionForm.reset();
    this.svc.initializequestionFrom();
    this.dialogRef.close();
  }

}
