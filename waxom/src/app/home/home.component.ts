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

  // window.onload = function(){
  //   const hideMe = document.getElementById('hideMe');
  //   document.onclick = function(e){
  //     if (e.target.id !== 'hideMe'){
  //       hideMe.style.display = 'none';
  //     }
  //   };
  // };
  constructor() {
  }

  ngOnInit() {
  }

  myFunction() {
    const input = document.getElementById('header__search-block');
    if (!input.classList.contains('header__search-block--active')) {
      input.classList.add('header__search-block--active');
      input.focus();
    } else {
      input.classList.remove('header__search-block--active');
    }
  }
}
