import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import {Location} from '@angular/common';
import { AuthService } from '../services/auth/auth.service';
import { JwtService } from '../services/jwt/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( 
        private authService: AuthService,
        private location: Location,
        private jwtService: JwtService,
        private router: Router
        ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let url: string = state.url;
        if (localStorage.getItem('access_token')) {
            let user = this.jwtService.getUser();
            if(user.isSuperAdmin == true || url.includes('dashboard') || url.includes('matter')){ // 
                return of(true);
            }
            if(this.verifyRole(url)){
                return of(true);
            }else{
                this.location.back();
                return of(false);
            }
        } else {
            this.jwtService.logoutUser();
            this.router.navigate(['auth/login'],{ queryParams: { return_url: window.location.pathname} });
            return of(false);
        }
    }

    verifyRole(url){
        console.log("verify-role");
        const permissions = this.jwtService.getUserPermissions();
        for (let index in permissions) {
            if(url.includes(index) && permissions[index] == true)
             return true;
        }
    }
}
