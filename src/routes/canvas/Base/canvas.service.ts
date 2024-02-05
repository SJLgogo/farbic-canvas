import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CanvasService{

    constructor(){

    }

    getInfo(){
        return [
            {type:'allFronts' , lineWidth:42123}
        ]
    }
}