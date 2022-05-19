import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private service: HttpClient) { }

  getDataDesign(){
    return this.service.get<any>("http://localhost:3000/design");
  }
  getDataPerson(){
    return this.service.get<any>("http://localhost:3000/person");
  }

  getDataWebDesign(){
    return this.service.get<any>("http://localhost:3000/webDesign");
  }

  getDataAppDesign(){
    return this.service.get<any>("http://localhost:3000/appDesign");
  }
  getDataGraphicDesign(){
    return this.service.get<any>("http://localhost:3000/graphicDesign");
  }
}
