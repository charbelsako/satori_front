import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class AreaOfLawService {
    constructor(private apiService: ApiService) {}

    getAreaOfLaws(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/area-of-law?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/area-of-law?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addAreaOfLaws(data: any): Observable<any> {
        
        return this.apiService.post(`/area-of-law`, data);
    }

    getAreaOfLawById(data: any): Observable<any> {
        
        return this.apiService.get(`/area-of-law/${data}`);
    }
    
    deleteAreaOfLaw(data: any): Observable<any> {
        
        return this.apiService.delete(`/area-of-law/${data}`);
    }
    
    updateAreaOfLaw(areaOfLawId: any, data: any): Observable<any> {
        
        return this.apiService.patch(`/area-of-law/${areaOfLawId}`, data);
    }
}
