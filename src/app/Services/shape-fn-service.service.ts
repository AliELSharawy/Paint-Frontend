import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ShapeFnServiceService {
  private functionSubject = new Subject<any>();
  private shapeSubject = new Subject<any>();
  private coordSubject = new Subject<any>();

  action$ = this.functionSubject.asObservable();
  shape$ = this.shapeSubject.asObservable();
  coord$ = this.coordSubject.asObservable();

  sendFn(action : any){
    this.functionSubject.next(action);
  }
  sendShape(shape : any){
    this.shapeSubject.next(shape);
  }
  sendCoord(coord: any){
    this.coordSubject.next(coord);
  }
  constructor() { }
}
