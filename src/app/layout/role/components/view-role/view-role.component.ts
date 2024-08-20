import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { JwtService } from '@app/shared/services/jwt/jwt.service';
import { RoleService } from '../../service/role.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.scss'],
  animations: [routerTransition()]
})
export class ViewRoleComponent implements OnInit {
  roleName: string | any;
  permissions: any;
  roleId = '';
  editForm: boolean = false;
  permissionsStatus: FormGroup | any;
  accessGroup: FormGroup | any;
  isLoading: boolean = false;
  modulesPermissions = new FormArray([]);
  webModules: any = [];
  user: any;
  constructor(
    private fb: FormBuilder,
    private rolesService: RoleService,
    private router: Router,
    private route: ActivatedRoute,
    public jwtService: JwtService
    // public toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      if (params.roleId !== '' && params.roleId != null) {
        this.roleId = params.roleId;
        this.editForm = true;
      }
    });
  }

  ngOnInit(): void {
    this.getRole(this.roleId);
  }

  getRole(roleId) {
    this.isLoading = true;
    this.rolesService.getRoleById(roleId).subscribe(res => {
      this.permissionsStatus = res.permission;
      this.roleName = res.name;
      this.isLoading = false;
    },(error) => {
        this.isLoading = false;
        this.router.navigate(['/roles']);
      }
    );
  }

}
