import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
// import { PreloadOptionalModules } from '@delon/theme';
import { environment } from '@env/environment';
// layout
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { LayoutBlankComponent } from '../layout/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    // component: LayoutBasicComponent,
    // canActivate: [SimpleGuard],
    // canActivateChild: [SimpleGuard],
    data: {},
    children: [
      { path: '', redirectTo: 'canvas', pathMatch: 'full' },
      { path: 'canvas', loadChildren: () => import('./canvas/canvas.module').then(m => m.CanvasModule) }
    ]
  },
];

@NgModule({
  providers: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
