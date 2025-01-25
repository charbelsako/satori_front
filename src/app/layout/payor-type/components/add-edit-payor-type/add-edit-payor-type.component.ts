import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { PayorTypeService } from '../../service/payor-type.service';

@Component({
  selector: 'app-add-edit-payor-type',
  templateUrl: './add-edit-payor-type.component.html',
  styleUrls: ['./add-edit-payor-type.component.scss'],
  animations: [routerTransition()]
})
export class AddEditPayorTypeComponent implements OnInit {
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
    public payorTypeService: PayorTypeService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getPayorType(this.tempId);
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
  getPayorType(tempId: string) {
    this.isLoading = true;
    this.payorTypeService.getPayorTypeById(tempId).subscribe(response => {
      this.addEditForm.patchValue({
        ...this.getValue(response)
      });
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-management/payor-types']);
    });
  }

  onSubmit() {
    this.payorTypeService.addPayorType(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.newItemEvent.emit();
        // this.toastr.success(response.title + ' added!', 'Success');
        //this.router.navigate(['/data-management/payor-types']);
      }
    });
  }
  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  onUpdate() {
    this.payorTypeService.updatePayorType(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/data-management/payor-types']);
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
