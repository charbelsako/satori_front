import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class BillingcurrencyService {
    constructor(private apiService: ApiService) {}

    getBillingcurrencys(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/billingcurrency?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/billingcurrency?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addBillingcurrencys(data: any): Observable<any> {
        
        return this.apiService.post(`/billingcurrency`, data);
    }

    getBillingcurrencyById(data: any): Observable<any> {
        
        return this.apiService.get(`/billingcurrency/${data}`);
    }
    
    deleteBillingcurrency(data: any): Observable<any> {
        
        return this.apiService.delete(`/billingcurrency/${data}`);
    }
    
    updateBillingcurrency(billingcurrencyId: any, data: any): Observable<any> {
        
        return this.apiService.patch(`/billingcurrency/${billingcurrencyId}`, data);
    }
}
