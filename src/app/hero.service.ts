import { Injectable } from '@angular/core';
import { Heroes } from './mock-heroes';
import { Hero } from './hero.module';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Hero[] {
    return Heroes;
  }


}
