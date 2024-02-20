import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ele-text',
  templateUrl: './ele-text.component.html',
  styleUrls: ['./ele-text.component.less']
})
export class EleTextComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  textChange(prop: string, e: any): void {
    this._klass.set('fontSize', e);
    this.canvas.renderAll();
  }

}
