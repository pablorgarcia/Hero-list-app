import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(
    private readonly heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  private getHeroes() {
    this.heroes = this.heroesService.getHeroes()
  }

}
