import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'superman';
  public age: number = 35;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'ironman';
  }

  changeAge(): void {
    this.age = 32;
  }

  resetForm(): void {
    this.name = 'superman';
    this.age = 35;
  }
}
