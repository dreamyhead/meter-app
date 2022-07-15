import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './datagrid.component';

@NgModule({
  declarations: [
    DatagridComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatagridComponent,
  ],
  providers: [],
})
export class DatagridModule {}
