import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackFrontLinkService {

  constructor(private httpClient : HttpClient) {}

  addShape(shape : any){
    const httpHeaders = new HttpHeaders({'content-type': 'application/json'});
    return this.httpClient.post('http://localhost:8080/paint/addShape', shape,
      {headers: httpHeaders});
  }

  getShapes(){
    const httpHeaders = new HttpHeaders({'content-type': 'application/json'});
    return this.httpClient.get('http://localhost:8080/paint/allShapes', {headers: httpHeaders});
  }

  findShape(coordinates: any){
    const httpHeaders = new HttpHeaders({'content-type': 'application/json'});
    return this.httpClient.post('http://localhost:8080/paint/findShape', coordinates,  {headers: httpHeaders});
  }

  deleteShape(coordinates : any){
    const httpHeaders = new HttpHeaders({'content-type': 'application/json'});
    return this.httpClient.post('http://localhost:8080/paint/deleteShape', coordinates,  {headers: httpHeaders});
  }

  undo() {
    console.log("undosend");
    return this.httpClient.get('http://localhost:8080/paint/undo');
  }
  redo(){
    console.log("redosend");
    return this.httpClient.get('http://localhost:8080/paint/redo');
  }
  open(){
    console.log("opensend");
    return this.httpClient.get('http://localhost:8080/paint/open');
  }
  save(){
    console.log("savesend");
    return this.httpClient.get('http://localhost:8080/paint/save');
  }
  saveAs(type : string){
    if(type == 'XML') {
      console.log("savexml");
      return this.httpClient.get('http://localhost:8080/paint/saveAs/XML');
    }
    else {
      console.log("savejson");
      return this.httpClient.get('http://localhost:8080/paint/saveAs/JSON');
    }
  }

}
