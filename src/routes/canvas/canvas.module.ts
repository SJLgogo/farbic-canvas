import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasRoutingModule } from './canvas.routing.module';
import { MainComponent } from './main/main.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { PropertyComponent } from './main/property/property/property.component';
import { EleCoordinateComponent } from './main/property/assembly/ele-coordinate/ele-coordinate.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { EleCustomPropComponent } from './main/property/assembly/ele-custom-prop/ele-custom-prop.component';
import { HttpClientModule } from '@angular/common/http';
import { NodeService } from './Base/node.service';
@NgModule({
  declarations: [MainComponent , PropertyComponent , EleCoordinateComponent , EleCustomPropComponent],
  imports: [
    CommonModule , CanvasRoutingModule , NzCollapseModule , NzInputNumberModule , FormsModule , HttpClientModule
  ],
  providers:[NodeService]
})
export class CanvasModule { }
