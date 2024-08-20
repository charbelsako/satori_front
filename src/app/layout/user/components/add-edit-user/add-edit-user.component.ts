import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '@app/layout/role/service/role.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  public addEditForm: FormGroup;
  roles: any = [];
  userId: any;
  editForm = false;
  isLoading: boolean = false;
  editData: any = [];
  submitted = false;
  constructor(
    public route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public router: Router,
    public fb: FormBuilder,
    public rolesServie: RoleService,
    public usersService: UserService,
    // public toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      if (params.userId !== '' && params.userId != null) {
        this.userId = params.userId;
        this.editForm = true;
        this.getUser(this.userId);
      }
    });

    this.addEditForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.rolesServie.getAllRoles().subscribe(
      response => {
        this.roles = response.results;
      }
    );
  }
  submitForm() {
    if (!this.addEditForm.valid) {
      this.submitted = true;
      return;
    }
    this.usersService.addNewUser(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.name + ' added!', 'Success');
        this.router.navigate(['/users']);
      }
    });
  }

  submitUpdateForm() {
    if (!this.addEditForm.valid) {
      this.submitted = true;
      return;
    }
    if (this.addEditForm.value.password == null || this.addEditForm.value.password == '') {
      this.editData = {
        name: this.addEditForm.value.name,
        email: this.addEditForm.value.email,
        role: this.addEditForm.value.role
      }
    } else {
      if (this.addEditForm.value.phone == null || this.addEditForm.value.phone == '') {
        this.editData = {
          name: this.addEditForm.value.name,
          email: this.addEditForm.value.email,
          role: this.addEditForm.value.role,
          password: this.addEditForm.value.password,
        }
      } else {
        this.editData = this.addEditForm.value;
      }
    }
    this.usersService.updateUser(this.userId, this.editData).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.router.navigate(['/users']);
      }
    });
  }
  getUser(userId: string) {
    this.isLoading = true;
    this.usersService.getUserById(userId).subscribe(response => {
      this.addEditForm.patchValue(response);
      this.addEditForm.patchValue({ role: response.role });
      this.isLoading = false;
      this.cdr.detectChanges();
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/users']);
    });
  }

}
