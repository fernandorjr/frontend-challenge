import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  declarations: [HomeComponent, FavoritesComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule, CommonModule],
  exports: [RouterModule],
})
export class PagesModule {}
