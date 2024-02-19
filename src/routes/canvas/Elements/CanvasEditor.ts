import { fabric } from 'fabric';
import { CanvasEvent, DragType } from './CanvasEvent';
import { Mode } from './Shape';
import { RenderAuto } from './RenderAuto';
import { BaseDataService } from '../Base/base.data.service';
import { RenderAuto2 } from './RenderAuto2';
import { tapable } from '../utils/Tapable';

export class canvasEditor {

    canvas: any;

    declare canvasEvent: CanvasEvent

    declare renderAuto: RenderAuto2

    declare baseDataService: BaseDataService;

    declare selectedKlass: any;  // 单选中的元素


    constructor(config: Config) {
        canvaProps.width = config.width
        canvaProps.height = config.height

        this.canvas = new fabric.Canvas(config.elementId, canvaProps);

        this.canvasEvent = new CanvasEvent({
            canvas: this.canvas
        })

        this.renderAuto = new RenderAuto2({
            canvas: this.canvas,
            baseDataService: config.baseDataService
        })

        this.initHooks()
    }

    /**
     * 注册事件hooks
    */
    initHooks(): void {
        tapable._hooks.canvasSelectHook.tap('画布元素单选' ,(e:any)=>this.setSelectedKlass(e))
    }

    setSelectedKlass(e:any):void{
        this.selectedKlass = e
    }


    clear(): void {
        this.canvas.clear()
    }

    loadJson(canvasJson:any):void{
       this.canvas.loadFromJSON(canvasJson ,this.canvas.renderAll());
    }

    getActiveObject(): any {
        return this.canvas.getActiveObject()
    }

    removeActiceObject(): void {
        if (this.getActiveObject()._objects) {
            const activeObjects = this.canvas.getActiveObjects();
            activeObjects.forEach((obj: any) => {
                this.canvas.remove(obj);
            })
            this.canvas.discardActiveObject();
        } else {
            this.canvas.remove(this.getActiveObject());
        }
        this.canvas.renderAll();
    }


    setDragType(type: DragType): void {
        this.canvasEvent.setDragType(type)
    }


    setDrawingMode(boolean: Boolean): void {
        this.canvas.isDrawingMode = boolean
    }

    setCurrentMode(mode: Mode): void {
        this.canvasEvent.setCurrentMode(mode)
    }


    hasOneSelect(): boolean {
        if (this.getActiveObject()?._objects) {
            return false
        }

        if (this.getActiveObject()) {
            return true
        }

        return false
    }

}

interface Config {
    width: number,
    height: number,
    elementId: string,
    baseDataService: BaseDataService
}

const canvaProps = {
    width: 0,
    height: 0,
    isDrawingMode: false, // 画线模式
    selection: true,  // 元素选择
    backgroundColor: 'white'
};



