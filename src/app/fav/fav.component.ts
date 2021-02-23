import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  @Output('childData') public childData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.childData.emit('Child Data emit');
  }
}
