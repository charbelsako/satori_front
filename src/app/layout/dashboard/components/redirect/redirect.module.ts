import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '@app/shared';
import { NgxMaskModule } from 'ngx-mask';
import { RedirectComponent } from './redirect.component';
import { RoleService } from '@app/layout/role/service/role.service';
import { RedirectRoutingModule } from './redirect-routing.module';


@NgModule({
  declarations: [
    RedirectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    PageHeaderModule,
    RedirectRoutingModule,
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbPaginationModule,
		NgIf,
    NgxMaskModule.forRoot(),
  ],
  providers: [RoleService]
})
export class RedirectModule { }

