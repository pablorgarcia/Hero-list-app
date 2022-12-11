import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesFormRoutingModule } from './heroes-form-routing.module';
import { HeroesFormComponent } from './heroes-form.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    HeroesFormComponent
  ],
  imports: [
    CommonModule,
    HeroesFormRoutingModule,
    ComponentsModule
  ]
})
export class HeroesFormModule { }
