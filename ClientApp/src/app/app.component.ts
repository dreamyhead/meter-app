import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public id: number;
  public date: Date;

  updateMeterId(id: number) {
    this.id = id;
  }

  updateDate(date: Date) {
    this.date = date;
  }
}
