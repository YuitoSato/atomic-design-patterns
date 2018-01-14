import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adp-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.scss']
})
export class TemplateHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
