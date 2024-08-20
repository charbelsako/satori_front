import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { JwtService } from '../jwt/jwt.service';
@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(
        private http: HttpClient,
        private jwtService: JwtService,
        // private toastr: ToastrService,
        private router: Router
    ) { }

    sendError(err: string) {
        // this.toastr.error(err, 'Error !');
    }

    formatErrors(error: any) {
        let errorText = '';
        if (error.error && error.error.message) {
            errorText = error.error.message;
        } else if (error.statusText === 'Unknown Error' || error.statusText === 'Not Found') {
            errorText = 'Something went wrong try again';
        }
        if (error.status === 401) {
            this.jwtService.logoutUser();
            this.router.navigate(['auth/login'], { queryParams: { return_url: window.location.pathname } });
        }
        this.sendError(errorText);
        return throwError(error.error);
    }
    private setHeaders(headers: any = {}): HttpHeaders {
        return new HttpHeaders(headers);
    }

    get(path: string, headers: object = {}): Observable<any> {
        // this.checkToken();
        return this.http
            .get(`${environment.backendUrl}${path}`, { headers: this.setHeaders(headers) })
            .pipe(catchError(err => this.formatErrors(err)));
    }
    
    put(path: string, body: object = {}, headers: object = {}): Observable<any> {
        // this.checkToken();
        return this.http
            .put(`${environment.backendUrl}${path}`, body, { headers: this.setHeaders(headers) })
            .pipe(catchError(err => this.formatErrors(err)));
    }

    post(path: string, body: object = {}): Observable<any> {
        // this.checkToken();
        return this.http
            .post(`${environment.backendUrl}${path}`, body)
            .pipe(catchError(err => this.formatErrors(err)));
    }
    getBlob(path: string, headers: object = {}): Observable<any> {
        // this.checkToken();
        return this.http
            .get(`${environment.backendUrl}${path}`, { headers: this.setHeaders(headers), responseType: 'blob' })
            .pipe(catchError(err => this.formatErrors(err)));
    }
    postBlob(path: string, body: object = {}): Observable<any> {
        // this.checkToken();
        return this.http
            .post(`${environment.backendUrl}${path}`, body, { responseType: 'blob' })
            .pipe(catchError(err => this.formatErrors(err)));
    }


    patch(path: string, body: object = {}): Observable<any> {
        // this.checkToken();
        return this.http
            .patch(`${environment.backendUrl}${path}`, body)
            .pipe(catchError(err => this.formatErrors(err)));
    }

    delete(path: string): Observable<any> {
        // this.checkToken();
        return this.http
            .delete(`${environment.backendUrl}${path}`)
            .pipe(catchError(err => this.formatErrors(err)));
    }

    checkToken() {

        let tokenExpiryTime = atob(localStorage.getItem('access_token_expiry') || '');
        let refreshToken = atob(localStorage.getItem('refresh_token') || '');
        let currentTime = new Date().toISOString();
        if (refreshToken != '' && tokenExpiryTime != '' && tokenExpiryTime < currentTime) {

            let data = {
                'refreshToken': refreshToken,
                'type': 'admin'
            }
            this.refreshToken('/auth/refresh-tokens', data).subscribe(response => {
                this.jwtService.saveTokens(response);
            }, (error) => {
                // this.jwtService.logoutUser();
                // this.router.navigate(['/auth/login']);     
            });

        }

    }

    refreshToken(path: string, body: object = {}): Observable<any> {
        return this.http
            .post(`${environment.backendUrl}${path}`, body)
            .pipe(catchError(err => this.formatErrors(err)));
    }
}
