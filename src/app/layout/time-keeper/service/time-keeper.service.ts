import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeKeeperService {
  public url: string = environment.backendUrl;
  constructor(private http: HttpClient, private apiService: ApiService) { }

  getTimeKeepers(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/timekeepers?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/timekeepers?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }
  getTimeKeeperForExcelDownload(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.getBlob(`/timekeepers/download?sortBy=${data.sortColumn + ':' + data.sortDirection}`);
    } else {
      return this.apiService.getBlob(`/timekeepers/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
    }
  }
  getDeletedTimeKeepers(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/timekeepers?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/timekeepers?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getTimeKeeperCSV(): Observable<any> {
    return this.apiService.get(`/timekeepers/bulk/csv/data`);
  }

  getTimeKeeperById(data: any): Observable<any> {
    return this.apiService.get(`/timekeepers/${data}`);
  }

  addNewTimeKeeper(data: any): Observable<any> {
    return this.apiService.post(`/timekeepers`, data);

  }

  updateTimeKeeper(clientId: any, data: any): Observable<any> {
    return this.apiService.patch(`/timekeepers/${clientId}`, data);
  }

  deleteTimeKeeper(data: String): Observable<any> {
    return this.apiService.delete(`/timekeepers/` + data);

  }
}
