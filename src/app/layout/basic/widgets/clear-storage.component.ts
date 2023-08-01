import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'header-clear-storage',
  template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | i18n }}
  `,
  host: {
    '[class.flex-1]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderClearStorageComponent {
  constructor(private modalSrv: NzModalService, private messageSrv: NzMessageService) {}

  @HostListener('click')
  _click(): void {
    this.modalSrv.confirm({
      nzTitle: '是否清除本地缓存?',
      nzOnOk: () => {
        localStorage.clear();
        // //清除服务器的cookies
        // this.http.post('/service/portal/logout', {}).subscribe(res => {
        //   if (res.success) {
        //     this.msgSrv.success('清除后台cookies成功!');
        //     this.tokenService.clear();
        //     this.cookieSrv.removeAll()
        //     localStorage.clear();
        //     // window.location.href = environment['logout_url'];
        //     //路由跳转到登录页面
        //     this.router.navigateByUrl('/passport/login');
        //   } else {
        //     this.msgSrv.error(res.message);
        //   }
        // });
      }
    });
  }
}
