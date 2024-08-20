import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TemplateService } from '../../service/template.service';
import { JwtService } from '@app/shared/services';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss'],
  animations: [routerTransition()]
})
export class ViewTemplateComponent implements OnInit {
  public Editor = ClassicEditor;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  templateData: any = [];
  isEditAccess: any;
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public templateService: TemplateService,
    public jwtService: JwtService,
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getTemplate(this.tempId);
      }
    });
  }

  ngOnInit(): void {
    this.isEditAccess = this.jwtService.checkAccess('templates');
  }

  getTemplate(tempId: string) {
    this.isLoading = true;
    this.templateService.getTemplateById(tempId).subscribe(response => {
    this.templateData = response
    console.log(this.templateData)
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/templates']);
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

  editTemplate(id: string) {
    this.router.navigate(['/notifications/edit-notification/' + id]);
  }
}
