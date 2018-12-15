import { Component, OnInit, Input } from '@angular/core';
import { Activity } from './../../models/activity';

@Component({
  selector: 'app-activity-row',
  templateUrl: './activity-row.component.html',
  styleUrls: ['./activity-row.component.css']
})
export class ActivityRowComponent implements OnInit {

  @Input() activity: Activity;
  constructor() { }

  ngOnInit() {
  }

}
