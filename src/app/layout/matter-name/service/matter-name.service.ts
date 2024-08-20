import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatterService {
  public url: string = environment.backendUrl;
  constructor(private http: HttpClient, private apiService: ApiService) { }

  getMatters(data: any, matterName:any, matterId:any): Observable<any> {
    let queryString = this.queryString(matterName, matterId)
    if (data.searchTerm == '') {
      return this.apiService.post(`/search/matter?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}${queryString}`,{});
    } else {
      return this.apiService.post(`/search/matter?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}${queryString}`,{});
    }
  }
  getMaterForExcelDownload(data: any, matterName:any, matterId:any): Observable<any> {
    let queryString = this.queryString(matterName, matterId)
    if (data.searchTerm == '') {
      return this.apiService.postBlob(`/search/matter/download?sortBy=${data.sortColumn + ':' + data.sortDirection}${queryString}`,{});
    } else {
      return this.apiService.postBlob(`/search/matter/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}${queryString}`,{});
    }
  }
  
  getDeletedMatters(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/Matter?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/Matter?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getMatterCSV(): Observable<any> {
    return this.apiService.get(`/Matter/bulk/csv/data`);
  }

  getMatterById(data: any): Observable<any> {
    return this.apiService.get(`/Matter/${data}`);
  }

  addNewMatter(data: any): Observable<any> {
    return this.apiService.post(`/Matter`, data);

  }

  updateMatter(clientId: any, data: any): Observable<any> {
    return this.apiService.patch(`/Matter/${clientId}`, data);
  }

  deleteMatter(data: String): Observable<any> {
    return this.apiService.delete(`/Matter/` + data);

  }
  queryString(matterName, matterId):string|any {
    let queryArray = []
    if (matterName) {
      queryArray.push(`matterName=${decodeURI(matterName)}`)
    }
    if (matterId) {
      queryArray.push(`matterId=${decodeURI(matterId)}`)
    }
    let queryString = ""
    if (queryArray.length > 0) {
      queryString = `&${queryArray.join("&")}`
    }
    return queryString
  }
}
