import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class JwtService {
    public refreshToken: string = '';

    constructor() {}
    getToken(){

        let accesstoken = localStorage.access_token;
        if(accesstoken){
            return atob(accesstoken);
        }else{
            return false;
        }

    }

    saveTokens(tokens: any) {       
           localStorage.setItem('access_token', btoa(tokens.access.token));
           localStorage.setItem('access_token_expiry', btoa(tokens.access.expires));
           localStorage.setItem('refresh_token', btoa(tokens.refresh.token));
           localStorage.setItem('refresh_token_expiry', btoa(tokens.refresh.expires));
           this.setIsLogin();
       
    }

    savePermissions(permissions:any){
        localStorage.setItem('permissions', JSON.stringify(permissions));
        return true;
    }
    getPermissions(){
        let permissions = JSON.parse(localStorage.getItem('permissions') || '');
        if(permissions){
            return permissions;
        }
    }

    setUserPermissions(permissions:any){
        localStorage.setItem('userPermissions', JSON.stringify(permissions));
        return true;
    }
    
    getUserPermissions(){
        let permissions = JSON.parse(localStorage.getItem('userPermissions') || '');
        if(permissions){
            return permissions;
        }
    }

    checkAccess(key){
        const user = this.getUser();
        if(user.isSuperAdmin){
            return true;
        }
        const permissions = this.getUserPermissions();
        const access = permissions.find((obj) => obj.key === key);
        console.log(key);
        return access.write;
    }


    saveUser(user: any){
        localStorage.setItem('user',JSON.stringify(user));
        return true;
    }

    getUser(){
        let user = JSON.parse(localStorage.getItem('user'));
        if(user){
            return user;
        }
    }
    
    setIsLogin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    
    async destroyToken() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('access_token_expiry');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('refresh_token_expiry');
        localStorage.removeItem('user');
        localStorage.removeItem('userPermissions');
        return true;
    }

    logoutUser() {
        this.destroyToken();
        localStorage.removeItem('isLoggedin');
    }

}
