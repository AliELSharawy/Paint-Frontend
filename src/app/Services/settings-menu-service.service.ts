import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingsMenuServiceService {
  private actionHolder = new Subject<any>();
  private shapesHolder = new Subject<any>();
  action$ = this.actionHolder.asObservable();
  shapes$ = this.shapesHolder.asObservable();

  sendActionToCanvas(action: any){
    this.actionHolder.next(action);
  }

  sendShapesToCanvas(shapes : any){
    this.shapesHolder.next(shapes);
  }
  constructor() { }
}
