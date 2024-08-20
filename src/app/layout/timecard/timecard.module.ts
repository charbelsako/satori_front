import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '@app/shared';
import { NgxMaskModule } from 'ngx-mask';
import { TimeCardComponent } from './components/timecard/timecard.component';
import { TimeCardRoutingModule } from './timecard-routing.module';
import { TimeCardService } from './service/timecard.service';
import { TimecardDetailsComponent } from './components/timecard-details/timecard-details.component';
import { NgbdSortableHeader } from './directives';


@NgModule({
  declarations: [
    TimeCardComponent,
    TimecardDetailsComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    TimeCardRoutingModule,
    ReactiveFormsModule, 
    PageHeaderModule,
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbPaginationModule,
		NgIf,
    NgxMaskModule.forRoot(),
  ],
  providers: [NgbdSortableHeader, TimeCardService]
})
export class TimeCardModule { }
