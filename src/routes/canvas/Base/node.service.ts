import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class NodeService {

    constructor(private http:HttpClient){}


    savaCanvas(post:any){
        return this.http.post('/canvasServer/canvas/add-template',post)
    }


    findCanvas(post:any){
        return this.http.post('/canvasServer/canvas/findByType',post)
    }
}