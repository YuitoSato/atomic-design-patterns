import { Component, Input, OnInit } from '@angular/core';

const iconClass = {
  add:
}

@Component({
  selector: 'adp-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss']
})
export class ActionIconComponent implements OnInit {

  @Input() actionType: 'add' | 'edit' | 'delete';

  constructor() { }

  ngOnInit() {
  }
}
