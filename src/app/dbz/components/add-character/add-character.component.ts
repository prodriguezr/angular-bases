import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onAdd: EventEmitter<Character> = new EventEmitter();
  public title: string = 'Add Character';
  public character: Character = {
    id: uuid(),
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    if (this.character.power < 0) this.character.power = 0;

    this.onAdd.emit({ ...this.character });

    this.character = { id: uuid(), name: '', power: 0 };
  }
}
