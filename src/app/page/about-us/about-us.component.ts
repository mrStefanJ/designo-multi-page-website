import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  imageHero: string = '../../../assets/images/about/desktop/image-about-hero.jpg';
  imageRealDeal: string = '../../../assets/images/about/desktop/image-real-deal.jpg';
  imageWorlClass: string = '../../../assets/images/about/desktop/image-world-class-talent.jpg';

  imgCAN: string = '../../../assets/images/contact/illustration-canada.svg';
  imgAUS: string = '../../../assets/images/contact/illustration-australia.svg';
  imgUK: string = '../../../assets/images/contact/illustration-united-kingdom.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
