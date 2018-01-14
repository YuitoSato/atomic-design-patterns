import { Component, Input } from '@angular/core';

@Component({
  selector: 'adp-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  @Input() title: string;

  constructor() { }
}
