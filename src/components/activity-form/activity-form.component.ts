import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivityService } from 'src/services/activity.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  @Output() modelSubmitted: EventEmitter<any> = new EventEmitter();
  model: any = {};
  constructor(private as: ActivityService) { }

  ngOnInit() {

  }

  onSubmit() {
    if (!this.model.categories) {
      this.model.categories = [];
    }
    if (!this.model.color) {
      this.model.color = 'blue';
    }
    if (!this.model.frequency) {
      this.model.frequency = 1;
    }
    if (!this.model.importancy) {
      this.model.importancy = 1;
    }

    this.modelSubmitted.emit(this.model);
    this.model = {};

  }

}
