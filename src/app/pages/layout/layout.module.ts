import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ComponentsModule
    ]
})
export class LayoutModule {}
