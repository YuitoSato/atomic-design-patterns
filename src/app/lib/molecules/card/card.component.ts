import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {

  @Input() size?: 's' | 'm' | 'l';

  constructor() { }

}
