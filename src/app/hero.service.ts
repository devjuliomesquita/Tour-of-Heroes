import { Injectable } from '@angular/core';
import { Heroes } from './mock-heroes';
import { Hero } from './hero.module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes)
    return heroes;
  }


}
