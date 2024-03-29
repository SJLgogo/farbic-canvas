import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CanvasService{

    constructor(){

    }

    getInfo(){
        return [
            // {type:'allFronts' , lineWidth:42123},
            {type:'area' , start:0 , end : 1000, stationName:'五街'},
            {type:'area' , start:1000 , end : 3000, stationName:'五街'},
            {type:'area' , start:3000 , end : 6000, stationName:'五街'},
            {type:'area' , start:6000 , end : 7000, stationName:'五街'},
            {type:'area' , start:7000 , end : 10000, stationName:'五街'},
            {type:'area' , start:10000 , end : 12000, stationName:'五街'},
            {type:'area' , start:10000 , end : 12000, stationName:'五街'},
            {type:'area' , start:10000 , end : 12000, stationName:'五街'},
        ]
    }
}