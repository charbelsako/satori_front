import { Component, EventEmitter, OnInit,  Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { AreaOfLawService } from '../../service/area-of-law.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-area-of-law',
  templateUrl: './add-edit-area-of-law.component.html',
  styleUrls: ['./add-edit-area-of-law.component.scss'],
  animations: [routerTransition()]
})
export class AddEditAreaOfLawComponent implements OnInit {
  addEditForm: FormGroup;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  @Output() newItemEvent = new EventEmitter()
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public areaOfLawService: AreaOfLawService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getAreaOfLaw(this.tempId);
      }
    });


    this.addEditForm = fb.group({
      name: ['', [Validators.required]],
      aol_code: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getAreaOfLaw(tempId: string) {
    this.isLoading = true;
    this.areaOfLawService.getAreaOfLawById(tempId).subscribe(response => {
      this.addEditForm.patchValue(response);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-mangement/area-of-law']);
    });
  }

  onSubmit() {
    this.areaOfLawService.addAreaOfLaws(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        //this.toastr.success(response.title + ' added!', 'Success');
        this.newItemEvent.emit()
        //this.router.navigate(['/data-mangement/area-of-law']);
      }
    });
  }

  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  onUpdate() {
    this.areaOfLawService.updateAreaOfLaw(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/data-mangement/area-of-laws']);
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
