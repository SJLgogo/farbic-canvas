import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.less']
})
export class PropertyComponent implements OnInit {

  private _klass: any;

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


  ngOnInit(): void {
  }

}
