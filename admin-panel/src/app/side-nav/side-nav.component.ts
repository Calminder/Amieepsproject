import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoaderService } from '../services/loaderService/loader.service';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent 
{

  isDarkTheme: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private authService: AuthService, private breakpointObserver: BreakpointObserver, public loaderService: LoaderService) { }

  ngOnInit()
  {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection()
  {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }

  Logout()
  {
    this.authService.SignOut();
  }
}
