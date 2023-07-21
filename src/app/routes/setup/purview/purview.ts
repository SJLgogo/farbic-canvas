import { Component, OnInit, ViewChild } from '@angular/core';
import { SFComponent, SFSchema } from '@delon/form';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/st';
import { ACLService } from '@delon/acl';

@Component({
  selector: 'app-setup-purview',
  templateUrl: './purview.html'
})
export class purview implements OnInit {
  url = `/org/service/organization/admin/account/page-all`;
  @ViewChild('sf', { static: false }) sf!: SFComponent;
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '姓名'
      },
      job: {
        type: 'string',
        title: '工号'
      },
      role: {
        type: 'string',
        title: '参与角色'
      },
      range: {
        type: 'string',
        title: '可查看实名制范围'
      },



    }
  };
  @ViewChild('st', { static: false }) st!: STComponent;
  columns: STColumn[] = [
    { title: '姓名', index: 'account' },
    { title: '工号', index: 'thirdPartyName' },
    { title: '参与角色', index: 'mobilePhone' },
    { title: '菜单权限', index: 'companyName' },
    { title: '可查看实名制范围', index: 'companyName' },
  ];

  ngOnInit() {
    this.acl.setAbility(['add_examine']);
  }

  constructor(private http: _HttpClient, private modal: ModalHelper, public acl: ACLService) {
  }



}
