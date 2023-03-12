import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.module';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
      this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectHero = hero;
    this.messageService.add(`HeroesComponent: Heroi selecionado id=${hero.Id}`);
  }
}
