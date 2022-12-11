import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMPONENTS } from './components.constant';
import { SharedModule } from '../shared/shared.module';
import { HeroeListComponent } from './heroe-list/heroe-list.component';

@NgModule({
  declarations: [...COMPONENTS, HeroeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [...COMPONENTS]
})
export class ComponentsModule {}
