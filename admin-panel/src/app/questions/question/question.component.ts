import { Component, OnInit, Optional } from '@angular/core';
import { IQuestion } from 'src/app/services/interfaces/question';
import { DatabaseService } from 'src/app/services/databaseService/database.service';
import { RealtimeDatabaseService } from 'src/app/services/realtimeDatabaseService/realtime-database.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
import { QuestionListComponent } from '../question-list/question-list.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit
{
  options = [
    { id: 1, value: 'General' },
    { id: 2, value: 'Teachers' },
    { id: 3, value: 'Mindfulness' }
  ];
  constructor(public svc: RealtimeDatabaseService, private note: NotificationService,
    @Optional() public dialogRef: MatDialogRef<QuestionListComponent>) { }

  ngOnInit(): void
  {
    this.svc.getQuestions();

  }

  onSubmit()
  {
    if (this.svc.questionForm.valid) {
      if (!this.svc.questionForm.get('$key')?.value) {
        var questionpost: IQuestion = {
          title: this.svc.questionForm.value.title,
          answer: this.svc.questionForm.value.answer,
          source: this.svc.questionForm.value.source,
          sourceCheck: this.svc.questionForm.value.sourceCheck,
          category: this.svc.questionForm.value.category
        };
        this.svc.createQuestion(questionpost);
        this.note.succes('was successfully added!');
      } else {
        var questionupdate: IQuestion = {
          $key: this.svc.questionForm.value.$key,
          title: this.svc.questionForm.value.title,
          answer: this.svc.questionForm.value.answer,
          source: this.svc.questionForm.value.source,
          sourceCheck: this.svc.questionForm.value.sourceCheck,
          category: this.svc.questionForm.value.category
        };
        this.svc.updateQuestion(questionupdate);
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
