import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../mock/mock-heroes';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroes: Hero[] ;

  constructor(private heroservice: HeroService ) { }

  ngOnInit() {

    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
