import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { MatterRoutingModule } from './matter-name-routing.module';
import { MatterComponent } from './components/matter-name/matter-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '@app/shared';
import { NgbdSortableHeader } from '../../shared/directives';
import { MatterService } from './service/matter-name.service';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    MatterComponent,
  ],
  imports: [
    CommonModule,
    MatterRoutingModule,
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
  providers: [NgbdSortableHeader, MatterService]
})
export class MatterNameModule { }
