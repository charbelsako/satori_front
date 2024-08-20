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
  filterQuery(filters): any {
    let obj = ''
    if (filters.matterName) {
      obj += '&matterName=' + filters.matterName
    }
    if (filters.matterId) {
      obj += '&matterId=' + filters.matterId
    }
    if (filters.clientId) {
      obj += '&clientId=' + filters.clientId
    }
    if (filters.clientName) {
      obj += '&clientName=' + filters.clientName
    }
    if (filters.status) {
      obj += '&status=' + filters.status
    }
    if (filters.openDate) {
      obj += '&openDate=' + filters.openDate
    }
    if (filters.closeDate) {
      obj += '&closeDate=' + filters.closeDate
    }
    if (filters.lastInvoiceDate) {
      obj += '&lastInvoiceDate=' + filters.lastInvoiceDate
    }
    if (filters.postDate) {
      obj += '&postDate=' + filters.postDate
    }
    if (filters.billTkprName) {
      obj += '&billTkprName=' + filters.billTkprName
    }
    if (filters.rspTkprName) {
      obj += '&rspTkprName=' + filters.rspTkprName
    }
    return obj
  }
  getMatters(data: any, filters): Observable<any> {
    const filter = this.filterQuery(filters);
    if (data.searchTerm == '') {
      return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}${filter}`);
    } else {
      return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}${filter}`);
    }
  }

  getMatterFilteredData(data: any, filters): Observable<any> {
    const filter = this.filterQuery(filters);
    if (data.searchTerm == '') {
      return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}${filter}`);
    } else {
      return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}${filter}`);
    }
  }
  getMaterForExcelDownload(data: any, filters): Observable<any> {
    const filter = this.filterQuery(filters)
    if (data.searchTerm == '') {
      return this.apiService.getBlob(`/matters/download?sortBy=${data.sortColumn + ':' + data.sortDirection}${filter}`);
    } else {
      return this.apiService.getBlob(`/matters/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}${filter}`);
    }
  }

  getDeletedMatters(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/matters?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/matters?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getMatterCSV(): Observable<any> {
    return this.apiService.get(`/matters/bulk/csv/data`);
  }

  getMatterById(data: any): Observable<any> {
    return this.apiService.get(`/matters/${data}`);
  }
  getMatterByIds(data: any): Observable<any> {
    return this.apiService.post(`/matters/matterIds`, { matterIds: data });
  }

  addNewMatter(data: any): Observable<any> {
    return this.apiService.post(`/matters`, data);

  }

  updateMatter(clientId: any, data: any): Observable<any> {
    return this.apiService.patch(`/Matter/${clientId}`, data);
  }

  deleteMatter(data: String): Observable<any> {
    return this.apiService.delete(`/Matter/` + data);

  }

  getMatterRoster(data: any, keyword): Observable<any> {
    return this.apiService.get(`/matterRosters?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&name=${keyword}`);
    // if (data.searchTerm == '') {
    //   return this.apiService.get(`/matterRosters?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    // } else {
    // }
  }

  getMatterByColumn(data: any, column: any){
    return this.apiService.get(`/matters/column/${column}?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
  }

  getClientExceptionData(data: any): Observable<any> {
    return this.apiService.get(`/clients/get/rate/exception/rate/${data}`);
    
  }

  getMatterExceptionData(data: any): Observable<any> {
    return this.apiService.get(`/matters/get/matter/exception/rate/${data}`);
    
  }

  getMatterExceptionLevelData(data: any): Observable<any> {
    return this.apiService.get(`/matters/get/matter/exception/level/${data}`);
    
  }
}
