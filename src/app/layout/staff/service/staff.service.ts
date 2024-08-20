import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class StaffService {
    public url: string = environment.backendUrl;
    constructor(private http: HttpClient, private apiService: ApiService) {}

    getStaffs(data: any): Observable<any> {
        if(data.searchTerm == ''){
            return this.apiService.get(`/staffs?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/staffs?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getSearchStaffs(data: any, responsibleBillingManagerId): Observable<any> {
        if(data.searchTerm == ''){
            return this.apiService.post(`/staffs/search?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`, {responsibleBillingManagerId});
            
        }else{
            return this.apiService.post(`/staffs/search?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`, {responsibleBillingManagerId});
        }
    }

    addMember(data: any): Observable<any> {
        return this.apiService.post(`/staffs`, data);
    }

    updateMember(id: string, data: any): Observable<any> {
        return this.apiService.patch(`/staffs/${id}`, data);
    }

    getStaffById(data: any): Observable<any> {
        return this.apiService.get(`/staffs/` + data);
    }

    deleteUser(data: any): Observable<any> {
        return this.apiService.delete(`/staffs/` + data);
    }
    getActivity(data: any): Observable<any> {
        if(data.searchTerm == ''){
            return this.apiService.get(`/staffs/activity/all?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/staffs/activity/all?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }

}
