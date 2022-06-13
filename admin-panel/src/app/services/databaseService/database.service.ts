import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { IQuestion } from '../interfaces/question';
import { IExercise } from '../interfaces/exercise';
import {IMusicTrack} from '../interfaces/musicTrack';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService
{
    musicTrackForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required)
  });

  initializemusicTrackForm()
  {
    this.musicTrackForm.setValue({
      $key: null,
      title: '',
      link: ''
    });
  }

  poulatemusicTrackForm(musicTrack: any)
  {
    this.musicTrackForm.setValue(musicTrack);
  }
  ////////////////
  questionForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    source: new FormControl(''),
    sourceCheck: new FormControl(false)
  });

  initializequestionForm()
  {
    this.questionForm.setValue({
      $key: null,
      title: '',
      category: '',
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

  initializeexerciseForm()
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
  constructor(private angularFirestore: AngularFirestore) { }
  getMusicTrackDoc(id: any)
  {
    return this.angularFirestore.collection('music-tracks')
      .doc(id).valueChanges();
  }
  getMusicTracksList(){
    return this.angularFirestore.collection('music-tracks')
    .snapshotChanges();
  }
  createMusicTrack(musicTrack: IMusicTrack)
  {
    return new Promise<any>(() =>
    {
      this.angularFirestore.collection('music-tracks')
        .add(musicTrack)
        .then(response => { console.log(response); }, error => console.log
          (error));
    });
  }

  updateMusicTrack(musicTrack: IMusicTrack)
  {
    return this.angularFirestore.collection('music-tracks')
      .doc(musicTrack.$key)
      .update({
        title: musicTrack.title,
        link: musicTrack.link,
      });
  }

  deleteMusicTrack(musicTrack: IMusicTrack)
  {
    return this.angularFirestore.collection('music-tracks')
      .doc(musicTrack.$key).delete();
  };
/////////
  // Faq crud service
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
        answer: question.answer,
        source: question.source,
        category: question.category
      });
  }
/////////
  getExercise()
  {
    return this.angularFirestore.collection('Calminder-exercise')
      .snapshotChanges();
  }

  createExercise(exercise: IExercise)
  {
    return new Promise<any>(() =>
    {
      this.angularFirestore.collection('Calminder-exercise')
        .add(exercise)
        .then(response => { console.log(response); }, error => console.log
          (error));
    });
  }

  updateExercise(exercise: IExercise)
  {
    return this.angularFirestore.collection('Calminder-exercise')
      .doc(exercise.$key)
      .update({
        title: exercise.title,
        date: exercise.date,
        age: exercise.age,
        category: exercise.category,
        description: exercise.description,
        wonder: exercise.wonder,
        materials: exercise.materials,
        instructions: exercise.instructions,
        extra: exercise.extra,
        videoURL: exercise.videoURL
      });
  }

  deleteExercise(id: any)
  {
    return this.angularFirestore.collection('Calminder-exercise')
      .doc(id).delete();
  };
}
