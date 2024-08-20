import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public url: string = environment.backendUrl;
  constructor(private http: HttpClient, private apiService: ApiService) { }
  
  getClients(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/clients?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/clients?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getClientForExcelDownload(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.getBlob(`/clients/download?sortBy=${data.sortColumn + ':' + data.sortDirection}`);
    } else {
      return this.apiService.getBlob(`/clients/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
    }
  }
  
  getDeletedClients(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/clients?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/clients?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getClientCSV(): Observable<any> {
    return this.apiService.get(`/clients/bulk/csv/data`);
  }
  

  getClientById(data: any): Observable<any> {
    return this.apiService.get(`/clients/${data}`);
  }

  addNewClient(data: any): Observable<any> {
    return this.apiService.post(`/clients`, data);

  }

  updateClient(clientId: any, data: any): Observable<any> {
    return this.apiService.patch(`/clients/${clientId}`, data);
  }

  deleteClient(data: String): Observable<any> {
    return this.apiService.delete(`/clients/` + data);

  }

  getClientRoster(data: any, keyword): Observable<any> {
    return this.apiService.get(`/clientRosters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&matterNumber=${keyword}`);
    // if (data.searchTerm == '') {
    //   return this.apiService.get(`/clientRosters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    // } else {
    // }
  }
}
