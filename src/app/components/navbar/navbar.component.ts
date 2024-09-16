import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { FavoritesService } from 'src/app/services/states/favorites/favorites.service';

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
    private favoritesService: FavoritesService
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
}
