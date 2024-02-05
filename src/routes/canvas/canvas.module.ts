import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasRoutingModule } from './canvas.routing.module';
import { MainComponent } from './main/main.component';
import { CanvasComponent } from './canvas/canvas.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';


@NgModule({
  declarations: [MainComponent , CanvasComponent],
  imports: [
    CommonModule , CanvasRoutingModule , NzCollapseModule
  ]
})
export class CanvasModule { }
