import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoritesService } from 'src/app/services/states/favorites/favorites.service';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss'],
})
export class HeaderPagesComponent {
  @Input() title: string = '';
  @Input() inptSearch?: boolean = false;
  @Input() clearFavoritesBtn?: boolean = false;

  @Output() searchCharacter = new EventEmitter<string>();

  constructor(private favoritesService: FavoritesService) {}

  handleClearFavorites(): void {
    this.favoritesService.clearFavorites();
  }

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchCharacter.emit(input.value);
  }
}
