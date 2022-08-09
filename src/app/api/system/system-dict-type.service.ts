import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, Body, GET, Path, POST, PUT } from '@delon/theme';
import { Observable } from 'rxjs';
import { HttpResult } from '../common-interface/common-interface';

@Injectable({
  providedIn: 'root'
})
@BaseUrl('/service/dictionary/dict-type')
export class SystemDictTypeService extends BaseApi {
  @GET('/page-all')
  findAll(): Observable<HttpResult> {
    // @ts-ignore
    return;
  }

  @POST('')
  save(@Body data: any): Observable<HttpResult> {
    // @ts-ignore
    return;
  }

  @PUT('')
  update(@Body data: any): Observable<HttpResult> {
    // @ts-ignore
    return;
  }

  @GET('/:id')
  findById(@Path('id') id: string): Observable<HttpResult> {
    // @ts-ignore
    return;
  }
}
