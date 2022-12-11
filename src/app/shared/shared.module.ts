import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED } from './shared.constant';
import { FilterPipe } from './components/pipes/filter.pipe';

@NgModule({
  declarations: [...SHARED, FilterPipe],
  imports: [
    CommonModule,
  ],
  exports: [...SHARED, FilterPipe]
})
export class SharedModule {}
