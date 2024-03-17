import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>
    <button (click)="increaseBy(5)" class="btn-primary">+1</button>
    <button (click)="resetCounter()" class="btn-danger">RESET</button>
    <button (click)="decreaseBy()" class="btn-primary">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number = 1): void {
    this.counter += value;
  }
  decreaseBy(value: number = 1): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
