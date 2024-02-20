import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-schedule-select-color',
  templateUrl: './select-color.component.html'
})
export class ScheduleSelectColorComponent {
  constructor(private http: _HttpClient) { }

  // 初始化颜色是从父组件中传递过来的，属性
  @Input() color: string | any;
  // 选择颜色以后调用父组件中的方法，将数据传递出去，方法
  @Output() sentColor = new EventEmitter();

  colors: string[] = [
    '#820014',
    '#A8071A',
    '#CF1421',
    '#F5212D',
    '#FF4D4F',
    '#FF4D4F',
    '#FFCCC6',
    '#876800',
    '#AD8A02',
    '#AD8A02',
    '#FBDB14',
    '#FFEC3D',
    '#FFFCAE',
    '#FDFFCD',
    '#227804',
    '#399E0E',
    '#52C41B',
    '#73D13C',
    '#95DE64',
    '#B7EB8F',
    '#D9F6BE',
    '#00474F',
    '#026D74',
    '#0199A3',
    '#36CFC9',
    '#73EBE7',
    '#AAFFFC',
    '#E3FFFE',
    '#003A8C',
    '#0150B3',
    '#066DD9',
    '#1990FF',
    '#3FA9FF',
    '#68C0FF',
    '#BAE7FF',
    '#780650',
    '#9E0F68',
    '#C41E7F',
    '#EB2E95',
    '#F759AB',
    '#FF85C0',
    '#FFD6E7'
  ];

  // 当选择颜色以后

  colorPickerChangeFun() {
    this.sentColor.emit(this.color);
  }
}
