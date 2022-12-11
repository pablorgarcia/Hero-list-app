import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeDetailComponent } from './heroe-detail.component';
import { HeroeDetailRoutingModule } from './heroe-detail-routing.module';


@NgModule({
  declarations: [
    HeroeDetailComponent
  ],
  imports: [
    CommonModule,
    HeroeDetailRoutingModule
  ]
})
export class HeroeDetailModule {}
