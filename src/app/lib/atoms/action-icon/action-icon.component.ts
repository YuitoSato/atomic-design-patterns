import { Component, Input, OnInit } from '@angular/core';

const iconClassMap = {
  add: 'fa-plus',
  edit: 'fa-pencil',
  remove: 'fa-trash',
};

@Component({
  selector: 'adp-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss']
})
export class ActionIconComponent implements OnInit {

  @Input() actionType: 'add' | 'edit' | 'remove';

  iconClass: string;

  constructor() {
  }

  ngOnInit() {
    this.iconClass = iconClassMap[this.actionType];
  }
}
