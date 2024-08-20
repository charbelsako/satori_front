import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { JwtService } from '@app/shared/services/jwt/jwt.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    userData: any = [];
    user: any;
    userProfile: any;

    constructor(
        private translate: TranslateService, 
        public router: Router,
        public authService: AuthService,
        public jwtService: JwtService
        ) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.user = this.jwtService.getUser();
        this.userProfile = this.user.profile;
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.jwtService.logoutUser();
        this.authService.setLoggedInStatus(false);
        this.router.navigate(['auth/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
