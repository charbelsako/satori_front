import { NgSwitch } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection } from '@app/shared/directives';
import { StaffService } from '@app/layout/staff/service/staff.service';
import { routerTransition } from '@app/router.animations';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
interface State {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
    searchTerm: string;
    sortColumn: string;
    sortDirection: SortDirection;
}
@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
    animations: [routerTransition()]
})
export class ActivityComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

    isActivity = true;
    public searchTerm: string = '';
    searchTermUpdate = new Subject<string>();
    sortedColumn!: string;
    sortedDirection!: string;

    public _state: State = {
        page: 1,
        limit: 20,
        totalPages: 1,
        totalResults: 0,
        searchTerm: '',
        sortColumn: 'createdAt',
        sortDirection: 'desc'
    };
    promotions: any = [];
    isLoading: boolean = false;
    constructor(
        public router: Router,
        public staffService: StaffService,
        private cdr: ChangeDetectorRef,
        // public toastr: ToastrService
    ) {
        this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getAllPromotions(this._state);
            });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllPromotions(this._state);
    }

    getAllPromotions(state: State) {
        this.staffService.getActivity(state).subscribe(
            response => {
                this.promotions = response.results;
                this.isLoading = false;
                if (this.promotions.length == 0) {
                    this.isActivity = false;
                } else {
                    this.isActivity = true;
                }
                this.cdr.detectChanges();
                this.setState(response);
            }
        );
    }

    refreshPromotions() {
        this.getAllPromotions(this._state);
    }

    setState(response: any) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
        this.cdr.detectChanges();
    }

    view(request: any) {
        console.log(request.url);
        // this.router.navigate(['roles'])
        if (request.url === 'agreements') {
            this.router.navigate(['dashboard/search/view-agreement/', request.refId]);
        } else if (request.url == 'roles') {
            this.router.navigate(['roles/view-role/', request.refId]);
        } else if (request.url == 'templates') {
            this.router.navigate(['notifications/view-notification', request.refId]);
        } else if (request.url == 'staffs') {
            this.router.navigate(['employees/view-employee/', request.refId]);
        } else if (request.url == 'timekeepers') {
            this.router.navigate(['time-keepers/', request.refId]);
        } else if (request.url == 'timekeepers') {
            this.router.navigate(['time-keepers/', request.refId]);
        }else if (request.url == 'billingcurrencys') {
            this.router.navigate(['data-mangement/billingcurrencies/']);
        } else if (request.url == 'attachmentTypes') {
            this.router.navigate(['data-mangement/attachmentTypes/']);
        } else if (request.url == 'areaOfLaws') {
            this.router.navigate(['data-mangement/area-of-laws/']);
        }else if (request.url == 'practiceGroups') {
            this.router.navigate(['data-mangement/practice-groups']);
        }else if (request.url == 'hourlyBillings') {
            this.router.navigate(['data-mangement/hourly-billings']);
        }else if (request.url == 'billingFrequencys') {
            this.router.navigate(['data-mangement/billing-frequencies']);
        }else if (request.url == 'baseRates') {
            this.router.navigate(['data-mangement/base-rates']);
        }else if (request.url == 'billingMethods') {
            this.router.navigate(['data-mangement/billing-methods']);
        }else if (request.url == 'billingMethods') {
            this.router.navigate(['data-mangement/billing-methods']);
        }else if (request.url == 'payorTypes') {
            this.router.navigate(['data-mangement/payor-types']);
        }else if (request.url == 'sicCodes') {
            this.router.navigate(['data-mangement/sic-codes']);
        }
    }

}
