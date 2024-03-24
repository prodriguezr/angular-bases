import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DBZService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Gokú', power: 10000 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };

    debugger;

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
