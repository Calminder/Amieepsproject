import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { IQuestion } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService
{
  questionForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required)
  });

  initializequestionFrom()
  {
    this.questionForm.setValue({
      id: null,
      title: '',
      answer: ''
    });
  }
  constructor(private angularFirestore: AngularFirestore) { }
  // Faq crud service
  poulateForm(Faq: any)
  {
    this.questionForm.setValue(Faq);
  }
  getQuestionDoc(id: any)
  {
    return this.angularFirestore.collection('question-collection')
      .doc(id).valueChanges();
  };

  getQuestionsList()
  {
    return this.angularFirestore.collection('question-collection')
      .snapshotChanges();
  }

  createQuestion(question: IQuestion)
  {
    return new Promise<any>(() =>
    {
      this.angularFirestore.collection('question-collection')
        .add(question)
        .then(response => { console.log(response); }, error => console.log
          (error));
    });
  };

  deleteQuestion(question: IQuestion)
  {
    return this.angularFirestore.collection('question-collection')
      .doc(question.$key).delete();
  }

  updateQuestion(question: IQuestion)
  {
    return this.angularFirestore.collection('question-collection')
      .doc(question.$key)
      .update({
        title: question.title,
        answer: question.answer
      });
  }
}
