import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  email!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void
  {
  }

  logIn()
  {
    console.log("test", this.email);

    this.authService.SignIn(this.email, this.password).then(() =>
    {
      this.email = this.password = '';
    });
  }
}
