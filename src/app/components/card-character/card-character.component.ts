import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { FavoritesService } from 'src/app/services/states/favorites/favorites.service';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent {

  @Input() character: Character | null = null;

  constructor(private favoritesService: FavoritesService) { }

  handleAddFavorite(id: number | undefined): void {
    if(!id) return;

    this.favoritesService.addFavorite(id);
  }

  handleRemoveFavorite(id: number | undefined): void {
    if(!id) return;

    this.favoritesService.removeFavorite(id);
  }

  isFavorite(id: number | undefined): boolean {
    if(!id) return false;

    return this.favoritesService.isFavorite(id);
  }

}
