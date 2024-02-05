import { fabric } from 'fabric';
import { CreateShape } from '../utils/CreateShape';
import { Mode } from './Shape';

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
    this.isDrawing = true
    const pointer = this.canvas.getPointer(event.e);
    const points = [pointer.x, pointer.y, pointer.x, pointer.y];
    switch (this.currentMode) {
      case 'select':
        break;
      case 'line':
        this.line = this.createLine(0, 0, {points:points , noNeedTop:true})
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
    var pointer = this.canvas.getPointer(event.e);

    switch (this.currentMode) {
      case 'line':
        this.line.set({ x2: pointer.x, y2: pointer.y });
        break;
      default:
        break;
    }

    this.canvas.renderAll();
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
        this.canvas.selection = false
        break;
      default:
        break;
    }
  }


  /** 返回画布默认状态 */
  returnCanvasInit():void{
    this.canvas.isDrawingMode = false
    this.canvas.selection = true
  }



}

export type DragType = 'rect' | 'text' | 'line' | null

