import { Component, EventEmitter, OnInit,  Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { BillingcurrencyService } from '../../service/billingcurrency.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-billingcurrency',
  templateUrl: './add-edit-billingcurrency.component.html',
  styleUrls: ['./add-edit-billingcurrency.component.scss'],
  animations: [routerTransition()]
})
export class AddEditBillingcurrencyComponent implements OnInit {
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
    public billingcurrencyService: BillingcurrencyService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getBillingcurrency(this.tempId);
      }
    });


    this.addEditForm = fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  getBillingcurrency(tempId: string) {
    this.isLoading = true;
    this.billingcurrencyService.getBillingcurrencyById(tempId).subscribe(response => {
      this.addEditForm.patchValue(response);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-mangement/billingcurrencies']);
    });
  }

  onSubmit() {
    this.billingcurrencyService.addBillingcurrencys(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        //this.toastr.success(response.title + ' added!', 'Success');
        this.newItemEvent.emit()
        //this.router.navigate(['/data-mangement/billingcurrencies']);
      }
    });
  }

  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  onUpdate() {
    this.billingcurrencyService.updateBillingcurrency(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/data-mangement/billingcurrencies']);
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
