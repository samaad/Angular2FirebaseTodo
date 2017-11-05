import { Injectable } from '@angular/core';
import {Todo} from "./Todo";

@Injectable()
export class ShareDataService {

  sharingData:Todo = <Todo>{};

  constructor() { }

  saveData(id, data){
    this.sharingData[id] = data;
  }

  getData(id){
    return this.sharingData[id];
  }
}
