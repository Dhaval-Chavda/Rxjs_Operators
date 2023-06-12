import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteringComponent } from './filtering/filtering.component';
import { OfComponent } from './of/of.component';
import { MapComponent } from './map/map.component';
import { PipeComponent } from './pipe/pipe.component';
import { TakeComponent } from './take/take.component';
import { ZipComponent } from './zip/zip.component';
import { PluckComponent } from './pluck/pluck.component';
import { TapComponent } from './tap/tap.component';
import { MergeComponent } from './merge/merge.component';
import { FirstComponent } from './first/first.component';
import { combineLatest } from 'rxjs';
import { CombineLetestComponent } from './combine-letest/combine-letest.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ConcatComponent } from './concat/concat.component';
import { CatcherrorComponent } from './catcherror/catcherror.component';

const routes: Routes = [
  {path: 'filtering', component: FilteringComponent},
  // {path: '', redirectTo: 'filtering', pathMatch: 'full'},
  {path: 'of', component: OfComponent},
  {path: 'map', component: MapComponent}, 
  {path: 'pipe', component: PipeComponent}, 
  {path: 'take', component: TakeComponent},
  {path: 'zip', component: ZipComponent}, 
  {path: 'pluck', component: PluckComponent}, 
  {path: 'take-until', component: TakeUntilComponent}, 
  {path: 'tap', component: TapComponent},
  {path: 'merge', component: MergeComponent},
  {path: 'first', component: FirstComponent},
  {path: 'combineletest', component: CombineLetestComponent},
  {path: 'fromEvent', component: FromEventComponent},
  {path: 'concat' , component: ConcatComponent},
  {path: 'catcherror', component: CatcherrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
