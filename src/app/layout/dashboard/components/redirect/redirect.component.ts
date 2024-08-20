import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '@app/layout/role/service/role.service';
import { routerTransition } from '@app/router.animations';
import { JwtService } from '@app/shared/services';

@Component({
    selector: 'app-redirect',
    templateUrl: './redirect.component.html',
    styleUrls: ['./redirect.component.scss'],
    animations: [routerTransition()]
})
export class RedirectComponent implements OnInit {
    userData:any;
    constructor(
        public roleService: RoleService,
        public jwtService: JwtService,
        public router: Router,
        private route: ActivatedRoute
      ) {
      }

    ngOnInit() {
        this.userData = this.jwtService.getUser();
        if(this.userData) {
            this.roleService.getRoleById(this.userData.role).subscribe(response => {
                const returnUrl = response.link || '/dashboard';
                this.router.navigate([returnUrl]);
            });
        } else {
            this.router.navigate(['auth/login']);
        }
    }
}
