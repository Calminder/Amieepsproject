import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatGridListModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatSnackBarModule, MatIconModule, MatSortModule, MatDialogModule, MatToolbar, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { QuestionsComponent } from 'src/app/modules/questions/questions.component';
import { QuestionComponent } from 'src/app/modules/questions/question/question.component';
import { ApiCallsService } from 'src/app/Services/api-calls.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuestionListComponent } from 'src/app/modules/questions/question-list/question-list.component';
import { PopupConfirmationComponent } from 'src/app/modules/popup-confirmation/popup-confirmation.component';
import { LocationsComponent } from 'src/app/modules/locations/locations.component';
import { LocationComponent } from 'src/app/modules/locations/location/location.component';
import { LocationListComponent } from 'src/app/modules/locations/location-list/location-list.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    QuestionsComponent,
    QuestionComponent,
    QuestionListComponent,
    PopupConfirmationComponent,
    LocationsComponent,
    LocationComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [
    DashboardService,
    ApiCallsService
  ],
  entryComponents: [QuestionComponent, LocationComponent, PopupConfirmationComponent]
})
export class DefaultModule { }
