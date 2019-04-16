import { Component, OnDestroy, OnInit, Renderer, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Activity, History } from './../../models/activity';
import { ActivityService } from './../../services/activity.service';
import { Formatter } from 'src/helpers/formatter';
import { TimerService } from './../../services/timer.service';
import { RunningActivityService } from 'src/services/running-activity.service';
import { HistoryService } from './../../services/history.service';

@Component({
  selector: 'app-randomize-page',
  templateUrl: './randomize-page.component.html',
  styleUrls: ['./randomize-page.component.css']
})
export class RandomizePageComponent implements OnDestroy, OnInit, AfterViewInit {

  constructor(private as: ActivityService, private ts: TimerService, private ra: RunningActivityService, private hs: HistoryService,
      private renderer: Renderer
    ) { }


  activity: Activity;
  activities: Activity[];
  @ViewChild('email') email: ElementRef;

  ngOnInit(): void {
    this.activities = this.as.getActivities();
    this.activity = this.ra.getCurrentActivity();
  }

  ngAfterViewInit(): void {
    this.renderer.setElementAttribute(this.email.nativeElement, 'placeholder', 'Enter your email');
  }
  getRandomActivity() {
    this.ra.setCurrentActivity(this.as.getRandomActivity());
    this.activity = this.ra.getCurrentActivity();
    if (this.ts.mins > 3 || this.ts.hours > 1 || this.ts.days > 1) {
      this.finalizeActivity();
    }
    this.ts.clearTimer();
  }

  startTimer() {
    this.ts.startTimer();
  }

  finalizeActivity() {
    const history: History = {
      activityId: this.activity.id,
      name: this.activity.name,
      days: this.ts.days,
      minutes: this.ts.mins,
      seconds: this.ts.secs,
      hours: this.ts.hours,
      date: new Date()
    };

    this.ts.clearTimer();
    this.hs.setHistory(history);
    this.getRandomActivity();
  }

  deleteActivity(id: string) {
    this.as.deleteActivity(id);
    this.getRandomActivity();
  }

  ngOnDestroy() {}

  chooseActivity($event: Activity) {
    this.activity = $event;
    this.ts.clearTimer();
    if (this.ts.mins > 3 || this.ts.hours > 1 || this.ts.days > 1) {
      this.finalizeActivity();
    }
    this.ts.clearTimer();
  }

  format(number: number) {
    return Formatter.formatTimeNumber(number);
  }
}
