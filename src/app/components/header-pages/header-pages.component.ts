import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss'],
})
export class HeaderPagesComponent {
  @Input() title: string = '';
  @Input() inptSearch?: boolean = false;

  @Output() searchCharacter = new EventEmitter<string>();

  constructor() {}

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchCharacter.emit(input.value);
  }
}
