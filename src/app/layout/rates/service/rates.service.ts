import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  public url: string = environment.backendUrl;
  constructor(private http: HttpClient, private apiService: ApiService) { }

  getRates(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/rates?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/rates?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }
  getRateForExcelDownload(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.getBlob(`/rates/download?sortBy=${data.sortColumn + ':' + data.sortDirection}`);
    } else {
      return this.apiService.getBlob(`/rates/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
    }
  }
  getDeletedRates(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/rates?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/rates?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getRateCSV(): Observable<any> {
    return this.apiService.get(`/rates/bulk/csv/data`);
  }

  getRateById(data: any): Observable<any> {
    return this.apiService.get(`/rates/${data}`);
  }

  addNewRate(data: any): Observable<any> {
    return this.apiService.post(`/rates`, data);

  }

  updateRate(clientId: any, data: any): Observable<any> {
    return this.apiService.patch(`/rates/${clientId}`, data);
  }

  deleteRate(data: String): Observable<any> {
    return this.apiService.delete(`/rates/` + data);

  }
}
