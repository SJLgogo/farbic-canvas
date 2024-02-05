import { Injectable } from "@angular/core";

type prop = 'horizontalProportion' | 'drawY'

@Injectable({
    providedIn:'root'
})
export class BaseDataService{

    private basicData: any = {
        realCanvasWidth : 10000,  // 画布对应的真实宽度,单位米
        horizontalProportion: 0,   // 水平方向比例
        canvasWidth:0,
        canvasHeight:0,
    };

    constructor(){
    }

    get(){
        return this.basicData
    }

    set(prop:prop , value:number){
        this.basicData[prop] = value
    }

    initSet(config:any):void{
        this.basicData.canvasWidth = config.canvasWidth
        this.basicData.canvasHeight = config.canvasHeight
        this.set('horizontalProportion',this.getHorizontalProportion(config.canvasWidth))
    }

    /** 设置比列 */
    getHorizontalProportion(canvasWidth:number){
        return +(canvasWidth / this.basicData.realCanvasWidth).toFixed(2)
    }


    /** 获取主线路绘制时y的值 */
    getFrontY(realLineWidth:number){
          let lineWidth = realLineWidth
          let cutNum = 1

          while (lineWidth > 0) {

            if (realLineWidth > this.basicData.realCanvasWidth) {
                lineWidth = lineWidth - this.basicData.realCanvasWidth
                cutNum++
            }

            if(lineWidth < this.basicData.realCanvasWidth){
                lineWidth = 0
                cutNum++
            }
        }

        console.log(cutNum);


        return Math.floor(this.basicData.canvasHeight / cutNum);
    }

}