import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { HistoryComponent } from './history/history.component';
import { AnalysisComponent } from './analysis/analysis.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'classroom', component: ClassroomComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'analysis', component: AnalysisComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
