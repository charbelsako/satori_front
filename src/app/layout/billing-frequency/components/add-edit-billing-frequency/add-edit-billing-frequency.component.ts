import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { BillingFrequencyService } from '../../service/billing-frequency.service';

@Component({
  selector: 'app-add-edit-billing-frequency',
  templateUrl: './add-edit-billing-frequency.component.html',
  styleUrls: ['./add-edit-billing-frequency.component.scss'],
  animations: [routerTransition()]
})
export class AddEditBillingFrequencyComponent implements OnInit {
  addEditForm: FormGroup;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  options:any = ["Monthly", "On Completion", "Quarterly", "Other"]
  @Output() newItemEvent = new EventEmitter()
//   public options: Object = {
//     plugins: [ HtmlEmbed],
//     toolbar: [ 'htmlEmbed'],
// };
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public billingFrequencyService: BillingFrequencyService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getBillingFrequency(this.tempId);
      }
    });


    this.addEditForm = fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  getValue(response): object {
    let data = {
      name:  response.name
    }
    return data
  }
  getBillingFrequency(tempId: string) {
    this.isLoading = true;
    this.billingFrequencyService.getBillingFrequencyById(tempId).subscribe(response => {
      this.addEditForm.patchValue({
        ...this.getValue(response)
      });
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-mangement/billing-frequencies']);
    });
  }

  onSubmit() {
    this.billingFrequencyService.addBillingFrequency(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.newItemEvent.emit();
        // this.toastr.success(response.title + ' added!', 'Success');
        //this.router.navigate(['/data-mangement/billing-frequencies']);
      }
    });
  }
  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  onUpdate() {
    this.billingFrequencyService.updateBillingFrequency(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/data-mangement/billing-frequencies']);
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
