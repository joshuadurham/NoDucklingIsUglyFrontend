import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService, HttpClient]
})
export class AppComponent {
  title = 'no-duckling-is-ugly';

  constructor(private codeService: DataServiceService) {

  }
}
