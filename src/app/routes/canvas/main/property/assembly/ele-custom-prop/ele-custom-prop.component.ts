import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ele-custom-prop',
  templateUrl: './ele-custom-prop.component.html',
  styleUrls: ['./ele-custom-prop.component.less']
})
export class EleCustomPropComponent implements OnInit {

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
  canvas: any;

  constructor() {
  }

  color: string = '#FFF';


  ngOnInit(): void {
  }


  customChange(prop: string, e: string): void {
    this.klass[prop] = e;
    const post: any = {}
    post[prop] = e
    this._klass.set(post);
    this.canvas.renderAll();
  }


  getChangeColor(e: any): void {

  }

  click(): void {
    this.canvas.bringToFront(this._klass)
  }

  zIndexChange(e: any): void {
    this.canvas.moveTo(this._klass, e)
    this.canvas.renderAll()
  }



}