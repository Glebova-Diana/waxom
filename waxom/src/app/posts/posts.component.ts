import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  beforeYesterday = new Date();
  today = new Date();
  yesterday = new Date();

  constructor() {
    this.beforeYesterday.setDate(this.beforeYesterday.getDate() - 2);
    this.yesterday.setDate(this.yesterday.getDate() - 1);
  }

  ngOnInit() {
  }
}
