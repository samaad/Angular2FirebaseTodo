import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import {AppRoutingModule} from "./app-routing.module";
import {ShareDataService} from "./share-data.service";
import {CapitalizedPipe} from "./app.capitalized";



@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    CapitalizedPipe
  ],
  imports: [
    BrowserModule, FormsModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
