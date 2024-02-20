import { Component, OnInit } from '@angular/core';
import { canvasEditor } from '../Elements/CanvasEditor';
import { DragType } from '../Elements/CanvasEvent';
import { ModeShape, BaseELeList, Mode, DragList, operateList } from '../Elements/Shape';
import { BaseDataService } from '../Base/base.data.service';
import { CanvasService } from '../Base/canvas.service';
import { NodeService } from '../Base/node.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  constructor(
    public baseDataService: BaseDataService,
    private canvasService: CanvasService,
    private nodeService: NodeService,
  ) {
    this.BaseEles = BaseELeList
    this.DragEles = DragList
    this.operateEles = operateList
  }

  declare canvasId: string;

  declare operateEles: any;

  declare BaseEles: ModeShape[]

  declare DragEles: ModeShape[]

  declare canvasEditor: canvasEditor

  serializeProps: string[] = ['c_code', 'c_name', 'c_start', 'c_end', 'zIndex']

  ngOnInit(): void {
    this.init()
    this.renderSvg()
  }

  init(): void {
    this.baseDataService.initSet({
      canvasWidth: document.querySelector('.canvas')!.clientWidth,
      canvasHeight: document.querySelector('.canvas')!.clientHeight
    })
    const config = {
      width: document.querySelector('.canvas')!.clientWidth,
      height: document.querySelector('.canvas')!.clientHeight,
      elementId: 'canvas',
      baseDataService: this.baseDataService
    }
    this.canvasEditor = new canvasEditor(config)
  }

  async renderSvg() {
    const canvasJson = await this.findCanvas()
    if (canvasJson) {
      this.canvasEditor.loadJson(canvasJson)
    } else {
      const info = await this.canvasService.getInfo()
      await this.canvasEditor.renderAuto.render(info)
    }

  }

  findCanvas(): Promise<any> {
    return new Promise((resolve: any) => {
      this.nodeService.findCanvas({ type: 'demo' }).subscribe((res: any) => {
        this.canvasId = res.data[0].id
        resolve(res.data[0]['jsonSchema'])
      })
    })
  }

  onDragstart(type: DragType): void {
    this.canvasEditor.setDragType(type)
  }

  custom(): void {
    this.canvasEditor.setDrawingMode(true)
  }

  setMode(mode: Mode): void {
    this.canvasEditor.setCurrentMode(mode)
  }

  operateFn(mode: string) {
    switch (mode) {
      case 'next':
        this.canvasEditor.canvasEvent.applyHistory('next')
        break;
      case 'last':
        this.canvasEditor.canvasEvent.applyHistory('last')
        break;
      case 'remove':
        this.canvasEditor.removeActiceObject()
        break;
      default:
        break;
    }
  }

  save(): void {
    const post: any = {
      type: 'demo',
      jsonSchema: JSON.stringify(this.canvasEditor.canvas.toJSON(this.serializeProps))
    }

    this.canvasId && (post.id = this.canvasId);
    this.nodeService.savaCanvas(post).subscribe((res: any) => {

    })
  }

}
