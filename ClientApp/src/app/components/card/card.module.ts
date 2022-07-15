import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [ CommonModule ],
  exports: [
    CardComponent
  ],
  providers: [],
})
export class CardModule {}
