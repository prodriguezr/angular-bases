import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public title: string = 'List';
  @Input()
  public characters: Character[] = [];

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }
}
