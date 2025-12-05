import { Component, OnInit } from '@angular/core';
import { Hero } from './heros';
import {HEROES} from './mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES

  onSelect(data: Hero) {
    alert(data.name)
  }
  onClick() {
    alert('Done')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
