import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adp-demo-overlay',
  templateUrl: './demo-overlay.component.html',
  styleUrls: ['./demo-overlay.component.scss']
})
export class DemoOverlayComponent implements OnInit {

  modalDisplay = false;

  constructor() { }

  ngOnInit() {
  }

  openModal(): void {
    this.modalDisplay = true;
  }
}
