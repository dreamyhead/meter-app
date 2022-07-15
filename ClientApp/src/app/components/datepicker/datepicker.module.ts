import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DatepickerComponent
  ],
  providers: [],
})
export class DatepickerModule {}
