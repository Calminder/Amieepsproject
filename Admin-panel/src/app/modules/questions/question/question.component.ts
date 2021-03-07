import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IQuestion } from 'src/app/Interfaces/IQuestion';
import { ApiCallsService } from 'src/app/Services/api-calls.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit
{

  constructor(private svc: ApiCallsService, private not: NotificationService, public dialogRef: MatDialogRef<QuestionComponent>) { }

  options = [
    { id: 1, value: 'Selfie', boolSource: false, boolCA: true, boolPA: true },
    { id: 2, value: 'Multiple Choice', boolSource: true, boolCA: false, boolPA: false },
    { id: 3, value: 'foto vraag', boolSource: false, boolCA: true, boolPA: false },
    { id: 4, value: 'open vraag', boolSource: true, boolCA: true, boolPA: false }
  ];

  possibleAnswers: boolean;
  correctAnswer: boolean;
  source: boolean;
  disableSource: boolean;
  disableCA: boolean;
  disablePA: boolean;
  ngOnInit()
  {

    // if (== "Multiple Choice") {
    //   console.log("gelukt");

    // }
    this.svc.GetQuestion().subscribe(r => { });
    //console.log(this.svc.form.value.id);
  }

  onSubmit()
  {

    if (this.svc.form.valid) {
      if (!this.svc.form.get('id').value) {
        var bodypost: IQuestion =
        {
          score: Number(this.svc.form.value.score),
          type: this.svc.form.value.type,
          title: this.svc.form.value.title,
          possibleAnswers: this.svc.form.value.possibleAnswers,
          correctAnswer: this.svc.form.value.correctAnswer,
          source: this.svc.form.value.source
        };
        this.svc.PostQuestion(bodypost).subscribe(
          data => console.log(data),
          error => console.log(error)
        );
        this.not.succes('Toegevoegd!');
      } else {
        var bodypatch: IQuestion =
        {
          id: this.svc.form.value.id,
          score: Number(this.svc.form.value.score),
          type: this.svc.form.value.type,
          title: this.svc.form.value.title,
          possibleAnswers: this.svc.form.value.possibleAnswers,
          correctAnswer: this.svc.form.value.correctAnswer,
          source: this.svc.form.value.source
        };
        this.svc.UpdateQuestion(bodypatch).subscribe(
          data => console.log(data),
          error => console.log(error)
        );
        this.not.succes('Updated!');
      }


      //this.svc.patchQuestions();
      this.svc.form.reset();
      this.svc.initializeFormGroup();

      this.onClose();
    }
  }

  onClose()
  {
    this.svc.form.reset();
    this.svc.initializeFormGroup();
    this.dialogRef.close();
  }

  chosenOne(i)
  {
    this.disableSource = this.options[i].boolSource;
    this.disableCA = this.options[i].boolCA;
    this.disablePA = this.options[i].boolPA;

  }

}