import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import { ApiService } from '../api/api.service';
@Injectable()
export class AuthService {
    public url: string = environment.backendUrl;
    public loggedIn = new ReplaySubject<boolean>();
    public userData = new ReplaySubject<any>();
    constructor(private apiService: ApiService) {}

    login(data: any): Observable<any> {
        return this.apiService.post('/auth/login', data);
    }
    
    forgotPassword(data: any): Observable<any> {
        return this.apiService.post('/auth/forgot-password', data);
    }

    resetPassword(data: any): Observable<any> {
        return this.apiService.post('/auth/reset-password', data);
    }

    refreshToken(data: any): Observable<any> {
        return this.apiService.post('/auth/refresh-tokens', data);
    }
    
    /**
     * Getter method for getting Logged In status
     */
    getLoggedInStatus() {
        return this.loggedIn.asObservable();
    }

    /**
     * Setter method to set Logged In status
     */
    setLoggedInStatus(value: boolean) {
        this.loggedIn.next(value);
    }

    /**
     * Getter method for getting Logged In status
     */
    getUserData(): Observable<any> {
        return this.userData.asObservable();
    }

    /**
     * Setter method to set Logged In status
     */
    setUserData(value: any) {
        this.userData.next(value);
    }
}
