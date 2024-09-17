import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
})
export class ListCharactersComponent {
  @Input() list: Character[] = [];
  @Input() emptyTitle = '';
  @Input() emptySubtitle = '';
  @Input() isLoading = false;
  @Input() buttonHome = false;

  @Output() loadNextPage = new EventEmitter();

  onScroll(event: any): void {
    const element = event.target;

    const nearBottom = element.scrollHeight - element.scrollTop <= element.clientHeight * 1.5;

    if (nearBottom) {
      this.loadNextPage.emit();
    }
  }
}
