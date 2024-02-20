import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ele-line',
  templateUrl: './ele-line.component.html',
  styleUrls: ['./ele-line.component.less']
})
export class EleLineComponent implements OnInit  {

  _klass: any;

  @Input() 
  get klass(): any {
    return this._klass;
  }
  set klass(value: any) {
    this._klass = value;
    this.klassChange.emit(this._klass);
  }

  @Output() klassChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  canvas:any;

  isStrokebool:boolean = false

  constructor(){
  }

  switchChange(e:any):void{
    if(e){
      this._klass.set({strokeDashArray:[5,5]})
    }else{
      this._klass.set({strokeDashArray:null})
    }
    this.canvas.renderAll()
  }

  ngOnInit(): void {
    if(this._klass.strokeDashArray){
      this.isStrokebool= true
    }
  }

}