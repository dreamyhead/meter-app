import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})

export class DatepickerComponent{

  @Output() selectedDate: EventEmitter<Date> = new EventEmitter<Date>();

  public select: any = null;

  selected(date: Date) {
    this.selectedDate.emit(date)
  }
}
