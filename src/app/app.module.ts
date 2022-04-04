import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineZoomComponent } from './line-zoom/line-zoom.component';
import { BrushZoomComponent } from './brush-zoom/brush-zoom.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
@NgModule({
  declarations: [AppComponent, LineChartComponent, LineZoomComponent, BrushZoomComponent, ScatterPlotComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
