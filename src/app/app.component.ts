import { Component } from '@angular/core';
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database-deprecated"; //AngularFireDatabase,
import {ShareDataService} from "./share-data.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AngularFireDatabase]
})
export class AppComponent {
  title = 'Angular Fire Todo';

  itemValue = '';
  items: FirebaseListObservable<any[]>;
  itm : FirebaseObjectObservable<any>;
  itemsRef: AngularFireList<any>;
  itemss: Observable<any[]>;
  constructor(db: AngularFireDatabase,private router: Router, private service: ShareDataService){
    //this.items = db.list('/items');
    this.itemsRef = db.list('/items');
    //this.itm = db.object('/items',{ preserveSnapshot: true })
    /*this.itm.subscribe(snapshot => {
      //console.log(snapshot.key)
      console.log(snapshot.val())
    });*/
    this.itemss = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  update = function(item){
    console.log(item);
    this.service.saveData("update", item);
    this.router.navigate(['/todo']);
  }

  delete = function(item){
    this.itemsRef.remove(item.key);
  }
}
