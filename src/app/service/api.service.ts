import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUS } from '../model/contacUs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'http://localhost:3000';

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

  addContactUs(contact: ContactUS) {
    return this.service.post("http://localhost:3000/contact", contact);
  }
}
