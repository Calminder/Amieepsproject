import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo, } from '@angular/fire/auth-guard';
import { QuestionsComponent } from './questions/questions.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { MusicTracksComponent } from './music-tracks/music-tracks.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [

  {
    path: '', component: SideNavComponent,
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: 'question',
        component: QuestionsComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: 'exercise',
        component: ExercisesComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: 'music-track',
        component: MusicTracksComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      }
    ]
  },
  {
    path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems }
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
