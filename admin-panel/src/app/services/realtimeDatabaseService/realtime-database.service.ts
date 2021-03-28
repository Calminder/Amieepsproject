import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IQuestion } from '../interfaces/question';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService
{
  questionForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required)
  });

  initializequestionFrom()
  {
    this.questionForm.setValue({
      $key: null,
      title: '',
      answer: ''
    });
  }
  poulateForm(Faq: any)
  {
    this.questionForm.setValue(Faq);
  }

  questionList!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }


  getQuestions()
  {
    this.questionList = this.firebase.list('questions');
    return this.questionList.snapshotChanges();
  }

  createQuestion(question: IQuestion)
  {
    this.questionList.push({
      title: question.title,
      answer: question.answer
    });
  }

  updateQuestion(question: IQuestion)
  {
    this.questionList.update(question.$key, {
      title: question.title,
      answer: question.answer
    });
  }

  deleteQuestion(id: any)
  {
    this.questionList.remove(id);
  };
}
