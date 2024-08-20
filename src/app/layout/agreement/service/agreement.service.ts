import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {
  public url: string = environment.backendUrl;
  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAgreements(data: any, filterData: any): Observable<any> {
    // if (data.searchTerm == '') {
    //   return this.apiService.get(`/agreements?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    // } else {
    //   return this.apiService.get(`/agreements?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    // }
    if (data.searchTerm == '') {
      return this.apiService.post(`/agreements/filter?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`, filterData);
    } else {
      return this.apiService.post(`/agreements/filter?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`, filterData);
    }
  }
  getAgreementsForExcel(data: any, filterData: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.postBlob(`/agreements/download-excel?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`, filterData);
    } else {
      return this.apiService.postBlob(`/agreements/download-excel?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`, filterData);
    }
  }
  getAgreementById(arggrementId: any): Observable<any> {
    return this.apiService.get(`/agreements/${arggrementId}`)
  }
  filtersData(): Observable<any> {
    return this.apiService.post(`/agreements/filter/options`)
  }
  filtersDataOption(data: any): Observable<any> {
    return this.apiService.post(`/agreements/filter/options`, data)
  }
  getClientGroup(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/client-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/client-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }
  getClients(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/clients?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/clients?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }
  getClientByGroup(data: any, clientGrpId): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/clients/clientGroup-id/${clientGrpId}`);
    } else {
      return this.apiService.get(`/clients/clientGroup-id/${clientGrpId}?&search=${data.searchTerm}`);
    }
  }

  getMatters(data: any, clientId: string): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/matters?clientId=${clientId}&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else if (data.searchTerm && clientId) {
      return this.apiService.get(`/matters?clientId=${clientId}&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    } else {
      return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getTimeKeepers(data: any): Observable<any> {
    return this.apiService.get(`/timekeepers/timekeeper-id/${data}`);
  }

  saveAttachment(data: any): Observable<any> {
    return this.apiService.post(`/app/file-upload`, data);
  }
  getFileURL(data: any): Observable<any> {
    return this.apiService.post(`/app/access-file`, data);
  }

  addNewAgreement(data: any) {
    return this.apiService.post(`/agreements`, data);
  }
  updateAgreement(id, data: any) {
    return this.apiService.patch(`/agreements/${id}`, data);
  }

  logs(data, id) {
    if (data.searchTerm == '') {
      return this.apiService.get(`/agreements/logs/${id}?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/agreements/logs/${id}?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }

  }
  getAreaOfLaw(data){
    if (data.searchTerm == '') {
      return this.apiService.get(`/area-of-law?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/area-of-law?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getPracticeGroup(data){
    if (data.searchTerm == '') {
      return this.apiService.get(`/practice-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/practice-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getPracticeGroupById(data, id){
    if (data.searchTerm == '') {
      return this.apiService.get(`/practice-group/${id}`);
    } else {
      return this.apiService.get(`/practice-group/${id}?search=${data.searchTerm}`);
    }
  }

}
