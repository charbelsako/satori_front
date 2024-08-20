import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  public url: string = environment.backendUrl;
  public activityState = new ReplaySubject<boolean>();
  constructor(private http: HttpClient, private apiService: ApiService) { }


  getRoles(data: any): Observable<any> {
    if (data.searchTerm == '') {
      return this.apiService.get(`/roles?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);

    } else {

      return this.apiService.get(`/roles?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
    }
  }

  getAllRoles(): Observable<any> {
    return this.apiService.get(`/roles?sortBy=createdAt:desc&limit=10&page=1`);
  }

  getWebModules(): Observable<any> {
    return this.apiService.get(`/staffs/get/web/module/all`);
  }
  
  getRoleById(data: any): Observable<any> {
    return this.apiService.get(`/roles/${data}`);
  }

  addNewRole(data: any): Observable<any> {
    return this.apiService.post(`/roles`, data);

  }

  updateRole(roleId: any, data: any): Observable<any> {
    return this.apiService.patch(`/roles/${roleId}`, data);
  }

  deleteRole(data: String): Observable<any> {
    return this.apiService.delete(`/roles/` + data);

  }

  /**
  * Getter method for getting Logged In status
  */
   getActivityState() {
    return this.activityState.asObservable();
  }

  /**
  * Setter method to set Logged In status
  * @param value
  */
  setActivityState(value) {
    this.activityState.next(value);
  }

}
