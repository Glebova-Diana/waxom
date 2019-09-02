import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  imageArray = [
    {
      src: './assets/img/1-portf.jpg',
      alt: 'portfolio photo 1',
      headline: 'Claritas Etiam Processus',
      text: 'Photography, Nature'
    },
    {
      src: './assets/img/2-portf.jpg',
      alt: 'portfolio photo 2',
      headline: 'Quam Nutamus Farum',
      text: 'Graphic Design, Mock-Up'
    },
    {
      src: './assets/img/3-portf.jpg',
      alt: 'portfolio photo 3',
      headline: 'Usus Legentis Videntur',
      text: 'Photography, Holiday'
    },
    {
      src: './assets/img/4-portf.jpg',
      alt: 'portfolio photo 4',
      headline: 'Claritas Etiam Processus',
      text: 'Photography, Nature'
    },
    {
      src: './assets/img/5-portf.jpg',
      alt: 'portfolio photo 5',
      headline: 'Quam Nutamus Farum',
      text: 'Graphic Design, Mock-Up'
    },
    {
      src: './assets/img/6-portf.jpg',
      alt: 'portfolio photo 6',
      headline: 'Usus Legentis Videntur',
      text: 'Photography, Holiday'
    },
    {
      src: './assets/img/7-portf.jpg',
      alt: 'portfolio photo 7',
      headline: 'Claritas Etiam Processus',
      text: 'Photography, Nature'
    },
    {
      src: './assets/img/8-portf.jpg',
      alt: 'portfolio photo 8',
      headline: 'Quam Nutamus Farum',
      text: 'Graphic Design, Mock-Up'
    },
    {
      src: './assets/img/9-portf.jpg',
      alt: 'portfolio photo 9',
      headline: 'Usus Legentis Videntur',
      text: 'Photography, Holiday'
    },
    {
      src: './assets/img/10-portf.jpg',
      alt: 'portfolio photo 10',
      headline: 'Claritas Etiam Processus',
      text: 'Photography, Nature'
    },
    {
      src: './assets/img/11-portf.jpg',
      alt: 'portfolio photo 11',
      headline: 'Quam Nutamus Farum',
      text: 'Graphic Design, Mock-Up'
    },
    {
      src: './assets/img/12-portf.jpg',
      alt: 'portfolio photo 12',
      headline: 'Usus Legentis Videntur',
      text: 'Photography, Holiday'
    }];

  imageArrayDesign = [
    {
      src: './assets/img/7-portf.jpg',
      alt: 'portfolio photo 1',
      headline: 'Claritas Etiam Processus',
      text: 'Photography, Nature'
    },
    {
      src: './assets/img/8-portf.jpg',
      alt: 'portfolio photo 2',
      headline: 'Quam Nutamus Farum',
      text: 'Graphic Design, Mock-Up'
    },
    {
      src: './assets/img/9-portf.jpg',
      alt: 'portfolio photo 3',
      headline: 'Usus Legentis Videntur',
      text: 'Photography, Holiday'
    },
    {
      src: './assets/img/10-portf.jpg',
      alt: 'portfolio photo 4',
      headline: 'Claritas Etiam Processus',
      text: 'Photography, Nature'
    },
    {
      src: './assets/img/11-portf.jpg',
      alt: 'portfolio photo 5',
      headline: 'Quam Nutamus Farum',
      text: 'Graphic Design, Mock-Up'
    },
    {
      src: './assets/img/12-portf.jpg',
      alt: 'portfolio photo 6',
      headline: 'Usus Legentis Videntur',
      text: 'Photography, Holiday'
    },
    {
      src: './assets/img/1-portf.jpg',
      alt: 'portfolio photo 1',
      headline: 'Claritas Etiam Processus',
      text: 'Photography, Nature'
    },
    {
      src: './assets/img/2-portf.jpg',
      alt: 'portfolio photo 2',
      headline: 'Quam Nutamus Farum',
      text: 'Graphic Design, Mock-Up'
    },
    {
      src: './assets/img/3-portf.jpg',
      alt: 'portfolio photo 3',
      headline: 'Usus Legentis Videntur',
      text: 'Photography, Holiday'
    },
    {
      src: './assets/img/4-portf.jpg',
      alt: 'portfolio photo 4',
      headline: 'Claritas Etiam Processus',
      text: 'Photography, Nature'
    },
    {
      src: './assets/img/5-portf.jpg',
      alt: 'portfolio photo 5',
      headline: 'Quam Nutamus Farum',
      text: 'Graphic Design, Mock-Up'
    },
    {
      src: './assets/img/6-portf.jpg',
      alt: 'portfolio photo 6',
      headline: 'Usus Legentis Videntur',
      text: 'Photography, Holiday'
    }];

  visibleImgArray = [];
  visibleImgArrayDesign = [];
  visibleImgArrayApp = [];
  visibleImgArrayIllustration = [];
  visibleImgArrayPhotography = [];

  constructor() {
    this.visibleImgArray = this.visibleImgArray.concat(this.imageArray.slice(0, 6));
    this.visibleImgArrayDesign = this.visibleImgArrayDesign.concat(this.imageArrayDesign.slice(0, 6));
    this.visibleImgArrayApp = this.visibleImgArrayApp.concat(this.imageArray.slice(0, 6));
    this.visibleImgArrayIllustration = this.visibleImgArrayIllustration.concat(this.imageArrayDesign.slice(0, 6));
    this.visibleImgArrayPhotography = this.visibleImgArrayPhotography.concat(this.imageArray.slice(0, 6));
  }

  ngOnInit() {
  }

  loadMore(arrayName) {
    if (arrayName === 'visibleImgArrayDesign' || arrayName === 'visibleImgArrayIllustration') {
      this[arrayName] = this[arrayName].concat(this.imageArrayDesign.slice(this[arrayName].length, this[arrayName].length + 6));
    } else {
      this[arrayName] = this[arrayName].concat(this.imageArray.slice(this[arrayName].length, this[arrayName].length + 6));
    }
  }
}
