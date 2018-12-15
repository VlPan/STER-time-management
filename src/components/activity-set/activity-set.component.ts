import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from './../../models/activity';

@Component({
  selector: 'app-activity-set',
  templateUrl: './activity-set.component.html',
  styleUrls: ['./activity-set.component.css']
})
export class ActivitySetComponent implements OnInit {

  @Input() activities: Activity[];
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('as', this.activities);
  }

  clickOnActivityRow($event) {
    this.clicked.emit($event);
  }

}
