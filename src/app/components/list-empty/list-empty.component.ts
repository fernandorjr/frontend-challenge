import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-empty',
  templateUrl: './list-empty.component.html',
  styleUrls: ['./list-empty.component.scss']
})
export class ListEmptyComponent {

  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() buttonHome: boolean = false;

}
