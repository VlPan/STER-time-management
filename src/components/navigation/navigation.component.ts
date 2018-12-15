import { Component, OnInit, Input } from '@angular/core';
import { NavigationConfig } from './../../models/navigation-config';
import { Link } from 'src/models/navigation-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() links: Link[];

  constructor() { }

  ngOnInit() {
  }



}
