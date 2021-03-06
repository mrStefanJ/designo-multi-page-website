import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.isMenuOpened = !this.isMenuOpened;
  }

}
