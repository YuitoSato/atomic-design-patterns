import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { bindBooleanProperty } from '../../../../utils/property-binders';

@Component({
  selector: 'adp-form-field-set',
  templateUrl: './form-field-set.component.html',
  styleUrls: ['./form-field-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldSetComponent implements OnInit {

  // flexプロパティを付与すると横並びになる
  @Input() flex?: boolean;

  constructor() { }

  ngOnInit() {
    this.flex = bindBooleanProperty(this.flex)
  }
}
