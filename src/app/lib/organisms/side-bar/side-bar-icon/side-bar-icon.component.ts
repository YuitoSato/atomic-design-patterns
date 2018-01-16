import { Component, Input } from '@angular/core';

@Component({
  selector: 'adp-side-bar-icon',
  templateUrl: './side-bar-icon.component.html',
  styleUrls: ['./side-bar-icon.component.scss']
})
export class SideBarIconComponent {

  @Input() label: string;
  @Input() icon: string;

  constructor() { }
}
