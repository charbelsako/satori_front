import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public url: string = environment.backendUrl;
  constructor(private http: HttpClient, private apiService: ApiService) { }
  getRecords(data: any, actionparam: any, filterData: any): Observable<any> {
    
    let _filterData = filterData
    if (filterData.responsibleAttorney) {
      _filterData.responsibleAttorney = filterData.responsibleAttorney.id
    }
    const queryParams = this.queryString(actionparam, 'array');
    let queryString = queryParams.length > 0 ? `&${queryParams.join("&")}` : ''
    if (data.searchTerm == '') {
      return this.apiService.post(`/search/filter?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}${queryString}`, _filterData);
    } else {
      return this.apiService.post(`/search/filter?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}${queryString}`, _filterData);
    }
  }
  getSearchForExcelDownload(data: any, actionparam: any, filterData): Observable<any> {
    const queryParams = this.queryString(actionparam, 'array');
    let queryString = queryParams.length > 0 ? `&${queryParams.join("&")}` : ''
    let _filterData = filterData
    if (filterData.responsibleAttorney) {
      _filterData.responsibleAttorney = filterData.responsibleAttorney.id
    }
    if (data.searchTerm == '') {
      return this.apiService.postBlob(`/search/download-excel?sortBy=${data.sortColumn + ':' + data.sortDirection}${queryString}`, _filterData);
    } else {
      return this.apiService.postBlob(`/search/download-excel?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}${queryString}`, _filterData);
    }
  }
  filtersSearchDataOption(data: any, actionparam: any): Observable<any> {
    const queryString = this.queryString(actionparam)
    let filterData = data
    if (filterData.responsibleAttorney) {
      filterData.responsibleAttorney = filterData.responsibleAttorney.id
    }
    return this.apiService.post(`/search/filter/options${queryString}`, filterData)
  }
  filtersSearchData(actionparam: any): Observable<any> {
    const queryString = this.queryString(actionparam)
    return this.apiService.post(`/search/filter/options${queryString}`)
  }

  filterMatterSearchData(actionparam: any): Observable<any> {
    const queryString = this.queryString(actionparam)
    return this.apiService.post(`/search/filter/options${queryString}`)
  }
  queryString(actionparam: any, returnType: any = 'string'):string|any {
    const { billingMode, payorType, expire, adjustment, staffId, staffIdOperation, staffIdDuration } = actionparam
    let queryArray = []
    if (billingMode) {
      queryArray.push(`billingMode=${decodeURI(billingMode)}`)
    }
    if (expire) {
      queryArray.push(`expire=${decodeURI(expire)}`)
    }
    if (payorType) {
      queryArray.push(`payorType=${decodeURI(payorType)}`)
    }
    if (adjustment) {
      queryArray.push(`adjustment=${decodeURI(adjustment)}`)
    }
    if (staffId) {
      queryArray.push(`staffId=${decodeURI(staffId)}`)
      queryArray.push(`staffIdOperation=${decodeURI(staffIdOperation)}`)
      queryArray.push(`staffIdDuration=${decodeURI(staffIdDuration)}`)
    }
    let queryString = ""
    if (queryArray.length > 0) {
      queryString = `?${queryArray.join("&")}`
    }
    return returnType === 'string' ? queryString : queryArray
  }
  getDashboardRecords(): Observable<any> {
    return this.apiService.get(`/search/dashboard-records`);
  }
  getDayExpireChart(): Observable<any> {
    return this.apiService.get(`/search/get-day-expire-chart`)
  }
  getAggregationBilling(): Observable<any> {
    return this.apiService.get(`/search/get-aggregation-billing`)
  }
  getAggregationFilter(time): Observable<any> {
    return this.apiService.post(`/search/get-aggregation-filter-operation`, {
      time: time
    })
  }
}
