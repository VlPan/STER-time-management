import { Component, OnInit } from '@angular/core';
import { ActivityService } from './../../services/activity.service';
import { Activity } from './../../models/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[];
  activityForm: any;
  constructor(private as: ActivityService) { }

  ngOnInit() {
    this.activities = this.as.getActivities().reverse();
  }


  deleteActivity(id: string) {
    console.log(id);
    this.as.deleteActivity(id);
    this.activities = this.as.getActivities();
  }

  addNewModel($event) {
    this.as.addActivity($event);
    this.activities = this.as.getActivities();
  }

}
