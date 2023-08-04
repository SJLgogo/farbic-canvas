/* eslint-disable */
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SFComponent, SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.html'
})
export class Modify implements OnInit {
  record: any = {};
  i: any;
  mode: any;
  attendanceGroupEmployeeData: any[] = []; // 考勤组人员信息

  @ViewChild('sf', { static: false }) sf!: SFComponent;
  schema: SFSchema = {
    properties: {
      mobilePhone: { type: 'string', title: '平台手机号', format: 'mobile' },
      name: { type: 'string', title: '用户名' },
      password: { type: 'string', title: '密码' }
    },
    required: [ 'name', 'password']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 }
    },
    $no: {
      widget: 'text'
    },
    $href: {
      widget: 'string'
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 }
    }
  };

  constructor(private modal: ModalHelper, private modalRef: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {
  }

  ngOnInit(): void {
    console.log(this.i,'AASDFGHJ');
    // @ts-ignore
    this.schema.properties.name.default=this.i.user.name;
  }


  save(value: any): void {
    let url = 'register';
    value.mobilePhone=value.mobilePhone.trim();
    value.name=value.name.trim();
    value.password=value.password.trim();
    if (this.i.id) {
      url = 'update';
    }
    value.user.name=value.name;
    this.http.post(`/org/service/organization/admin/account/` + url, value).subscribe((res) => {
      if (res.success) {
        this.msgSrv.success('保存成功');
        this.modalRef.close(true);
      } else {
        this.msgSrv.error(res.message);
      }
    });
  }



















  close() {
    this.modalRef.destroy();
  }
}
