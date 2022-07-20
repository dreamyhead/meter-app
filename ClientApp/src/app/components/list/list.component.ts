import { HttpRequestService } from './../../services/http-request.service';
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

  public select: (null | number | undefined) = null;
  public meters: Meters[] = [];

  constructor(private httpRequestService: HttpRequestService) {}

  ngOnInit() {
    this.httpRequestService.getAllMeters()
      .subscribe(response => this.meters = response);
  }

  pickOption(id:number) {
    this.selectedOption.emit(id);
  }
}
