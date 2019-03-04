import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  fromChild1 = '';
  fromChild2 = '';
  fromChild3 = '';

  constructor() { }

  ngOnInit() {
  }

  receiveFromChild1($event) {
    this.fromChild1 = $event;
  }

  receiveFromChild2($event) {
    this.fromChild2 = $event;
  }

  receiveFromChild3($event) {
    this.fromChild3 = $event;
  }
}
