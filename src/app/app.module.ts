import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineZoomComponent } from './line-zoom/line-zoom.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent, LineZoomComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
