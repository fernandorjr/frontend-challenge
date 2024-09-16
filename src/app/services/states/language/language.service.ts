import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from 'src/app/models/languages.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY: string = environment.languageKeyLocalStorage;

  private languageSubject = new BehaviorSubject<Language>('pt');
  language$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem(this.STORAGE_KEY) as Language || 'pt';
    this.setLanguage(savedLanguage);
  }

  setLanguage(lang: Language): void {
    this.translate.use(lang);
    this.languageSubject.next(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
  }

  switchLanguage(): void {
    const lang = this.languageSubject.value === 'pt' ? 'en' : 'pt';
    this.setLanguage(lang);
  }
}
