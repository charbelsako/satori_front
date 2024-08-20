import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { BillingMethodService } from '../../service/billing-method.service';

@Component({
  selector: 'app-add-edit-billing-method',
  templateUrl: './add-edit-billing-method.component.html',
  styleUrls: ['./add-edit-billing-method.component.scss'],
  animations: [routerTransition()]
})
export class AddEditBillingMethodComponent implements OnInit {
  addEditForm: FormGroup;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  options:any = ["Monthly", "On Completion", "Quarterly", "Other"]
  @Output() newItemEvent = new EventEmitter()
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public billingMethodService: BillingMethodService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getBillingMethod(this.tempId);
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
  getBillingMethod(tempId: string) {
    this.isLoading = true;
    this.billingMethodService.getBillingMethodById(tempId).subscribe(response => {
      this.addEditForm.patchValue({
        ...this.getValue(response)
      });
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-mangement/billing-methods']);
    });
  }

  onSubmit() {
    this.billingMethodService.addBillingMethod(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.newItemEvent.emit();
        // this.toastr.success(response.title + ' added!', 'Success');
        //this.router.navigate(['/data-mangement/billing-methods']);
      }
    });
  }
  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  onUpdate() {
    this.billingMethodService.updateBillingMethod(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/data-mangement/billing-methods']);
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
