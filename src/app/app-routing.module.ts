/**
 * Created by Dell on 11/5/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponentComponent} from "./todo-component/todo-component.component";
import {AppComponent} from "./app.component";

const routes: Routes = <Routes>[
  {path: 'todo', component: TodoComponentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
