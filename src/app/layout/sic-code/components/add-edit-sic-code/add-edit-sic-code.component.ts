import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { alphaNumericValidator, alphaNumericValidatorHipen } from '@app/shared/modules/validation/alphanumeric';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SICCodeService } from '../../service/sic-code.service';

@Component({
  selector: 'app-add-edit-sic-code',
  templateUrl: './add-edit-sic-code.component.html',
  styleUrls: ['./add-edit-sic-code.component.scss'],
  animations: [routerTransition()]
})
export class AddEditSICCodeComponent implements OnInit {
  public Editor = ClassicEditor;
  addEditForm: FormGroup;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  options: any = ["Monthly", "On Completion", "Quarterly", "Other"]
  @Output() newItemEvent = new EventEmitter()
  //   public options: Object = {
  //     plugins: [ HtmlEmbed],
  //     toolbar: [ 'htmlEmbed'],
  // };
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public sicCodeService: SICCodeService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getSICCode(this.tempId);
      }
    });


    this.addEditForm = fb.group({
      code: ['', [Validators.required, alphaNumericValidatorHipen]],
      description: ['', [Validators.required, alphaNumericValidator]]
    });
  }

  ngOnInit(): void {
  }
  getValue(response): object {
    let data = {
      ...response
    }
    return data
  }
  getSICCode(tempId: string) {
    this.isLoading = true;
    this.sicCodeService.getSICCodeById(tempId).subscribe(response => {
      this.addEditForm.patchValue({
        ...this.getValue(response)
      });
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-management/sic-codes']);
    });
  }

  onSubmit() {
    if (this.addEditForm.valid) {
      this.sicCodeService.addSICCode(this.addEditForm.value).subscribe(response => {
        if (response) {
          this.addEditForm.reset();
          //this.newItemEvent.emit();
          // this.toastr.success(response.title + ' added!', 'Success');
          this.router.navigate(['/data-management/sic-codes']);
        }
      });
    } else {
      this.addEditForm.markAllAsTouched();
    }
  }
  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  onUpdate() {
    if (this.addEditForm.valid) {
      this.sicCodeService.updateSICCode(this.tempId, this.addEditForm.value).subscribe(response => {
        if (response) {
          this.addEditForm.reset();
          // this.toastr.success(response.title + ' Updated!', 'Success');
          this.router.navigate(['/data-management/sic-codes']);
        }
      });
    } else {
      this.addEditForm.markAllAsTouched();
    }
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
