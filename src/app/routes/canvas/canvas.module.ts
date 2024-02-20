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
import { EleLineComponent } from './main/property/assembly/ele-line/ele-line.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { EleTextComponent } from './main/property/assembly/ele-text/ele-text.component';
import { ScheduleSelectColorComponent } from './main/property/assembly/select-color/select-color.component';
// import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [MainComponent, PropertyComponent, EleCoordinateComponent, EleCustomPropComponent, EleLineComponent, ScheduleSelectColorComponent, EleTextComponent],
  imports: [
    CommonModule, CanvasRoutingModule, NzCollapseModule, NzInputNumberModule, FormsModule, HttpClientModule, NzSwitchModule, ColorPickerModule
  ],
  providers: [NodeService]
})
export class CanvasModule { }
