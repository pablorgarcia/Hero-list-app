import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';
import { FORM_CREATE_HERO } from 'src/app/services/constants/forms.constant';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.scss']
})
export class HeroeListComponent implements OnInit {

  public heroes: Heroe[] = [];
  public heroesForm: FormGroup;
  public searchText: string;

  constructor(
    private readonly heroesService: HeroesService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroes();
    this.heroesForm = this.fb.group(FORM_CREATE_HERO);
  }

  private getHeroes() {
    this.heroes = this.heroesService.getHeroes();
  }

  goToDetail(id) {
    this.router.navigate([`heroes/detail/${id}`]);
  }

  goToEdit(id) {
    this.router.navigate([`heroes/edit/${id}`]);
  }

  goToCreate() {
    this.router.navigate(['heroes/create']);
  }

  deleteHero(index) {
    const res = confirm('Are you sure you want to delete this hero?');
    if (res) { this.heroesService.deleteHero(index) };
  }

}
