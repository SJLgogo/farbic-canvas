import { Injectable } from "@angular/core";
import { AREA_INFO } from "../enum/Base.enum";

type prop = 'horizontalProportion' | 'drawY'

@Injectable({
    providedIn: 'root'
})
export class BaseDataService {

    private basicData: any = {
        realCanvasWidth: 10000,  // 画布对应的真实宽度,单位米
        horizontalProportion: 0,   // 水平方向比例
        canvasWidth: 0,
        canvasHeight: 0,
    };

    constructor() {
    }

    get() {
        return this.basicData
    }

    set(prop: prop, value: number) {
        this.basicData[prop] = value
    }

    initSet(config: any): void {
        this.basicData.canvasWidth = config.canvasWidth
        this.basicData.canvasHeight = config.canvasHeight
        this.set('horizontalProportion', this.getHorizontalProportion(config.canvasWidth))
    }

    /** 设置比列 */
    getHorizontalProportion(canvasWidth: number) {
        return +(canvasWidth / this.basicData.realCanvasWidth).toFixed(2)
    }


    /** 获取主线路绘制时y的值 */
    getFrontY(realLineWidth: number) {
        let lineWidth = realLineWidth
        let cutNum = 1

        while (lineWidth > 0) {

            if (realLineWidth > this.basicData.realCanvasWidth) {
                lineWidth = lineWidth - this.basicData.realCanvasWidth
                cutNum++
            }

            if (lineWidth < this.basicData.realCanvasWidth) {
                lineWidth = 0
                cutNum++
            }
        }


        return Math.floor(this.basicData.canvasHeight / cutNum);
    }

    /** 获取该站占第几行 */
    getStationInRow(idx: number): number {
        let row = 1, stationWidth = AREA_INFO.width * (idx + 1) ,  canvasWidth = this.basicData.canvasWidth
        let tempStationWidth = stationWidth ;


        while(tempStationWidth > 0){
            tempStationWidth -= AREA_INFO.width
            canvasWidth -= AREA_INFO.width

            if(tempStationWidth!=0 && canvasWidth < AREA_INFO.width){
                canvasWidth = this.basicData.canvasWidth
                row++
            }
        }

        return row
    }

    /** 获取站所在行的索引 */
    getStationInRowIdx(idx:number):number{
        let res = 0 , stationWidth = AREA_INFO.width * (idx + 1)

        if(stationWidth < this.basicData.canvasWidth){
            res = idx
        }else{
            let tempRes = -1 , tempStationWidth = stationWidth ,  canvasWidth = this.basicData.canvasWidth
            while(tempStationWidth > 0){
                tempStationWidth -= AREA_INFO.width
                canvasWidth -= AREA_INFO.width
                tempRes++
                if(tempStationWidth!=0 && canvasWidth < AREA_INFO.width){
                    canvasWidth = this.basicData.canvasWidth
                    tempRes = -1
                }
            }
            
            res = tempRes
        }

        return res
    }

    /** 行距离 */
    getRowWidth(stationWidth:number):number{
        let res = stationWidth

        while(res >= this.basicData.canvasWidth){
            res -= this.basicData.canvasWidth
        }

        return res
    }


    /** 根据站点得到占几行 */
    getStationRow(stations: any[]): number {
        let row = 1, stationNums = stations.length, trendsWidth = this.basicData.canvasWidth

        /** 针对画布宽度大于区间宽度 */
        while (trendsWidth > 0 && stationNums > 0) {
            trendsWidth = trendsWidth - AREA_INFO.width
            stationNums--

            if (trendsWidth <= 0 && stationNums != 0) {
                trendsWidth = this.basicData.canvasWidth
                row++
            }

            if(stationNums==0 && trendsWidth< AREA_INFO.width){
                row++
            }

        }

        return row
    }


    /** 根据站点占几行返回绘制的高度Y */
    getStationY(row: number) {
        return this.basicData.canvasHeight / (row+1);
    }


}