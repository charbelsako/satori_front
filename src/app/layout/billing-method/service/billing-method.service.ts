import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class BillingMethodService {
    constructor(private apiService: ApiService) {}

    getBillingMethods(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/billing-method?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/billing-method?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addBillingMethod(data: any): Observable<any> {
        return this.apiService.post(`/billing-method`, data);
    }

    getBillingMethodById(data: any): Observable<any> {
        
        return this.apiService.get(`/billing-method/${data}`);
    }
    
    deleteBillingMethod(data: any): Observable<any> {
        
        return this.apiService.delete(`/billing-method/${data}`);
    }
    
    updateBillingMethod(billingMethodId: any, data: any): Observable<any> {
        return this.apiService.patch(`/billing-method/${billingMethodId}`, data);
    }
}
