import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from './components/card/card.module';
import { DatagridModule } from './components/datagrid/datagrid.module';
import { ListModule } from './components/list/list.module';
import { DatepickerModule } from './components/datepicker/datepicker.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    DatagridModule,
    ListModule,
    DatepickerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
