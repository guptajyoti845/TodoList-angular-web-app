import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemNumber: number;
  projectText = 'Angular Project';
  projects = [];
  isFav: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.itemNumber = this.projects.length;
  }

  addItem() {
    this.projects.push(this.projectText);
    this.projectText = '';
    this.itemNumber = this.projects.length;
  }


  removeItem(i) {
    this.projects.splice(i,1);
    this.itemNumber = this.projects.length;
  }

  onClick() {
    this.isFav = !this.isFav;
  }
}
