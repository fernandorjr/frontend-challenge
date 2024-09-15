import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss']
})
export class HeaderPagesComponent {

  @Input() title: string = '';
  @Input() inptFilter?: boolean = false;
}
