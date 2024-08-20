import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TemplateService } from '../../service/template.service';

@Component({
  selector: 'app-add-edit-template',
  templateUrl: './add-edit-template.component.html',
  styleUrls: ['./add-edit-template.component.scss'],
  animations: [routerTransition()]
})
export class AddEditTemplateComponent implements OnInit {
  public Editor = ClassicEditor;
  addEditForm: FormGroup;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public templateService: TemplateService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getTemplate(this.tempId);
      }
    });


    this.addEditForm = fb.group({
      title: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      template: ['', [Validators.required]],
      templateId: [null, [Validators.required]],
      cc: [null, []],
      bcc: [null, []],
    });
  }

  ngOnInit(): void {
  }

  getTemplate(tempId: string) {
    this.isLoading = true;
    this.templateService.getTemplateById(tempId).subscribe(response => {
      this.addEditForm.patchValue(response);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/notifications']);
    });
  }

  onSubmit() {
    this.templateService.addTemplates(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' added!', 'Success');
        this.router.navigate(['/notifications']);
      }
    });
  }

  onUpdate() {
    this.templateService.updateTemplate(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/notifications']);
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
