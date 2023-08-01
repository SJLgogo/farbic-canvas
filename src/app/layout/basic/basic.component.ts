import { Component } from '@angular/core';
import { SettingsService, User } from '@delon/theme';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { environment } from '@env/environment';

@Component({
  selector: 'layout-basic',
  template: `
    <layout-default [options]="options" [content]="contentTpl" [customError]="null">
      <layout-default-header-item direction="left" hidden="mobile">
<!--        <a layout-default-header-item-trigger routerLink="/passport/lock">-->
<!--          <i nz-icon nzType="lock"></i>-->
<!--        </a>-->
      </layout-default-header-item>
<!--      <layout-default-header-item direction="left" hidden="pc">-->
<!--        <div layout-default-header-item-trigger (click)="searchToggleStatus = !searchToggleStatus">-->
<!--          <i nz-icon nzType="search"></i>-->
<!--        </div>-->
<!--      </layout-default-header-item>-->
<!--      <layout-default-header-item direction="middle">-->
<!--        <header-search class="alain-default__search" [(toggleChange)]="searchToggleStatus"></header-search>-->
<!--      </layout-default-header-item>-->
<!--      <layout-default-header-item direction="right">-->
<!--        <header-notify></header-notify>-->
<!--      </layout-default-header-item>-->
<!--      <layout-default-header-item direction="right" hidden="mobile">-->
<!--        <header-task></header-task>-->
<!--      </layout-default-header-item>-->
<!--      <layout-default-header-item direction="right" hidden="mobile">-->
<!--        <header-icon></header-icon>-->
<!--      </layout-default-header-item>-->
      <layout-default-header-item direction="right" hidden="mobile">
        <div layout-default-header-item-trigger nz-dropdown [nzDropdownMenu]="settingsMenu" nzTrigger="click" nzPlacement="bottomRight">
          <i nz-icon nzType="setting"></i>
        </div>
        <nz-dropdown-menu #settingsMenu="nzDropdownMenu">
          <div nz-menu style="width: 200px;">
            <div nz-menu-item>
<!--              <header-fullscreen></header-fullscreen>-->
            </div>
<!--            <div nz-menu-item>-->
<!--              <header-clear-storage></header-clear-storage>-->
<!--            </div>-->
          </div>
        </nz-dropdown-menu>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <header-user></header-user>
      </layout-default-header-item>
      <ng-template #contentTpl>
        <router-outlet></router-outlet>
      </ng-template>
    </layout-default>
    <!--    <setting-drawer *ngIf="showSettingDrawer"></setting-drawer>-->
    <!--    <theme-btn></theme-btn>-->
  `
})
export class LayoutBasicComponent {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`
  };
  searchToggleStatus = false;
  showSettingDrawer = !environment.production;

  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService) {}
}
