import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class PracticeGroupService {
    constructor(private apiService: ApiService) {}

    getPracticeGroups(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/practice-group?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/practice-group?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addPracticeGroups(data: any): Observable<any> {
        
        return this.apiService.post(`/practice-group`, data);
    }

    getPracticeGroupById(data: any): Observable<any> {
        
        return this.apiService.get(`/practice-group/${data}`);
    }
    
    deletePracticeGroup(data: any): Observable<any> {
        
        return this.apiService.delete(`/practice-group/${data}`);
    }
    
    updatePracticeGroup(practiceGroupId: any, data: any): Observable<any> {
        
        return this.apiService.patch(`/practice-group/${practiceGroupId}`, data);
    }
}
