import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adp-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter<boolean>();

  constructor() { }

  public close(): void {
    this.displayChange.emit(false);
  }
}
