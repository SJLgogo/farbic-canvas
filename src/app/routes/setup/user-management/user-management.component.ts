import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { ModalHelper } from '@delon/theme';
import { OrganizationService } from '../../../api/dict/organization-management/organization.service.ts';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SelectProjectPersonComponent } from 'src/app/shared/select-person/select-project-person/select-project-person.component';
import { SFComponent, SFSchema } from '@delon/form';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.less']
})
export class UserManagementComponent implements OnInit {
  @ViewChild('st') private readonly stApp!: STComponent;

  constructor(private modal: ModalHelper, private organizationService: OrganizationService, private msgSrv: NzMessageService) {}

  url = '/org/service/organization/admin/user/page-all';



  @ViewChild('sf', { static: false }) sf!: SFComponent;
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '姓名'
      }
    }
  };
  columns: STColumn[] = [
    { title: '姓名', index: 'name' },
    // { title: 'email', index: 'email' },
    // {title: '应用Id', index: 'agentId'},
    // { title: '应用', index: 'category', type: 'enum', enum: { wxCp: '企业微信', ding: '钉钉', yzj: '云之家', other: '其他' } },
    { title: '数据来源', index: 'type',type: 'enum', enum: { auto: '自动同步', admin_add: '手动同步' } },
    // {
    //   title: '操作',
    //   buttons: [
    //     // {
    //     //   text: `编辑`,
    //     //   click: e => {}
    //     // },
    //     {
    //       text: '删除',
    //       icon: 'delete',
    //       type: 'del',
    //       pop: {
    //         title: '确认删除?',
    //         okType: 'danger',
    //         icon: 'star'
    //       },
    //       click: e => {}
    //     }
    //   ]
    // }
  ];
  list:any[]=[]
  ngOnInit(): void {}

  choosePerson(): void {
    this.modal
      .createStatic(SelectProjectPersonComponent, {
        chooseMode: 'employee', // department organization employee
        functionName: 'not-clock',
        selectList:this.list
        // singleChoice:true
      })
      .subscribe(res => {
        console.log(res);
        this.list = res.selectList
      });
  }
}
