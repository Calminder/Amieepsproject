import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IQuestion } from '../interfaces/question';
import { IExercise } from '../interfaces/exercise';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService
{
  questionForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
    source: new FormControl(''),
    sourceCheck: new FormControl(false)
  });

  initializequestionFrom()
  {
    this.questionForm.setValue({
      $key: null,
      title: '',
      answer: '',
      source: '',
      sourceCheck: false
    });
  }
  poulatequestionForm(Faq: any)
  {
    this.questionForm.setValue(Faq);
  }

  exerciseForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    age: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl('', Validators.required),
    wonder: new FormControl('', Validators.required),
    materials: new FormControl('', Validators.required),
    instructions: new FormControl('', Validators.required),
    extra: new FormControl('')
  });

  initializeexerciseFrom()
  {
    this.exerciseForm.setValue({
      $key: null,
      title: '',
      date: '',
      age: '',
      category: '',
      description: '',
      wonder: '',
      materials: '',
      instructions: '',
      extra: ''
    });
  }
  poulateexerciseForm(exercise: any)
  {
    this.exerciseForm.setValue(exercise);
  }

  questionList!: AngularFireList<any>;
  exerciseList!: AngularFireList<any>;

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
      answer: question.answer,
      source: question.source,
      sourceCheck: question.sourceCheck

    });
  }

  updateQuestion(question: IQuestion)
  {
    this.questionList.update(question.$key, {
      title: question.title,
      answer: question.answer,
      source: question.source,
      sourceCheck: question.sourceCheck
    });
  }

  deleteQuestion(id: any)
  {
    this.questionList.remove(id);
  };

  getExercise()
  {
    this.exerciseList = this.firebase.list('Calminder-exercise');
    return this.exerciseList.snapshotChanges();
  }

  createExercise(exercise: IExercise)
  {
    this.exerciseList.push({
      title: exercise.title,
      date: exercise.date,
      age: exercise.age,
      category: exercise.category,
      description: exercise.description,
      wonder: exercise.wonder,
      materials: exercise.materials,
      instructions: exercise.instructions,
      extra: exercise.extra
    });
  }

  updateExercise(exercise: IExercise)
  {
    this.exerciseList.update(exercise.date, {
      title: exercise.title,
      date: exercise.date,
      age: exercise.age,
      category: exercise.category,
      description: exercise.description,
      wonder: exercise.wonder,
      materials: exercise.materials,
      instructions: exercise.instructions,
      extra: exercise.extra
    });
  }

  deleteExercise(id: any)
  {
    this.exerciseList.remove(id);
  };
}
