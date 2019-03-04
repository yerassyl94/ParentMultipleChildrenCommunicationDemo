import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {
  child3Value = '';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onKey(event) {
    this.child3Value = event.target.value;
    this.messageEvent.emit(this.child3Value);
  }

}
