import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RoleService } from '@app/layout/role/service/role.service';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { JwtService } from '@app/shared/services/jwt/jwt.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;

    @Output() collapsedEvent = new EventEmitter<boolean>();
    isLoading: boolean = false;
    isSuperAdmin: boolean = false;
    user: any = [];
    sideNavitems: any;
    sideItemControls: any;
    userProfile: string = null;

    constructor(
        private translate: TranslateService,
        public router: Router,
        public authService: AuthService,
        public jwtService: JwtService,
        public roleService: RoleService,
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
        this.getRolePermission(this.user.role);
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }

    getRolePermission(roleId) {
        this.isLoading = true;
        this.roleService.getRoleById(roleId).subscribe(response => {
            console.log("response", response);
            this.isSuperAdmin = response.isSuperAdmin;
            if (!this.isSuperAdmin){
                if(this.userProfile === 'rateMiner' || this.userProfile === 'dealMapper') {
                    response.permission = this.filterObjectsWithRateMinerTrue(response.permission, this.userProfile);
                }
                this.sideItemControls = response.permission;
                this.jwtService.setUserPermissions(this.sideItemControls);
            }
            
        });
        this.roleService.getWebModules().subscribe(res => {
            this.jwtService.savePermissions(res);
            this.sideNavitems = res;
        });
        this.isLoading = false;
    }

     filterObjectsWithRateMinerTrue(inputArray, profile) {
        if(profile == 'rateMiner'){
            const newArray = inputArray.filter(obj => obj.rateMiner === true);
            return newArray;
        }
        else if(profile == 'dealMapper'){
            const newArray = inputArray.filter(obj => obj.dealMapper === true);
            return newArray;
        }
      }

    checkAccess(key){
        if(this.isSuperAdmin){
            return true;
        }
        
        const access = this.sideItemControls?.find((obj) => obj.key === key);
        if(access){
            return access.read;
        }else{
            return false;
        }
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
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

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        this.jwtService.logoutUser();
        this.authService.setLoggedInStatus(false);
        this.router.navigate(['auth/login']);
    }

    checkProfileNavName(item){
        if(item.key === "matters" && this.userProfile === 'rateMiner'){
            return "Search Records";
        }else{
            return item.name;
        }
    }

}



