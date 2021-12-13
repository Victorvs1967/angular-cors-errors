import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cors-errors';

  content: any[] = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.readJson().forEach(data => this.content = [data, ...this.content]);
  }
}
