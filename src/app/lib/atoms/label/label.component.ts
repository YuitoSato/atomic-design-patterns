import { Component, Input, OnInit, } from '@angular/core';
import { bindBooleanProperty } from '../../../utils/property-binders';

@Component({
  selector: 'adp-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() label: string;
  @Input() required?: boolean;

  constructor() { }

  ngOnInit() {
    this.required = bindBooleanProperty(this.required);
  }
}
