import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  child2Value = '';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onKey(event) {
    this.child2Value = event.target.value;
    this.messageEvent.emit(this.child2Value);
  }

}
