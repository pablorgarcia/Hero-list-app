import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.scss']
})
export class HeroesFormComponent implements OnInit {

  public heroe: Heroe;
  private heroeId: string;

  constructor(
    private readonly heroesService: HeroesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.params['id'];
    this.heroeId = heroId;
    setTimeout(() => this.heroe = this.getHeroe(heroId), 500);
  }

  getHeroe(id) {
    return this.heroesService.getHeroById(Number(id));
  }

  submit(hero: Heroe) {
    if(this.heroeId) {
      this.heroesService.editHero(Number(this.heroeId), hero);
      this.router.navigate(['/heroes']);
      return;
    }
    this.heroesService.createHero(hero);
    this.router.navigate(['/heroes']);
  }

}
