import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PersonService} from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-learnings';
  persons = [];
  @ViewChild('someInput') someInput: ElementRef;
  lastName: any;
  message: any = '';

  constructor(private _personService: PersonService) {
  }

  ngOnInit(): void {
    this.lastName = 'Tets Last Name';
    this._personService.getData().subscribe(persons => this.persons = persons);
  }
}
