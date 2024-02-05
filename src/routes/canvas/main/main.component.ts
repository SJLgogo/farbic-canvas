import { Component, OnInit } from '@angular/core';
import { canvasEditor } from '../Elements/CanvasEditor';
import { DragType } from '../Elements/CanvasEvent';
import { ModeShape , BaseELeList, Mode, DragList } from '../Elements/Shape';
import { BaseDataService } from '../Base/base.data.service';
import { CanvasService } from '../Base/canvas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  constructor(
    public baseDataService:BaseDataService,
    private canvasService:CanvasService
  ) {
      this.BaseEles = BaseELeList
      this.DragEles = DragList
  }
  
  declare BaseEles:ModeShape[]

  declare DragEles:ModeShape[]

  declare canvasEditor:canvasEditor

  ngOnInit(): void {
    this.init()
    this.renderSvg()
  }

  init():void{
    this.baseDataService.initSet({
      canvasWidth: document.querySelector('.canvas')!.clientWidth,
      canvasHeight:document.querySelector('.canvas')!.clientHeight
    })
    const config = {
      width: document.querySelector('.canvas')!.clientWidth,
      height: document.querySelector('.canvas')!.clientHeight,
      elementId: 'canvas',
      baseDataService:this.baseDataService
    }
    this.canvasEditor = new canvasEditor(config)
    console.log(this.baseDataService.get());
  }

  async renderSvg(){
    const info = await this.canvasService.getInfo()
    await this.canvasEditor.renderAuto.render(info)
  }


  del():void{
    this.canvasEditor.removeActiceObject()
  }


  onDragstart(type:DragType):void{
    this.canvasEditor.setDragType(type)
  }

  custom():void{
    this.canvasEditor.setDrawingMode(true)
  }

  setMode(mode:Mode):void{
    this.canvasEditor.setCurrentMode(mode)
  }
}
