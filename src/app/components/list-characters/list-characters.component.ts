import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Modal } from 'bootstrap';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
})
export class ListCharactersComponent {
  @Input() list: Character[] = [];
  @Input() emptyTitle = '';
  @Input() emptySubtitle = '';
  @Input() isLoading = false;
  @Input() buttonHome = false;

  @Output() loadNextPage = new EventEmitter();

  selectedCharacter: Character | null = null;

  openModal(character: Character | null) {
    this.selectedCharacter = character; // Define o personagem atual na modal

    const modalEl = document.getElementById('modal-character');

    if (modalEl) {
      // Instancia e abre a modal usando a API do Bootstrap
      const modal = new Modal(modalEl);
      modal.show();
    }
  }

  closeModal() {
    this.selectedCharacter = null; // Fecha a modal
  }

  onScroll(event: any): void {
    const element = event.target;

    const nearBottom = element.scrollHeight - element.scrollTop <= element.clientHeight * 1.5;

    if (nearBottom) {
      this.loadNextPage.emit();
    }
  }
}
