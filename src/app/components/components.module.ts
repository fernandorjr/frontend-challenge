import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderPagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderPagesComponent,
  ]
})
export class ComponentsModule { }
