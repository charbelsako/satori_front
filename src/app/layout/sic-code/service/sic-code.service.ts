import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class SICCodeService {
    constructor(private apiService: ApiService) {}

    getSICCodes(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/sic-code?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/sic-code?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addSICCode(data: any): Observable<any> {
        return this.apiService.post(`/sic-code`, data);
    }

    getSICCodeById(data: any): Observable<any> {
        
        return this.apiService.get(`/sic-code/${data}`);
    }
    
    deleteSICCode(data: any): Observable<any> {
        
        return this.apiService.delete(`/sic-code/${data}`);
    }
    
    updateSICCode(sicCodeId: any, data: any): Observable<any> {
        return this.apiService.patch(`/sic-code/${sicCodeId}`, data);
    }
}
