import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-app-design',
  templateUrl: './app-design.component.html',
  styleUrls: ['./app-design.component.scss']
})
export class AppDesignComponent implements OnInit {

  dataApiDesign: any;
  design: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getData();
    this.getDataDesign();
  }

  getData(){
    this.service.getDataAppDesign().subscribe(res => {
      this.dataApiDesign = res;
    })
  }

  getDataDesign(){
    this.service.getDataDesign().subscribe(res => {
      this.design = res;
    })
  }
}
