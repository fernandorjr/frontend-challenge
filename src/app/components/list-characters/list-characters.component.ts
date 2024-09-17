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
  @Input() emptyTitle: string = '';
  @Input() emptySubtitle: string = '';
  @Input() isLoading: boolean = false;
  @Input() buttonHome: boolean = false;

  @Output() loadNextPage = new EventEmitter();

  selectedCharacter: Character | null = null;

  openModal(character: Character | null) {
    this.selectedCharacter = character;

    const modalEl = document.getElementById('modal-character');
    if (modalEl) {
      const modal = new Modal(modalEl);
      modal.show();
    }
  }

  closeModal() {
    this.selectedCharacter = null;
  }

  onScroll(event: any): void {
    if (this.isNearBottom(event.target)) {
      this.loadNextPage.emit();
    }
  }

  private isNearBottom(element: any): boolean {
    return element.scrollHeight - element.scrollTop <= element.clientHeight * 1.5;
  }
}
