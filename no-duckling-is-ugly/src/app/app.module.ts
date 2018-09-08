import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { HistoryComponent } from './history/history.component';
import { AnalysisComponent } from './analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClassroomComponent,
    HistoryComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
