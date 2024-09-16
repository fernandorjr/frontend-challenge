import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { RouterModule } from '@angular/router';
import { ListEmptyComponent } from './list-empty/list-empty.component';
import { ButtonComponent } from './button/button.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { CardCharacterComponent } from './card-character/card-character.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';

@NgModule({
  declarations: [
    HeaderPagesComponent,
    ListEmptyComponent,
    ButtonComponent,
    ListCharactersComponent,
    CardCharacterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  exports: [
    HeaderPagesComponent,
    ListEmptyComponent,
    ButtonComponent,
    ListCharactersComponent,
    CardCharacterComponent,
    TranslateModule,
  ]
})
export class ComponentsModule { }
