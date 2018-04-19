import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AllauthorsComponent } from './allauthors/allauthors.component';
import { NewauthorsComponent } from './newauthors/newauthors.component';
import { EditauthorsComponent } from './editauthors/editauthors.component';
import { AllquotesComponent } from './allquotes/allquotes.component';
import { NewquotesComponent } from './newquotes/newquotes.component';


@NgModule({
  declarations: [
    AppComponent,
    AllauthorsComponent,
    NewauthorsComponent,
    EditauthorsComponent,
    AllquotesComponent,
    NewquotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
