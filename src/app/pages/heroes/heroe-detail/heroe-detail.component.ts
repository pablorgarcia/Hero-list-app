import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss']
})
export class HeroeDetailComponent implements OnInit {

  public heroe: Heroe;

  constructor(
    private readonly heroesService: HeroesService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.params['id'];
    this.heroe = this.getHeroe(heroId);
  }

  getHeroe(id) {
    return this.heroesService.getHeroById(Number(id));
  }

}
