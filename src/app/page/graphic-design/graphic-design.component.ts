import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  dataGraphicDesign: any;
  design: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getData();
    this.getDataDesign();
  }

  getData(){
    this.service.getDataGraphicDesign().subscribe(res => {
      this.dataGraphicDesign = res;
    })
  }

  getDataDesign(){
    this.service.getDataDesign().subscribe(res => {
      console.log(res)
      this.design = res.slice(0,2);
    })
  }


}
