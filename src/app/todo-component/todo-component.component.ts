import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database-deprecated";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ShareDataService} from "../share-data.service";
import {Todo} from "../Todo";
@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css'],
  providers:[AngularFireDatabase]
})
export class TodoComponentComponent implements OnInit {
  title = 'Firebase Todo App';
  form;
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, private router: Router, private service:ShareDataService){
    this.items = db.list('/items');
  }
  ngOnInit() {

    let data = this.service.getData("update");
    if(data == undefined){
      data = new Todo();
    }
    this.form = new FormGroup({
      key: new FormControl(data.key),
      taskname: new FormControl(data.taskname, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      status: new FormControl(data.status),
      action: new FormControl(data.action),
      startdate: new FormControl(data.startdate),
      duedate: new FormControl(data.duedate)
    });
  }


  onSubmit(values){
    var save = {
      taskname: values.taskname,
      action: values.action,
      status: values.status,
      duedate: values.duedate,
      startdate: values.startdate,
    };
    if(undefined == values.key){
      this.items.push(save);
    } else{
      this.items.update(values.key,save)
    }


    this.router.navigate(['/']);
  }
}
