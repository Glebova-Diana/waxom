import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config = {
    loop: true,
    grabCursor: true,
    speed: 300,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  constructor() { }

  ngOnInit() {
  }

  myFunction() {
    document.getElementById('header__search-block').style.visibility = 'visible';
  }
}
