import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilteringComponent } from './filtering/filtering.component';
import { MapComponent } from './map/map.component';
import { TakeComponent } from './take/take.component';
import { PipeComponent } from './pipe/pipe.component';
import { FirstComponent } from './first/first.component';
import { MergeComponent } from './merge/merge.component';
import { OfComponent } from './of/of.component';
import { TapComponent } from './tap/tap.component';
import { CombineLetestComponent } from './combine-letest/combine-letest.component';
import { PluckComponent } from './pluck/pluck.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { ZipComponent } from './zip/zip.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ConcatComponent } from './concat/concat.component';
import { CatcherrorComponent } from './catcherror/catcherror.component';

@NgModule({
  declarations: [
    AppComponent,
    FilteringComponent,
    MapComponent,
    TakeComponent,
    PipeComponent,
    FirstComponent,
    MergeComponent,
    OfComponent,
    TapComponent,
    CombineLetestComponent,
    PluckComponent,
    TakeUntilComponent,
    ZipComponent,
    FromEventComponent,
    ConcatComponent,
    CatcherrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
