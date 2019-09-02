import {AfterViewInit, Component, OnInit} from '@angular/core';
import mediumZoom from 'medium-zoom';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  today = new Date();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    mediumZoom(document.querySelectorAll('.sub-wrapper__img-dribbble'), {
      background: 'rgba(000, 000, 000, .5)',
      // zoomLevel: .2
    });
  }
}
