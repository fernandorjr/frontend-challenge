import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api/api.service';
import { FavoritesService } from 'src/app/services/states/favorites/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  favorites: number[] = [];
  isLoading: boolean = true;
  favoritesList: Character[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private apiService: ApiService
  ) {
    this.subscribeToFavorites();
  }

  private subscribeToFavorites(): void {
    this.favoritesService.favorites$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (favorites) => this.updateFavorites(favorites),
        error: (err) => this.handleError('Erro ao buscar favoritos:', err),
      });
  }

  private updateFavorites(favorites: number[]): void {
    this.favorites = favorites;
    this.loadFavoritesList();
  }

  private loadFavoritesList(): void {
    this.isLoading = true;

    if (this.favorites.length === 0) {
      this.resetFavoritesList();
      return;
    }

    this.apiService.getFavoritesCharacters(this.favorites).subscribe({
      next: (characters) => this.handleCharacterResponse(characters),
      error: (err) => this.handleError('Erro ao buscar personagens:', err),
    });
  }

  private handleCharacterResponse(characters: Character | Character[]): void {
    this.favoritesList = Array.isArray(characters) ? characters : [characters];
    this.isLoading = false;
  }

  private resetFavoritesList(): void {
    this.favoritesList = [];
    this.isLoading = false;
  }

  private handleError(message: string, err: any): void {
    console.error(message, err);
    this.favoritesList = [];
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
