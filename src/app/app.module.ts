/* eslint-disable import/order */
/* eslint-disable import/no-duplicates */
// #region Http Interceptors
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { default as ngLang } from '@angular/common/locales/zh';
import { APP_INITIALIZER, LOCALE_ID, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleInterceptor } from '@delon/auth';
import { ALAIN_I18N_TOKEN, DELON_LOCALE, zh_CN as delonLang } from '@delon/theme';
import { NZ_DATE_LOCALE, NZ_I18N, zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

// #region default language
// 参考：https://ng-alain.com/docs/i18n
// #region Startup Service
import { DefaultInterceptor, I18NService, StartupService } from '@core';
import { zhCN as dateLang } from 'date-fns/locale';
// register angular
import { registerLocaleData } from '@angular/common';
import { BidiModule } from '@angular/cdk/bidi';
// #region JSON Schema form (using @delon/form)
import { JsonSchemaModule } from '@shared';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GlobalConfigModule } from './global-config.module';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { STWidgetModule } from './shared/st-widget/st-widget.module';
import { Observable } from 'rxjs';
import { WidgetRegistry } from '@delon/form';
import { SelectEmployeeButtonComponent } from './shared/components/select-employee-button/select-employee-button.component';
import { DelonACLModule } from '@delon/acl';


@NgModule({
  declarations: [AppComponent],
  imports: [
    DelonACLModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GlobalConfigModule.forRoot(),
    CoreModule,
    SharedModule,
    LayoutModule,
    RoutesModule,
    STWidgetModule,
    NzNotificationModule
  ],
  // providers: [...LANG_PROVIDES, ...INTERCEPTOR_PROVIDES, ...I18NSERVICE_PROVIDES, ...APPINIT_PROVIDES],
  bootstrap: [AppComponent]
})
export class AppModule {

}
