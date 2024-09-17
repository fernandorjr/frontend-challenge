import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { FavoritesService } from 'src/app/services/states/favorites/favorites.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterComponent {
  @Input() character: Character | null = null;

  constructor(private favoritesService: FavoritesService) {}

  openModal(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    if (
      targetElement.classList.contains('bi-heart') ||
      targetElement.classList.contains('bi-heart-fill')
    ) {
      return;
    }

    const modalEl = document.getElementById('modal-character');

    if (modalEl) {
      const modal = new Modal(modalEl);
      modal.show();
    }
  }

  handleAddFavorite(id: number | undefined, event: MouseEvent): void {
    event.stopPropagation();
    if (!id) return;

    this.favoritesService.addFavorite(id);
  }

  handleRemoveFavorite(id: number | undefined, event: MouseEvent): void {
    event.stopPropagation();
    if (!id) return;

    this.favoritesService.removeFavorite(id);
  }

  isFavorite(id: number | undefined): boolean {
    if (!id) return false;

    return this.favoritesService.isFavorite(id);
  }
}
