import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {BullyEvent} from '../bully-event';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  events: BullyEvent[];
  cols: any[];



  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: 'bully', header: 'Bully'},
      { field: 'victim', header: 'Victim'},
      { field: 'statement', header: 'Statement'},
      { field: 'time', header: 'Time'},
      { field: 'bystanders', header: 'Bystanders'}
    ];
  }

}
