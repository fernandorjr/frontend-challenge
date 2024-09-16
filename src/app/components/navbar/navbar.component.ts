import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { Language } from 'src/app/models/languages.model';
import { FavoritesService } from 'src/app/services/states/favorites/favorites.service';
import { LanguageService } from 'src/app/services/states/language/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentRoute: string = '';

  favoritesCount$: Observable<number>;

  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private languageService: LanguageService,
  ) {
    this.favoritesCount$ = this.favoritesService.favorites$.pipe(
      map((favorites) => favorites.length)
    );
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
      });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

  changeLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}
