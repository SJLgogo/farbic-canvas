import { BaseDataService } from "../Base/base.data.service";
import { Line, AREA_INFO, STATION_INFO } from "../enum/Base.enum";
import { CreateShape } from "../utils/CreateShape";
import { fabric } from 'fabric';

export class RenderAuto2 extends CreateShape {

    baseData: any;

    baseDataService:BaseDataService

    config:any;

    row:number = 0; // 渲染几行

    stationY:number = 0;  
    
    constructor(config: any) {
        super({canvas:config.canvas})
        this.baseDataService = config.baseDataService
        this.baseData = this.baseDataService.get()
    }

    render(stations: any) {
        this.row = this.baseDataService.getStationRow(stations) 
        this.stationY = this.baseDataService.getStationY(this.row)
        this.drawArea(stations)
    }

    drawArea(stations:any):void{
        for(let i =0;i<stations.length;i++){
            let top = (this.stationY - AREA_INFO.height) * this.baseDataService.getStationInRow(i)
            let left = AREA_INFO.width * this.baseDataService.getStationInRowIdx(i)
            this.drawUpLine({
                left:left ,
                top:top ,
                points:[0,0,AREA_INFO.width,0]
            })
            this.drawDownLine({
                left:left ,
                top:top ,
                points:[0,0,AREA_INFO.width,0]
            })
            this.drawStation({
                left:left ,
                top:top ,
            })
        }
    }

    drawUpLine(config:any):void{
        const props = {
            left:config.left,
            top:config.top,
            stroke: 'black',
            strokeWidth: 1
        }

        const upLine = new fabric.Line(config.points, {...props , top:config.top - (AREA_INFO.height / 2)});
        this.canvas.add(upLine)
    }

    drawDownLine(config:any):void{
        const props = {
            left:config.left,
            top:config.top,
            stroke: 'black',
            strokeWidth: 1
        }
        const downLine = new fabric.Line(config.points, {...props , top:config.top + (AREA_INFO.height  / 2 )});
        this.canvas.add(downLine)
    }

    drawStation(config:any):void{
        const props= {
            top:config.top - (STATION_INFO.height/2),
            left:config.left + (AREA_INFO.width/2 - STATION_INFO.width/2),
            width: STATION_INFO.width,
            height: STATION_INFO.height,
            fill: '',
            stroke: 'black', 
            strokeWidth: 1 
        }
        const rect = new fabric.Rect(props)
        this.canvas.add(rect)
    }

}