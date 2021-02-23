import {Component, OnInit} from '@angular/core';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  persons = [];

  constructor(private _personService: PersonService) {
    this._personService.getData().subscribe(person => this.persons = person);


    //constructor is called when object is created and to intitalize all the class fields
    //ngOnInit is angular lifecycle hook for binding all the properties
  }

  ngOnInit(): void {
  }

}


export class Engine {
  constructor() {
  }
}

export class Tires {
  constructor() {
  }
}

//without dependency injection
//problem engine and tire class not flexible
export class Car {
  enginex;
  tireabc;

  constructor() {
    this.enginex = new Engine();
    this.tireabc = new Tires();
  }

}


//use di
export class Car2 {
  private engines;
  private Dirac;

  constructor(engine, tire) {
    this.engines = engine;
    this.Dirac = tire;
  }
}
