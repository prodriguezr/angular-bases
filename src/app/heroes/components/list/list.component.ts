import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deletedHero?: string;

  heroNames: string[] = [
    'ironman',
    'superman',
    'hulk',
    'wonder woman',
    'batman',
    'green lantern',
  ];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
