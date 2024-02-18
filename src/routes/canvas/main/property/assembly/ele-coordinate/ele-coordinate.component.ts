import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ele-coordinate',
  templateUrl: './ele-coordinate.component.html',
  styleUrl: './ele-coordinate.component.less'
})
export class EleCoordinateComponent implements OnInit  {

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

  a:number = 90


  ngOnInit(): void {
  }


  onLeftChange(value: number) {
    this.klass.left = value;
    this._klass.set({ left: value });
    this.canvas.renderAll();
  }

  onTopChange(value: number) {
    this.klass.top = value;
    this._klass.set({ top: value });
    this.canvas.renderAll();
  }


}
