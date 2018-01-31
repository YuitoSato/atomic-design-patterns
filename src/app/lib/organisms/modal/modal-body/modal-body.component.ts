import { Component } from '@angular/core';

@Component({
  selector: 'adp-modal-body',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./modal-body.component.scss'],
})
export class ModalBodyComponent {

  constructor() { }
}
