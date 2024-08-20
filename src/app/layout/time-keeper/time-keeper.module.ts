import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { TimeKeeperRoutingModule } from './time-keeper-routing.module';
import { TimeKeeperComponent } from './components/time-keeper/time-keeper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '@app/shared';
import { TimeKeeperService } from './service/time-keeper.service';
import { NgxMaskModule } from 'ngx-mask';
import { NgbdSortableHeader } from './directives';


@NgModule({
  declarations: [
    TimeKeeperComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    TimeKeeperRoutingModule,
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
  providers: [NgbdSortableHeader, TimeKeeperService]
})
export class TimeKeeperModule { }
