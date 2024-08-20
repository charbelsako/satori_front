import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { TimeCardService } from '../../service/timecard.service';

@Component({
  selector: 'app-timecard-details',
  templateUrl: './timecard-details.component.html',
  styleUrls: ['./timecard-details.component.scss'],
  animations: [routerTransition()]
})
export class TimecardDetailsComponent implements OnInit {
  isLoading: boolean = false;
  timecardId: any;
  data: any = [];
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public timeCardService: TimeCardService,
    private cdr: ChangeDetectorRef,
  ) { 
    this.route.params.subscribe(params => {
      if (params.timecardId !== '' && params.timecardId != null) {
        this.timecardId = params.timecardId;
        this.getTimeCardById();
      }
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getTimeCardById();
  }

  getTimeCardById() {
    this.isLoading = true;
    this.timeCardService.getTimeCardById(this.timecardId).subscribe(response => {
      this.data = response;
      this.isLoading = false;
      this.cdr.detectChanges();
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/timecards']);
    });
  }
}
