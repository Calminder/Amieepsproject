import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IQuestion } from '../interfaces/question';
import { IExercise } from '../interfaces/exercise';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
// this service can be seen in the whole application
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
    date: new FormControl(Date),
    age: new FormControl(''),
    duration: new FormControl('', Validators.required),
    category: new FormControl(0),
    description: new FormControl('', Validators.required),
    wonder: new FormControl(''),
    materials: new FormControl(''),
    instructions: new FormControl('', Validators.required),
    extra: new FormControl(''),
    url: new FormControl(''),
    musicUrl: new FormControl(''),
    videoURL: new FormControl('')
  });

  initializeexerciseFrom()
  {
    this.exerciseForm.setValue({
      $key: null,
      title: '',
      date: '',
      age: '',
      duration: '',
      category: 0,
      description: '',
      wonder: '',
      materials: '',
      instructions: '',
      extra: '',
      url: '',
      musicUrl: '',
      videoURL: ''
    });
  }
  //'url' parameter is for photos
  poulateexerciseForm(exercise: IExercise)
  {
    this.exerciseForm.setValue({
      $key: exercise.$key,
      age: exercise.age,
      title: exercise.title,
      date: new Date(exercise.date),
      duration: exercise.duration,
      category: exercise.category,
      description: exercise.description,
      wonder: exercise.wonder,
      materials: exercise.materials,
      instructions: exercise.instructions,
      extra: exercise.extra,
      url: exercise.url,
      musicUrl: exercise.musicUrl,
      videoURL: exercise.videoURL
    });
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
      age: exercise.age,
      duration: exercise.duration,
      category: exercise.category,
      description: exercise.description,
      wonder: exercise.wonder,
      materials: exercise.materials,
      instructions: exercise.instructions,
      extra: exercise.extra,
      url: exercise.url,
      date: exercise.date,
      musicUrl: exercise.musicUrl,
      videoURL: exercise.videoURL
    });

  }

  updateExercise(exercise: IExercise)
  {
    this.exerciseList.update(exercise.$key, {
      title: exercise.title,
      date: exercise.date,
      age: exercise.age,
      duration: exercise.duration,
      category: exercise.category,
      description: exercise.description,
      wonder: exercise.wonder,
      materials: exercise.materials,
      instructions: exercise.instructions,
      extra: exercise.extra,
      url: exercise.url,
      musicUrl: exercise.musicUrl,
      videoURL: exercise.videoURL
    });
  }

  deleteExercise(id: any)
  {
    this.exerciseList.remove(id);
  };


  // formatDate(date: Date): string
  // {
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   return `${ day }-${ month }-${ year }`;

  //   //date.setDate(date.getDate() + 2);
  //   //console.log(date);

  //   //return String(date);
  // }
}
