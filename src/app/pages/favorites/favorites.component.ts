import { Component } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api/api.service';
import { FavoritesService } from 'src/app/services/states/favorites/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  private unsubscribe$ = new Subject<void>();

  favorites!: number[];
  favoritesList!: Character[];

  isLoading: boolean = true;

  constructor(
    private favoritesService: FavoritesService,
    private apiService: ApiService
  ) {
    this.favoritesService.favorites$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (favorites) => {
          this.favorites = favorites;
          this.attListFavorites(this.favorites);
        },
        error: (err) => {
          this.favorites = [];
          console.error('Erro ao buscar favoritos:', err);
        },
      });
  }

  attListFavorites(favorites: number[]): void {
    this.isLoading = true;

    this.apiService.getFavoritesCharacters(favorites).subscribe({
      next: (characters) => {
        this.favoritesList = Array.isArray(characters)
          ? characters
          : [characters];

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar personagens:', err);
        this.isLoading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
