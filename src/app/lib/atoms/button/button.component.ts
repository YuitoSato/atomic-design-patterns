import { Component, Input, OnInit } from '@angular/core';
import { bindBooleanProperty } from '../../../utils/property-binders';

const BUTTON_CLASSES = {
  secondary: 'ui-button-secondary',
  success: 'ui-button-success',
  warning: 'ui-button-warning',
  danger: 'ui-button-danger',
};

@Component({
  selector: 'adp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() type?: string;
  @Input() disabled?: boolean;
  @Input() style?: 'secondary' | 'success' | 'warning' | 'danger';

  styleClass: string;

  constructor() { }

  ngOnInit() {
    this.disabled = bindBooleanProperty(this.disabled);
    this.styleClass = BUTTON_CLASSES[this.style];
  }
}
