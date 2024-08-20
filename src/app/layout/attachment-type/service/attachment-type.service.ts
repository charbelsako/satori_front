import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class AttachmentTypeService {
    constructor(private apiService: ApiService) {}

    getAttachmentTypes(data: any): Observable<any> {

        if(data.searchTerm == ''){
            return this.apiService.get(`/attachment-type?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}`);
            
        }else{
            return this.apiService.get(`/attachment-type?sortBy=${data.sortColumn+':'+data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }  
        
    }
    
    addAttachmentType(data: any): Observable<any> {
        return this.apiService.post(`/attachment-type`, data);
    }

    getAttachmentTypeById(data: any): Observable<any> {
        
        return this.apiService.get(`/attachment-type/${data}`);
    }
    
    deleteAttachmentType(data: any): Observable<any> {
        
        return this.apiService.delete(`/attachment-type/${data}`);
    }
    
    updateAttachmentType(attachmentTypeId: any, data: any): Observable<any> {
        return this.apiService.patch(`/attachment-type/${attachmentTypeId}`, data);
    }
}
