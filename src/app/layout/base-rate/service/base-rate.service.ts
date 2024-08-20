import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class BaseRateService {
    constructor(private apiService: ApiService) {}

    getBaseRates(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/base-rates?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/base-rates?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addBaseRates(data: any): Observable<any> {
        
        return this.apiService.post(`/base-rates`, data);
    }

    getBaseRateById(data: any): Observable<any> {
        
        return this.apiService.get(`/base-rates/${data}`);
    }
    
    deleteBaseRate(data: any): Observable<any> {
        
        return this.apiService.delete(`/base-rates/${data}`);
    }
    
    updateBaseRate(baseRateId: any, data: any): Observable<any> {
        
        return this.apiService.patch(`/base-rates/${baseRateId}`, data);
    }
}
