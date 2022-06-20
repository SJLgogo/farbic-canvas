import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DictSwaggerEditComponent } from './swagger-edit/swagger-edit.component';
import { DictSwaggerListComponent } from './swagger-list/swagger-list.component';

const routes: Routes = [
  { path: 'data', component: DictSwaggerListComponent },
  { path: 'swagger-edit', component: DictSwaggerEditComponent },
  { path: 'swagger-edit', component: DictSwaggerEditComponent },
  { path: 'swagger-edit', component: DictSwaggerEditComponent },
  { path: 'swagger-edit', component: DictSwaggerEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictRoutingModule {}