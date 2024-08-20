import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string = environment.backendUrl;
  constructor(private http: HttpClient, private apiService: ApiService) { }


  getUsers(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/users?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/users?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }
  
  getDeletedUsers(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/users?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
    } else {
      return this.apiService.get(`/users?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getUserCSV(): Observable<any> {
    return this.apiService.get(`/users/bulk/csv/data`);
  }

  getUserById(data: any): Observable<any> {
    return this.apiService.get(`/users/${data}`);
  }

  addNewUser(data: any): Observable<any> {
    return this.apiService.post(`/users`, data);

  }

  updateUser(userId: any, data: any): Observable<any> {
    return this.apiService.patch(`/users/${userId}`, data);
  }

  deleteUser(data: String): Observable<any> {
    return this.apiService.delete(`/users/` + data);

  }
}
