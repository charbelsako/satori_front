import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { JwtService } from '../services/jwt/jwt.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(
        private jwtService: JwtService,
        private authService: AuthService,
        ) {}
    authHeader: any;
    async setUser() {
        
        this.authHeader = this.jwtService.getToken();
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.setUser();
        if (this.authHeader === null) {
            return next.handle(req.clone());
        }
        const clonedReq = req.clone({
            headers: req.headers.set('Authorization', `bearer ${this.authHeader}`),
        });
        return next.handle(clonedReq);
    }
}
