import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import {
    AlertComponent,
    ButtonsComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    RatingComponent,
    TimepickerComponent,
    TooltipComponent
} from './components';

@NgModule({
    imports: [CommonModule, BsComponentRoutingModule, FormsModule, ReactiveFormsModule, NgbModule, PageHeaderModule],
    declarations: [
        BsComponentComponent,
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent
    ]
})
export class BsComponentModule {}
