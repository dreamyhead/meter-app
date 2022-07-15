import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public title: string = "Meter Datagrid"

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://localhost:44379/api/meter')
      .subscribe(response => console.log(response));
  }
}
