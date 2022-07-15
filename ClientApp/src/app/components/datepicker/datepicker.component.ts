import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})

export class DatepickerComponent{

  public select: any = null;
  @Output() selectedDate: EventEmitter<Date> = new EventEmitter<Date>();

  selected(date: Date) {
    this.selectedDate.emit(date)
  }
}
