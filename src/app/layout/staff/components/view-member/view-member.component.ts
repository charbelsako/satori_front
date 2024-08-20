import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StaffService } from '../../service/staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { JwtService } from '@app/shared/services';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss'],
  animations: [routerTransition()]
})
export class ViewMemberComponent implements OnInit {
  isLoading: boolean;
  userDetails: any;
  userId: any;
  isEditAccess: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public staffsService: StaffService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    public router: Router
  ) { 
    this.route.params.subscribe(params => {
      if (params.userId !== '' && params.userId != null) {
        this.userId = params.userId;
        this.getStaff(this.userId);
      }
    });
  }

  ngOnInit(): void {
    this.isEditAccess = this.jwtService.checkAccess('employees');
  }

  getStaff(userId: string) {
    this.isLoading = true;
    this.staffsService.getStaffById(userId).subscribe(response => {
      this.userDetails = response;
      console.log(this.userDetails);
      this.isLoading = false;
      this.cdr.detectChanges();
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/employees']);
    });
  }

  editUser(id: string) {
    this.router.navigate(['/employees/edit-employee/' + id]);
  }
}
