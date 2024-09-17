import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-modal-character',
  templateUrl: './modal-character.component.html',
  styleUrls: ['./modal-character.component.scss']
})
export class ModalCharacterComponent {
  @Input() character: Character | null = null;

}
