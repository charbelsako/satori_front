import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeCardService {
  public url: string = environment.backendUrl;
  constructor(private http: HttpClient, private apiService: ApiService) { }

  getTimeCards(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/timecards?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/timecards?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }
  getTimeCardsByMatter(matterId: any): Observable<any> {
      return this.apiService.get(`/timecards?matter=${matterId}`);
  }
  getTimeCardForExcelDownload(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.getBlob(`/timecards/download?sortBy=${data.sortColumn + ':' + data.sortDirection}`);
    } else {
      return this.apiService.getBlob(`/timecards/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
    }
  }
  getDeletedTimeCards(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/timecards?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/timecards?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getTimeCardCSV(): Observable<any> {
    return this.apiService.get(`/timecards/bulk/csv/data`);
  }

  getTimeCardById(data: any): Observable<any> {
    return this.apiService.get(`/timecards/${data}`);
  }

  addNewTimeCard(data: any): Observable<any> {
    return this.apiService.post(`/timecards`, data);

  }

  updateTimeCard(clientId: any, data: any): Observable<any> {
    return this.apiService.patch(`/timecards/${clientId}`, data);
  }

  deleteTimeCard(data: String): Observable<any> {
    return this.apiService.delete(`/timecards/` + data);

  }

  getTimecardClientLevelRate(clientId: any): Observable<any> {
    return this.apiService.get(`/timecards/level-set?client=${clientId}`);
  }

  getTimecardMatterLevelRate(matterNumber: any): Observable<any> {
    return this.apiService.get(`/timecards/level-set?matterNumber=${matterNumber}`);
  }
}
