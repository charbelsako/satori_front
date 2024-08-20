import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { HourlyBillingService } from '../../service/hourly-billing.service';

@Component({
  selector: 'app-add-edit-hourly-billing',
  templateUrl: './add-edit-hourly-billing.component.html',
  styleUrls: ['./add-edit-hourly-billing.component.scss'],
  animations: [routerTransition()]
})
export class AddEditHourlyBillingComponent implements OnInit {
  addEditForm: FormGroup;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  @Output() newItemEvent = new EventEmitter()
//   public options: Object = {
//     plugins: [ HtmlEmbed],
//     toolbar: [ 'htmlEmbed'],
// };
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public hourlyBillingService: HourlyBillingService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getHourlyBilling(this.tempId);
      }
    });


    this.addEditForm = fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  getHourlyBilling(tempId: string) {
    this.isLoading = true;
    this.hourlyBillingService.getHourlyBillingById(tempId).subscribe(response => {
      this.addEditForm.patchValue(response);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['data-mangement/hourly-billings']);
    });
  }

  onSubmit() {
    this.hourlyBillingService.addHourlyBillings(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.newItemEvent.emit()
        // this.toastr.success(response.title + ' added!', 'Success');
        //this.router.navigate(['data-mangement/hourly-billings']);
      }
    });
  }

  onUpdate() {
    this.hourlyBillingService.updateHourlyBilling(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['data-mangement/hourly-billings']);
      }
    });
  }

  public onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }
}
