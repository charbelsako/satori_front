import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class PayorTypeService {
    constructor(private apiService: ApiService) {}

    getPayorTypes(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/payor-type?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/payor-type?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addPayorType(data: any): Observable<any> {
        return this.apiService.post(`/payor-type`, data);
    }

    getPayorTypeById(data: any): Observable<any> {
        
        return this.apiService.get(`/payor-type/${data}`);
    }
    
    deletePayorType(data: any): Observable<any> {
        
        return this.apiService.delete(`/payor-type/${data}`);
    }
    
    updatePayorType(payorTypeId: any, data: any): Observable<any> {
        return this.apiService.patch(`/payor-type/${payorTypeId}`, data);
    }
}
