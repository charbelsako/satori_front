import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { JwtService } from '@app/shared/services/jwt/jwt.service';
import { RoleService } from '../../service/role.service';

@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.scss'],
  animations: [routerTransition()]
})
export class AddEditRoleComponent implements OnInit {
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
  isSuperAdmin: boolean;
  welcomeScreen: string | any = 'Dashboard';
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
    this.user = this.jwtService.getUser();
    this.isSuperAdmin = this.user.isSuperAdmin;
    this.permissionsStatus = [];
    this.webModules = this.jwtService.getPermissions();
    if(this.editForm && this.roleId){
      this.getRole(this.roleId);
    }else {
      this.createNewForm();
    }
  }

  createNewForm() {
    this.isLoading = true;
    this.webModules.map(x => {
      let data = {
          name: x.name,
          key: x.key,
          read:true,
          write:true,
          rateMiner:false,
          dealMapper:false,
        }
      this.permissionsStatus.push(data);
    });
      this.isLoading = false;
      // console.log(this.webModules);
      console.log('permission status', this.permissionsStatus);
    }

  getRole(roleId) {
    this.isLoading = true;
    this.rolesService.getRoleById(roleId).subscribe(res => {
      this.permissionsStatus = res.permission;
      this.roleName = res.name;
      this.welcomeScreen = res.welcomeScreen
      this.isLoading = false;
    },(error) => {
        this.isLoading = false;
        this.router.navigate(['/roles']);
      }
    );
  }

  onUpdate() {
    const data = {
      name: this.roleName,
      permission: this.permissionsStatus,
      welcomeScreen: this.welcomeScreen
    };
    this.rolesService.updateRole(this.roleId, data).subscribe(response => {
      // this.toastr.success(response.name + ' updated', 'Success');
      this.router.navigate(['/roles']);
    });
  }

  onSubmit() {
    const data = {
      name: this.roleName,
      permission: this.permissionsStatus,
      welcomeScreen: this.welcomeScreen
    };
    this.rolesService.addNewRole(data).subscribe(response => {
      // this.toastr.success(response.name + ' added!', 'Success');
      this.router.navigate(['/roles']);
    });
  }

  checkSubmit() {
    if (this.editForm) {
      this.onUpdate();
    } else {
      this.onSubmit();
    }
  }

  updatePermissionSet(index: number, permission: string, value: boolean){
    const item = this.permissionsStatus[index];
    item[permission] = value;
    if (permission === 'write' && value) {
      item.read = true;
      item[this.user.profile] = true
    }
    if (permission === 'read' && !value) {
      item.write = false;
      item[this.user.profile] = false
    }
  }

  updateProfilePermissionSet(index: number, permission: string, value: boolean){
    this.permissionsStatus[index][permission] = value;
    if (permission === 'rateMiner') {
      this.updatePermissionSet(index, 'read', value);
    }
    if (permission === 'dealMapper') {
      this.updatePermissionSet(index, 'read', value);
    }
  }

  getObjectKeys(obj: object) {
    return Object.keys(obj);
  }

}
