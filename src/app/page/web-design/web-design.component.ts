import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  dataWebDesign: any;
  design: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getData();
    this.getDataDesign();
  }

  getData(){
    this.service.getDataWebDesign().subscribe(res => {
      this.dataWebDesign = res;
    })
  }

  getDataDesign(){
    this.service.getDataDesign().subscribe(res => {
      this.design = res.slice(1);
      console.log(this.design);
    })
  }
}
