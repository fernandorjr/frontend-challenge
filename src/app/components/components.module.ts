import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { RouterModule } from '@angular/router';
import { ListEmptyComponent } from './list-empty/list-empty.component';

@NgModule({
  declarations: [
    HeaderPagesComponent,
    ListEmptyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderPagesComponent,
    ListEmptyComponent,
  ]
})
export class ComponentsModule { }
