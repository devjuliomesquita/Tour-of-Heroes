import { Component } from '@angular/core';
import { Hero } from '../hero.module';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  hero: Hero ={
    Id: 1,
    name: 'B de Vingança',
  } ;
}
