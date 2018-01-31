import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adp-data-table',
  template: '<table><ng-content></ng-content></table>',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
