import { Component } from '@angular/core';
import { Character, PageInfos } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  charactersList: Character[] = [];
  pageInfo: PageInfos | null = null;
  currentPage = 1;
  isLoading = false;

  constructor(private api: ApiService) {
    this.loadCharacters();
  }

  loadCharacters(url?: string): void {
    if (this.isLoading) return;

    this.isLoading = true;
    this.api.getAllCharecter(url).subscribe({
      next: (response) => {
        this.handleResponse(response);
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }

  handleSearch(name: string) {
    if (name === '') {
      this.resetCharactersList();
      return;
    }

    this.isLoading = true;
    this.api.getCharacterByName(name).subscribe({
      next: (response) => {
        this.handleResponse(response, true);
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }

  handleLoadNextPage(): void {
    if (!this.isLoading && this.pageInfo?.next) {
      this.loadCharacters(this.pageInfo.next);
    }
  }

  resetCharactersList(): void {
    this.charactersList = [];
    this.currentPage = 1;
    this.loadCharacters();
  }

  private handleResponse(response: any, isSearch = false): void {
    this.pageInfo = response.info;
    this.charactersList = isSearch
      ? response.results
      : [...this.charactersList, ...response.results];
    this.isLoading = false;
  }

  private handleError(error: any): void {
    console.error(error);
    this.charactersList = [];
    this.isLoading = false;
  }
}
