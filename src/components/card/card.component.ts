import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from './../../models/activity';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() activity: Activity;

  @Output() deleted: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteCard() {
    console.log(this.deleted);
    this.deleted.emit();
  }

}
