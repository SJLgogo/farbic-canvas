import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ele-custom-prop',
  templateUrl: './ele-custom-prop.component.html',
  styleUrl: './ele-custom-prop.component.less'
})
export class EleCustomPropComponent implements OnInit  {

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

  constructor(){
  }

  custom = '自定义参数'


  ngOnInit(): void {
  }


  customChange(e:string):void{
    this.klass.customProp = e;
    this._klass.set({ customProp: e });
    console.log(this._klass);
    this.canvas.renderAll();
  }





}