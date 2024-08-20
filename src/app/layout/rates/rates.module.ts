import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '@app/shared';
import { NgxMaskModule } from 'ngx-mask';
import { RatesComponent } from './components/rates/rates.component';
import { RatesRoutingModule } from './rates-routing.module';
import { RateService } from './service/rates.service';
import { NgbdSortableHeader } from './directives';


@NgModule({
  declarations: [
    RatesComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    RatesRoutingModule,
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
  providers: [NgbdSortableHeader, RateService]
})
export class RatesModule { }
