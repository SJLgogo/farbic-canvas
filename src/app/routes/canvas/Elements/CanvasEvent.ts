import { fabric } from 'fabric';
import { CreateShape } from '../utils/CreateShape';
import { Mode } from './Shape';
import { tapable } from '../utils/Tapable';

interface Config {
  canvas: any,
  maxZoom?: number,
  minZoom?: number,
}

export class CanvasEvent extends CreateShape {

  declare currentDragType: DragType


  currentMode: Mode = 'select'

  private declare startPoint: any;

  isDragging: boolean = false

  isDrawing: boolean = false

  maxZoom: number = 20;

  minZoom: number = 0.1;

  lastPosX: number = 0

  lastPosY: number = 0

  line: any;

  historyKlass: any = [];  // 操作历史记录

  historyIndex = -1;

  tipsShow: boolean = false

  horizontalLine: any; // 水平辅助线

  verticalLine: any; // 垂直辅助线

  constructor(config: Config) {
    super({
      canvas: config.canvas
    })
    config.maxZoom && (this.maxZoom = config.maxZoom)
    config.minZoom && (this.minZoom = config.minZoom)

    this.canvas.on('mouse:down', (event: any) => this.handleMouseDown(event));

    this.canvas.on('mouse:up', (event: any) => this.handleMouseUp(event));

    this.canvas.on('mouse:move', (event: any) => this.handleMouseMove(event));

    this.canvas.on('mouse:wheel', (event: any) => this.handleMouseWheel(event));

    this.canvas.on('drop', (event: any) => this.mouseDrop(event))

    this.canvas.on('selection:created', (event: any) => this.selectionCreated(event))

    this.canvas.on('selection:updated', (event: any) => this.selectionCreated(event))

    this.canvas.on('selection:cleared', (event: any) => this.selectionClear(event))

    this.canvas.on('object:added', (event: any) => this.saveHistory(event))

    this.canvas.on('object:removed', (event: any) => this.saveHistory(event))

  }

  /** 十字辅助线 */
  addAuxiliaryLine(): void {
    this.horizontalLine = new fabric.Line([0, 0, this.canvas.width, 0], {
      stroke: 'red',
      selectable: false,
      visible: false // 默认不可见
    });
    this.canvas.add(this.horizontalLine);

    // 垂直辅助线
    this.verticalLine = new fabric.Line([0, 0, 0, this.canvas.height], {
      stroke: 'red',
      selectable: false,
      visible: false // 默认不可见
    });
    this.canvas.add(this.verticalLine);
  }


  /** 画直线时增加十字标辅助线 */
  drawLineShowAuxiliaryLine(pointer: any): void {
    this.horizontalLine.set({ y1: pointer.y, y2: pointer.y, visible: true });
    this.verticalLine.set({ x1: pointer.x, x2: pointer.x, visible: true });
  }

  /** 十字辅助线不可见 */
  visiableAuxiliaryLine(): void {
    this.horizontalLine.visible = false;
    this.verticalLine.visible = false;
  }


  mouseDrop(event: any): void {
    let offset = {
      left: this.canvas.getSelectionElement().getBoundingClientRect().left,
      top: this.canvas.getSelectionElement().getBoundingClientRect().top
    }

    let point = {
      x: event.e.x - offset.left,
      y: event.e.y - offset.top,
    }

    let pointerVpt = this.canvas.restorePointerVpt(point)

    switch (this.currentMode) {
      case 'rect':
        this.createRect(pointerVpt.y, pointerVpt.x)
        break
      case 'text':
        this.createText(pointerVpt.y, pointerVpt.x)
        break
      case 'img':
        this.createImg(pointerVpt.y, pointerVpt.x)
        break
    }
    this.canvas.renderAll()
    this.currentDragType = null
  }


  handleMouseDown(event: any): void {
    this.operateCavasDrag(event)
    this.mouseDownMode(event)
  }

  /** 鼠标绘制形状 */
  mouseDownMode(event: any): void {
    if (this.canvas.getActiveObject()) {
      return
    }
    this.isDrawing = true
    const pointer = this.canvas.getPointer(event.e);
    const points = [pointer.x, pointer.y, pointer.x, pointer.y];
    switch (this.currentMode) {
      case 'select':
        this.enableInteractivity()
        break;
      case 'line':
        this.line = this.createLine(0, 0, { points: points, noNeedTop: true })
        break;
      default:
        break;
    }

  }

  /** 处理画布拖拽 */
  operateCavasDrag(event: any): void {
    const evt = event.e;
    if (evt.altKey) {
      this.isDragging = true
      this.lastPosX = evt.clientX
      this.lastPosY = evt.clientY
    }
  }


  handleMouseMove(event: any): void {
    this.mouseMoveDraging(event)
    this.mouseMoveMode(event)
  }

  /** 鼠标移动拖拽 */
  mouseMoveDraging(event: any): void {
    if (this.isDragging) {
      var e = event.e;
      var vpt = this.canvas.viewportTransform;
      vpt[4] += e.clientX - this.lastPosX
      vpt[5] += e.clientY - this.lastPosY
      this.canvas.requestRenderAll()
      this.lastPosX = e.clientX
      this.lastPosY = e.clientY
    }
  }


  /** 鼠标移动绘制 */
  mouseMoveMode(event: any): void {
    if (!this.isDrawing) return;
    const pointer = this.canvas.getPointer(event.e);

    switch (this.currentMode) {
      case 'line':
        this.drawLineShowAuxiliaryLine(pointer)
        this.line.set({ x2: pointer.x, y2: pointer.y });
        this.canvas.renderAll();
        break;
      default:
        break;
    }

  }

  handleMouseUp(event: any): void {
    this.mouseUpDragging()
    this.mouseUpMode(event)
  }

  mouseUpDragging(): void {
    this.canvas.setViewportTransform(this.canvas.viewportTransform)
    this.isDragging = false
  }

  mouseUpMode(event: any): void {
    if (event.e.button === 0) {
      this.isDrawing = false;

      switch (this.currentMode) {
        case 'line':
          this.visiableAuxiliaryLine()
          if (this.line.width == 0) {
            this.removeEle(this.line)
          } else {
            this.canvas.setActiveObject(this.line);
            this.canvas.renderAll();
          }
          this.disableInteractivity()
          break;
        default:
          break;
      }
    }
  }

  handleMouseWheel(event: any): void {
    const delta = event.e.deltaY;
    let zoom = this.canvas.getZoom();
    zoom *= 1 - delta / 1000;

    // 设置缩放范围
    if (zoom > this.maxZoom) zoom = this.maxZoom;
    if (zoom < this.minZoom) zoom = this.minZoom;

    this.canvas.setZoom(zoom);
    event.e.preventDefault();
    event.e.stopPropagation();
  }


  setDragType(type: DragType): void {
    this.currentDragType = type
  }

  setCurrentMode(mode: Mode): void {
    this.returnCanvasInit()
    this.currentMode = mode

    switch (this.currentMode) {
      case 'fhpath':
        this.canvas.isDrawingMode = true
        break;
      case 'line':
        this.disableInteractivity()
        this.canvas.selection = false
        break;
      case 'select':
        this.enableInteractivity()
        break;
      default:
        break;
    }
  }


  /** 返回画布默认状态 */
  returnCanvasInit(): void {
    this.canvas.isDrawingMode = false
    this.canvas.selection = true
  }


  selectionCreated(e: any): void {
    const tipFn = (e: any) => {
      tapable._hooks.tipsHook.call({ x: e.e.clientX, y: e.e.clientY })
    }

    console.log(e.selected[0]);

    if (e.selected.length == 1) {
      tapable._hooks.canvasSelectHook.call({
        select: e.selected[0],
        tipCb: tipFn.bind(this, e)
      })
    }
    if (e.selected.length > 1) {

    }
  }


  selectionClear(e: any): void {
    tapable._hooks.canvasSelectHook.call({
      select: null
    })
  }


  /** 禁用交互 */
  disableInteractivity(): void {
    const objects = this.canvas.getObjects();
    for (var i in objects) {
      objects[i].selectable = false;
    }
    this.canvas.renderAll();
  }


  /** 启用交互 */
  enableInteractivity(): void {
    const objects = this.canvas.getObjects();
    for (const i in objects) {
      objects[i].selectable = true;
    }
    this.canvas.renderAll();
  }


  saveHistory(event: any): void {

  }


  applyHistory(type: 'next' | 'last') {

  }



}

export type DragType = 'rect' | 'text' | 'line' | null

