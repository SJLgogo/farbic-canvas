import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { CallbackComponent } from './callback.component';
import { UserLockComponent } from './lock/lock.component';
import { UserLoginComponent } from './login/login.component';
import { PassportRoutingModule } from './passport-routing.module';
import { UserRegisterResultComponent } from './register-result/register-result.component';
import { UserRegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SimpleInterceptor} from "@delon/auth";
import { UserLogoutComponent } from './logout/logout.component';

const COMPONENTS = [UserLoginComponent, UserRegisterResultComponent, UserRegisterComponent, UserLockComponent, CallbackComponent,UserLogoutComponent];


@NgModule({
  imports: [SharedModule, PassportRoutingModule],
  declarations: [...COMPONENTS],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
  ]
})
export class PassportModule {}
