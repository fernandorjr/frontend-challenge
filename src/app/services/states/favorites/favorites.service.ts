import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly STORAGE_KEY = environment.favoritesKeyLocalStorage;

  private favoritesSubject = new BehaviorSubject<number[]>(this.loadFavorites());
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {}

  private loadFavorites(): number[] {
    const favorites = localStorage.getItem(this.STORAGE_KEY);
    return favorites ? JSON.parse(favorites) : [];
  }

  private saveFavorites(favorites: number[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
  }

  addFavorite(characterId: number): void {
    const favorites = this.favoritesSubject.value;

    if(!favorites.includes(characterId)) {
      favorites.push(characterId);
      this.favoritesSubject.next(favorites);
      this.saveFavorites(favorites);
    }
  }

  removeFavorite(characterId: number): void {
    const favorites = this.favoritesSubject.value.filter(id => id !== characterId);
    this.favoritesSubject.next(favorites);
    this.saveFavorites(favorites);
  }

  isFavorite(itemId: number): boolean {
    return this.favoritesSubject.value.includes(itemId);
  }

  clearFavorites(): void {
    this.favoritesSubject.next([]);
    this.saveFavorites([]);
  }
}
