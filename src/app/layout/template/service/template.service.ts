import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class TemplateService {
    constructor(private apiService: ApiService) {}

    getTemplates(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/templates?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/templates?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addTemplates(data: any): Observable<any> {
        
        return this.apiService.post(`/templates`, data);
    }

    getTemplateById(data: any): Observable<any> {
        
        return this.apiService.get(`/templates/${data}`);
    }
    
    deleteTemplate(data: any): Observable<any> {
        
        return this.apiService.delete(`/templates/${data}`);
    }
    
    updateTemplate(templateId: any, data: any): Observable<any> {
        
        return this.apiService.patch(`/templates/${templateId}`, data);
    }
}
