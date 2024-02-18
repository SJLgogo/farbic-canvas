import { fabric } from 'fabric';
import { CanvasEvent, DragType } from './CanvasEvent';
import { Mode } from './Shape';
import { RenderAuto } from './RenderAuto';
import { BaseDataService } from '../Base/base.data.service';
import { RenderAuto2 } from './RenderAuto2';

export class canvasEditor {

    canvas: any;

    declare canvasEvent:CanvasEvent

    declare renderAuto:RenderAuto2

    declare baseDataService:BaseDataService;


    constructor(config: Config ) {
        canvaProps.width = config.width
        canvaProps.height = config.height

        this.canvas = new fabric.Canvas(config.elementId , canvaProps);

        this.canvasEvent = new CanvasEvent({
            canvas: this.canvas 
        })

        this.renderAuto = new RenderAuto2({
            canvas: this.canvas ,
            baseDataService:config.baseDataService
        })

   
   
    }

    clear():void{
        this.canvas.clear()
    }

    getActiveObject():any{
        return this.canvas.getActiveObject()
    }

    removeActiceObject():void{
        if(this.getActiveObject()._objects){
            const activeObjects = this.canvas.getActiveObjects();
            activeObjects.forEach((obj:any)=>{
                this.canvas.remove(obj);
            })
            this.canvas.discardActiveObject();
        }else{
            this.canvas.remove(this.getActiveObject());
        }
        this.canvas.renderAll(); 
    }


    setDragType(type:DragType):void{
        this.canvasEvent.setDragType(type)
    }


    setDrawingMode(boolean:Boolean):void{
        this.canvas.isDrawingMode = boolean
    }

    setCurrentMode(mode:Mode):void{
        this.canvasEvent.setCurrentMode(mode)
    }



}

interface Config {
    width: number,
    height: number,
    elementId: string,
    baseDataService:BaseDataService
}

const canvaProps = {
    width: 0, 
    height: 0,
    isDrawingMode:false, // 画线模式
    selection:true,  // 元素选择
    backgroundColor:'white'
};



