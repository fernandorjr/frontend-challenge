import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent {

  @Input() character: Character | null = null;



}
