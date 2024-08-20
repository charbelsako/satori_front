import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class BillingFrequencyService {
    constructor(private apiService: ApiService) {}

    getBillingFrequencies(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/billing-frequency?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/billing-frequency?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addBillingFrequency(data: any): Observable<any> {
        return this.apiService.post(`/billing-frequency`, data);
    }

    getBillingFrequencyById(data: any): Observable<any> {
        
        return this.apiService.get(`/billing-frequency/${data}`);
    }
    
    deleteBillingFrequency(data: any): Observable<any> {
        
        return this.apiService.delete(`/billing-frequency/${data}`);
    }
    
    updateBillingFrequency(billingFrequencyId: any, data: any): Observable<any> {
        return this.apiService.patch(`/billing-frequency/${billingFrequencyId}`, data);
    }
}
