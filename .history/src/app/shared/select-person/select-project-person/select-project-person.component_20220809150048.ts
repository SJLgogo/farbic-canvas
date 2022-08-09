import {Component, OnInit} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";
import {NzMessageService} from "ng-zorro-antd/message";
import {variable} from "../../../api/common-interface/common-interface";
import {Organization, Person, selected} from "./department/department.interface";
import {RxjsChangeService} from "../rxjsChange.service";
import {_HttpClient} from "@delon/theme";

@Component({
  selector: 'app-select-project-person',
  templateUrl: './select-project-person.component.html',
  styleUrls: ['./select-project-person.component.less']
})
export class SelectProjectPersonComponent implements OnInit {

  constructor(
    public http: _HttpClient,
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    private rxjsChangeService: RxjsChangeService,
  ) {
  }

  chooseMode: variable<string>;  // 必填，organization | employee | department
  functionName: variable<string>; // 必填，自定义功能名称
  singleChoice:boolean = false ; // 
  selectList: selected[] = []
  pageSize:number = 10; // 常用部门查询

  ngOnInit(): void {
    Promise.all([this.judge(), this.getSelectedByCatch()])
  }

  judge(): void {
    if (!this.chooseMode || !this.functionName) {
      this.msgSrv.error('请正确传递参数')
      this.close()
    }
  }

  del(idx: number, node: selected): void {
    this.rxjsChangeService.emit({category: node.category, id: node.id})
    this.selectList.splice(idx, 1)
  }

  clearCatch(): void {
    localStorage.removeItem(this.functionName!)
  }

  getSelectedByCatch(): void {
    localStorage.getItem(this.functionName!) ? this.selectList = JSON.parse(<string>localStorage.getItem(this.functionName!)) : ''
  }


  close(): void {
    this.modal.destroy()
  }

  save(): void {
    this.commonDepartments()
    this.modal.close({selectList: this.selectList})
    this.clearCatch()
  }

  commonDepartments(): void {
    const appId = localStorage.getItem('appId')
    const res = this.selectList.filter((item) => item.category === "organization").map(item => {
      return {
        appId: appId,
        functionId: this.functionName,
        orgId: item.id
      }
    })
    this.http.post('/org/service/organization/SelectOrgTotalController', res).subscribe(res => {

    })
  }


}