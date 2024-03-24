import { Component } from '@angular/core';

import { DBZService } from '../../services';
import { Character } from '../../interfaces';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['../../dbz.module.styles.css', './main-page.component.css'],
})
export class MainPageComponent {
  constructor(private readonly dbzService: DBZService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onAddCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
