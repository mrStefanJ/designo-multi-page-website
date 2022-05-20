import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  designData: any;
  personalityData: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDesign();
    this.getPersonality();
  }

  getDesign() {
    this.api.getDataDesign().subscribe((res) => {
      console.dir(res);
      this.designData = res;
    });
  }

  getPersonality(){
    this.api.getDataPerson().subscribe((res) => {
      console.dir(res);
      this.personalityData = res;
    })
  }

}
