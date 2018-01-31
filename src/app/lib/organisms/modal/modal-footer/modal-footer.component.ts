import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adp-modal-footer',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./modal-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalFooterComponent {
  constructor() { }
}
