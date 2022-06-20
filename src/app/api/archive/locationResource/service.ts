/* eslint-disable */
/*
 * Automatically generated by 'ng g ng-alain:sta'
 * @see https://ng-alain.com/cli/sta
 *
 * Inspired by: https://github.com/acacode/swagger-typescript-api
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type {
  BaseQuery,
  HttpResultListLocationDTO,
  HttpResultLocationDTO,
  HttpResultPageLocationDTO,
  HttpResultString,
  LocationDTO
} from '../models';
import { STABaseService, STAHttpOptions } from '../_base.service';

@Injectable({ providedIn: 'root' })
export class LocationResourceService extends STABaseService {
  /**
   * 修改 - 修改
   *
   * @request PUT:/api/location
   */
  update2(req: LocationDTO, options?: STAHttpOptions): Observable<HttpResultLocationDTO> {
    return this.request('PUT', `/api/location`, {
      body: req,
      ...options
    });
  }

  /**
   * 添加 - 添加
   *
   * @request POST:/api/location
   */
  save2(req: LocationDTO, options?: STAHttpOptions): Observable<HttpResultLocationDTO> {
    return this.request('POST', `/api/location`, {
      body: req,
      ...options
    });
  }

  /**
   * 分页查询接口 - 分页查询接口
   *
   * @request POST:/api/location/page-all
   */
  pageAll2(req: BaseQuery, options?: STAHttpOptions): Observable<HttpResultPageLocationDTO> {
    return this.request('POST', `/api/location/page-all`, {
      body: req,
      ...options
    });
  }

  /**
   * 通过id查询接口 - 通过id查询接口
   *
   * @request GET:/api/location/{id}
   */
  findDtoById2(id: number, options?: STAHttpOptions): Observable<HttpResultLocationDTO> {
    return this.request('GET', `/api/location/${id}`, {
      ...options
    });
  }

  /**
   * 通过id逻辑删除接口 - 通过id逻辑删除接口
   *
   * @request DELETE:/api/location/{id}
   */
  deleteById2(id: number, options?: STAHttpOptions): Observable<HttpResultString> {
    return this.request('DELETE', `/api/location/${id}`, {
      ...options
    });
  }

  /**
   * 全量查询接口 - 全量查询接口
   *
   * @request GET:/api/location/find-all
   */
  findAll2(options?: STAHttpOptions): Observable<HttpResultListLocationDTO> {
    return this.request('GET', `/api/location/find-all`, {
      ...options
    });
  }
}
