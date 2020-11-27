import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hello-world';
  count = 0;
  count2 = 0;
  ngOnInit() {
    setInterval(() => {
      this.count++;
      this.count2+=2;
    }, 1000);
  }
}
