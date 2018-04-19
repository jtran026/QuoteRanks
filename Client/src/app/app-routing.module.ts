import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllauthorsComponent } from './allauthors/allauthors.component';
import { NewauthorsComponent } from './newauthors/newauthors.component';
import { EditauthorsComponent } from './editauthors/editauthors.component';
import { AllquotesComponent } from './allquotes/allquotes.component';
import { NewquotesComponent } from './newquotes/newquotes.component';

const routes: Routes = [
  { path: '',component: AllauthorsComponent },
  { path: 'new',component: NewauthorsComponent },
  { path: 'edit',component: EditauthorsComponent },
  { path: 'quotes/:id',component: AllquotesComponent},
  { path: 'write/:id',component: NewquotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
