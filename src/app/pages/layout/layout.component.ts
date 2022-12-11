import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public heroes: any = [];
  public heroesId: any = [];
  public heroSearch: any;

  constructor(
    public readonly heroesService: HeroesService
  ) {}

}
