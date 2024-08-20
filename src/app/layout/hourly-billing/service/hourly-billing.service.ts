import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class HourlyBillingService {
    constructor(private apiService: ApiService) {}

    getHourlyBillings(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/hourly-billings?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/hourly-billings?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addHourlyBillings(data: any): Observable<any> {
        
        return this.apiService.post(`/hourly-billings`, data);
    }

    getHourlyBillingById(data: any): Observable<any> {
        
        return this.apiService.get(`/hourly-billings/${data}`);
    }
    
    deleteHourlyBilling(data: any): Observable<any> {
        
        return this.apiService.delete(`/hourly-billings/${data}`);
    }
    
    updateHourlyBilling(hourlyBillingId: any, data: any): Observable<any> {
        
        return this.apiService.patch(`/hourly-billings/${hourlyBillingId}`, data);
    }
}
