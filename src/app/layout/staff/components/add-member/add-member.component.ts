import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '@app/layout/role/service/role.service';
import { routerTransition } from '@app/router.animations';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from '../../service/staff.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
  animations: [routerTransition()]
})
export class AddMemberComponent implements OnInit {
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
    public staffsService: StaffService,
    private toastrService: ToastrService

  ) {
    this.route.params.subscribe(params => {
      if (params.userId !== '' && params.userId != null) {
        this.userId = params.userId;
        this.editForm = true;
        this.getStaff(this.userId);
      }
    });
    if (this.editForm) {
      this.addEditForm = this.fb.group({
        name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        email: [null, [Validators.required, Validators.email]],
        role: [null, [Validators.required]],
        profile: [''],
        password: [null, [
          Validators.minLength(8),
          Validators.maxLength(14),
          this.regexValidator(/^(?=.*\d)(?=.*[@$!%*#~^\-+=])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/, {'mainValidation': true}),
          this.regexValidator(/^(?=.*\d).{1,}$/, {'numberValidation': true}),
          this.regexValidator(/^(?=.*[@$!%*#~^\-+=]).{1,}$/, {'specialChar': true}),
          this.regexValidator(/^(?=.*[a-z]).{1,}$/, {'smallAlpha': true}),
          this.regexValidator(/^(?=.*[A-Z]).{1,}$/, {'capitalAlpha': true})
        ]]
      });
    } else {
      this.addEditForm = this.fb.group({
        name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        email: ['', [Validators.required, Validators.email]],
        role: ['', [Validators.required]],
        profile: [''],
        password: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
          this.regexValidator(/^(?=.*\d)(?=.*[@$!%*#~^\-+=])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/, {'mainValidation': true}),
          this.regexValidator(/^(?=.*\d).{1,}$/, {'numberValidation': true}),
          this.regexValidator(/^(?=.*[@$!%*#~^\-+=]).{1,}$/, {'specialChar': true}),
          this.regexValidator(/^(?=.*[a-z]).{1,}$/, {'smallAlpha': true}),
          this.regexValidator(/^(?=.*[A-Z]).{1,}$/, {'capitalAlpha': true})
        ]],
      });
    }
  }
  regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    }
  }
  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    this.rolesServie.getAllRoles().subscribe(
      response => {
        this.roles = response.results.filter(role => role.isActive == true);
        this.cdr.detectChanges();
      }
    );
  }
  submitForm() {
    if (!this.addEditForm.valid) {
      this.submitted = true;
      return;
    }
    this.staffsService.addMember(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.toastrService.success(response.name + ' added!', 'Success');
        this.router.navigate(['/employees']);
      }
    },(error)=>{
      this.toastrService.error(error.message);
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
      this.editData = this.addEditForm.value;
    }
    this.staffsService.updateMember(this.userId, this.editData).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.toastrService.success(response.name + ' Updated!', 'Success');
        this.router.navigate(['/employees']);
      }
    },(error)=>{
      this.toastrService.error(error.message);
    });
  }

  getStaff(userId: string) {
    this.isLoading = true;
    this.staffsService.getStaffById(userId).subscribe(response => {
      this.addEditForm.patchValue(response);
      this.addEditForm.patchValue({ role: response.role.id || response.role });
      this.isLoading = false;
      this.cdr.detectChanges();
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/employees']);
    });
  }
}
