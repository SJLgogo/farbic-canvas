import { fabric } from 'fabric';
import { CanvasEvent, DragType } from './CanvasEvent';
import { Mode } from './Shape';
import { RenderAuto } from './RenderAuto';
import { BaseDataService } from '../Base/base.data.service';
import { RenderAuto2 } from './RenderAuto2';
import { tapable } from '../utils/Tapable';
import initAligningGuidelines from '../utils/auxiliaryLine';
import { initControls } from '../core/initController';
import { Tips } from './Tips';

export class canvasEditor {

    canvas: any;

    declare canvasEvent: CanvasEvent

    declare renderAuto: RenderAuto2

    declare baseDataService: BaseDataService;

    declare selectedKlass: any;  // 单选中的元素

    declare tip: Tips;


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

        this.tip = new Tips()

        this.init()
    }

    init(): void {
        initControls(this.canvas)

        initAligningGuidelines(this.canvas)

        this.initHooks()
    }

    /**
     * 注册事件hooks
    */
    initHooks(): void {
        tapable._hooks.canvasSelectHook.tap('画布元素单选', (e: any) => this.setSelectedKlass(e))
    }

    /**
     * 选中元素
     */
    setSelectedKlass(e: SelectHookProp): void {
        this.selectedKlass = e.select
        // e.tipCb && e.tipCb()
    }


    /**
     * 清除画布
     */
    clear(): void {
        this.canvas.clear()
    }

    /**
     * 加载json文件
     * @param canvasJson 
     */
    loadJson(canvasJson: any): void {
        this.canvas.loadFromJSON(canvasJson, this.canvas.renderAll.bind(this.canvas));
        this.canvasEvent.addAuxiliaryLine()
        this.findKlassById('line_1')
    }

    /**
     * 获取选中元素
     * @returns 
     */
    getActiveObject(): any {
        return this.canvas.getActiveObject()
    }

    /**
     * 移除选中元素
     */
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


    /**
     * 设置拖拽的类型
     * @param type 
     */
    setDragType(type: DragType): void {
        this.canvasEvent.setDragType(type)
    }

    /**
        * 设置画线类型
        * @param mode 
        */
    setDrawingMode(boolean: Boolean): void {
        this.canvas.isDrawingMode = boolean
    }


    setCurrentMode(mode: Mode): void {
        this.canvasEvent.setCurrentMode(mode)
    }

    /**
     * 判断是否有选中
     * @returns 
     */
    hasOneSelect(): boolean {
        if (this.getActiveObject()?._objects) {
            return false
        }

        if (this.getActiveObject()) {
            return true
        }

        return false
    }


    /** 根据ID查找元素 */
    findKlassById(id: string): any {

        let klass;
        for (let i = 0; i < this.canvas._objects.length; i++) {


            if (this.canvas._objects[i].c_code == id) {
                klass = this.canvas._objects[i]
                break;
            }
        }
        console.log(klass);
        return klass
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
    backgroundColor: 'white',
    // stopContextMenu: true, // 禁止默认右键菜单
    controlsAboveOverlay: true, // 超出clipPath后仍然展示控制条
    // selectionColor: 'white',
    // selectionBorderColor: 'red'
};


interface SelectHookProp {
    select: any,
    tipCb?: Function
}

