import { Meters } from './../../interfaces/Meters';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  @Output() selectedOption: EventEmitter<number> = new EventEmitter<number>();

  public select: any = null;
  public meters: Meters[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Meters[]>('https://localhost:44379/api/meter')
      .subscribe(response => this.meters = response);
  }

  pickOption(id:number) {
    this.selectedOption.emit(id)
  }
}
