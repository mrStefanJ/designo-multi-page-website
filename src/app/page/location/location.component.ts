import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  locationCAN = '../../../assets/images/locations/tablet/image-map-canada.png';
  locationAUS = '../../../assets/images/locations/tablet/image-map-australia.png';
  locationENG = '../../../assets/images/locations/tablet/image-map-uk.png'
  constructor() { }

  ngOnInit(): void {
  }

}
