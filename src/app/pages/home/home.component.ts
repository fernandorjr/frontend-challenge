import { Component, OnInit } from '@angular/core';
import { Character, PageInfos } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  charactersList: Character[] = [];
  pageInfo: PageInfos | null = null;

  currentPage = 1;
  isLoading = false;

  constructor(private api: ApiService) {
    this.loadCharacters();
  }

  ngOnInit(): void {}

  loadCharacters(url?: string): void {
    if (this.isLoading) return;

    this.isLoading = true;

    this.api.getAllCharecter(url).subscribe({
      next: (response) => {
        this.pageInfo = response.info;
        this.charactersList = [...this.charactersList, ...response.results];

        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
  }

  handleSearch(name: string) {
    if (name === '') {
      this.loadCharacters();
      return;
    }

    this.api.getCharacterByName(name).subscribe({
      next: (response) => {
        this.pageInfo = response.info;
        this.charactersList = response.results;
      },
      error: (error) => {
        this.charactersList = [];
        console.error(error);
      },
    });
  }

  handleLoadNextPage(): void {
    if (!this.isLoading && this.pageInfo?.next) {
      this.currentPage++;
      this.loadCharacters(this.pageInfo.next);
    }
  }
}
