import { Injectable } from '@angular/core';
import { Heroe } from '../models/heroes'
import { HEROES_LIST } from './constants/heroes.constant'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private static heroesList: Heroe[] = [];

  constructor() {}

  getHeroes() {
    if (!HeroesService.heroesList.length) { HeroesService.heroesList = HEROES_LIST };
    return HeroesService.heroesList;
  }

  getHeroById(idParam: number) {
    return HeroesService.heroesList.find(heroe => heroe.id === idParam);
  }

  createHero(hero: Heroe) {
    hero.id = HeroesService.heroesList[HeroesService.heroesList.length - 1].id + 1;
    HeroesService.heroesList.push(hero);
  }

  editHero(id: number, hero: Heroe) {
    const index = HeroesService.heroesList.findIndex(heroe => heroe.id == id);
    HeroesService.heroesList[index] = hero;
  }

  deleteHero(index: number) {
    HeroesService.heroesList.splice(index, 1);
  }

  searchHero(text: string) {
    HeroesService.heroesList.filter(hero => hero.hero === text);
  }


}
