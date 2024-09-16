import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/models/languages.model';
import { LanguageService } from 'src/app/services/states/language/language.service';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent {
  currentLang!: Observable<Language>;

  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.language$;
  }

  toggleLanguage() {
    this.languageService.switchLanguage();
  }
}
