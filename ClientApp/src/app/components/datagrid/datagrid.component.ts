import { HttpRequestService } from './../../services/http-request.service';
import { Component, AfterContentChecked, Input, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Records } from '../../interfaces/Records';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
})

export class DatagridComponent implements OnInit{

  @Input() meterId: number;
  @Input() recordDate: Date;

  public records: Records[]
  public time: Date = new Date()

  constructor(private httpRequestService: HttpRequestService) {}

  ngOnInit() {
    this.time.setHours(0,0,0,0)
  }

  getTime(): Date {
    this.time.setMinutes(this.time.getMinutes()+30)
    return this.time
  }

  getRows(): Array<string>{
    return new Array(48);
  }

  submit() {
    if (this.meterId != null && this.recordDate != null) {
      this.httpRequestService.getAllMeterParams(this.meterId, this.recordDate)
        .subscribe(response => this.records = response);
    }
  }
}
