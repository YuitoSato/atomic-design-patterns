import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { bindBooleanProperty } from '../../../utils/property-binders';

@Component({
  selector: 'adp-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlockComponent implements OnInit {

  // デフォルトは縦並び
  @Input() flex?: boolean;

  // s = 5px, m = 10px(default), l = 20px
  @Input() gutter?: 's' | 'm' | 'l';

  // デフォルトは左詰め
  @Input() position?: 'left' | 'center' | 'right';

  constructor() { }

  ngOnInit() {
    this.flex = bindBooleanProperty(this.flex);
    this.gutter = this.gutter || 's';
    this.position = this.position || 'left';
  }
}
