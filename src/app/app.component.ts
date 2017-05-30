import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} detalles!</h2>
    <div><label>id: </label> {{hero.id}} </div>
    <div>
      <label>name: </label> 
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `,
})

export class AppComponent  { 
  title = 'Tour de Heroes';
  heroes = HEROES;
  hero : Hero = {
    id: 1,
    name: 'windstorm'
  };
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Batman' },
  { id: 12, name: 'Superman' },
  { id: 13, name: 'Ironman' },
  { id: 14, name: 'Narco' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'Magneto' },
  { id: 17, name: 'Wolverine' },
  { id: 18, name: 'Gambito' },
  { id: 19, name: 'Spiderman' },
  { id: 20, name: 'Storm' }
];