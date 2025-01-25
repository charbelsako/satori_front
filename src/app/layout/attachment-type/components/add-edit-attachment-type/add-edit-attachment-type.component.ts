import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { AttachmentTypeService } from '../../service/attachment-type.service';

@Component({
  selector: 'app-add-edit-attachment-type',
  templateUrl: './add-edit-attachment-type.component.html',
  styleUrls: ['./add-edit-attachment-type.component.scss'],
  animations: [routerTransition()]
})
export class AddEditAttachmentTypeComponent implements OnInit {
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
    public attachmentTypeService: AttachmentTypeService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getAttachmentType(this.tempId);
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
  getAttachmentType(tempId: string) {
    this.isLoading = true;
    this.attachmentTypeService.getAttachmentTypeById(tempId).subscribe(response => {
      this.addEditForm.patchValue({
        ...this.getValue(response)
      });
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-management/attachment-types']);
    });
  }

  onSubmit() {
    this.attachmentTypeService.addAttachmentType(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.newItemEvent.emit();
        // this.toastr.success(response.title + ' added!', 'Success');
        //this.router.navigate(['/data-management/attachment-types']);
      }
    });
  }
  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  onUpdate() {
    this.attachmentTypeService.updateAttachmentType(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/data-management/attachment-types']);
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
