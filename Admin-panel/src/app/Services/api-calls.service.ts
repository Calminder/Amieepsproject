import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ILocation } from '../Interfaces/ILocation';
import { IQuestion } from '../Interfaces/IQuestion';


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService
{
  urlQuestion = 'https://localhost:44362/api/question';
  urlLocation = 'https://localhost:44362/api/Destinations';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    type: new FormControl(0),
    source: new FormControl(''),
    correctAnswer: new FormControl(''),
    score: new FormControl(''),
    possibleAnswers: new FormControl(''),

  });

  formLocation: FormGroup = new FormGroup({
    id: new FormControl(null),
    city: new FormControl(''),
    street: new FormControl(''),
    number: new FormControl('', Validators.required),
    coordinate: new FormGroup({
      id: new FormControl(null),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required)
    }),
    allquestions: new FormControl('')
  });

  initializeFormGroup()
  {
    this.form.setValue({
      id: null,
      title: '',
      type: 0,
      source: '',
      correctAnswer: '',
      score: '',
      possibleAnswers: ''
    });
  }



  initializeLocationFormGroup()
  {
    this.formLocation.patchValue({
      id: null,
      city: '',
      street: '',
      number: '',
      coordinate: ''
    });
  }

  constructor(private http: HttpClient) { }


  //Question ----------------------------------------------------------------------------------------------------------------------------------------
  PostQuestion(newQuestion: any)
  {
    //console.log(newQuestion);

    //this.http.post<IQuestion>(this.urlQuestion, newQuestion);
    return this.http.post<any>(this.urlQuestion, newQuestion);
  }
  GetQuestion()
  {
    return this.http.get<IQuestion[]>(this.urlQuestion);
  }
  GetQuestionById(id: number)
  {
    return this.http.get<IQuestion>(this.urlQuestion + `/${ id }`);
  }
  poulateForm(question)
  {
    this.form.setValue(question);
  }
  UpdateQuestion(updateQuestion: any)
  {
    return this.http.patch<any>(this.urlQuestion, updateQuestion);
  }
  DeleteQuestion(id: number)
  {
    return this.http.delete(this.urlQuestion + `/${ id }`);
  };


  //Location --------------------------------------------------------------------------------------------------------------------
  PostLocation(newLocation: any)
  {
    return this.http.post<any>(this.urlLocation, newLocation);
  }
  GetLocations()
  {
    return this.http.get<ILocation[]>(this.urlLocation);
  }
  GetLocationById(id: number)
  {
    return this.http.get<ILocation>(this.urlLocation + `/${ id }`);
  }
  poulateFormLocation(location)
  {
    this.formLocation.setValue(location);
  }
  UpdateLocation(updateLocation: any)
  {
    return this.http.patch<any>(this.urlLocation, updateLocation);
  }
  DeleteLocation(id: number)
  {
    return this.http.delete(this.urlLocation + `/${ id }`);
  };

}
