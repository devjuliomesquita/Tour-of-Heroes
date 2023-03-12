import { Injectable } from '@angular/core';
import { Heroes } from './mock-heroes';
import { Hero } from './hero.module';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes)
    this.messageService.add('HeroService: Fesdlkfjsld');
    return heroes;
  }


}
