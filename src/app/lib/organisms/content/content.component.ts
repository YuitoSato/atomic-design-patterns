import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { bindBooleanProperty } from '../../../utils/property-binders';

@Component({
  selector: 'adp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnInit {
  @Input() padding: boolean;

  constructor() { }

  ngOnInit() {
    this.padding = bindBooleanProperty(this.padding);
  }
}
