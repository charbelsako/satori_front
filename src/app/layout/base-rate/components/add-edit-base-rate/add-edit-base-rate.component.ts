import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { BaseRateService } from '../../service/base-rate.service';

@Component({
  selector: 'app-add-edit-base-rate',
  templateUrl: './add-edit-base-rate.component.html',
  styleUrls: ['./add-edit-base-rate.component.scss'],
  animations: [routerTransition()]
})
export class AddEditBaseRateComponent implements OnInit {
  addEditForm: FormGroup;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  @Output() newItemEvent = new EventEmitter()
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public baseRateService: BaseRateService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getBaseRate(this.tempId);
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
  getBaseRate(tempId: string) {
    this.isLoading = true;
    this.baseRateService.getBaseRateById(tempId).subscribe(response => {
      this.addEditForm.patchValue(response);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-management/base-rates']);
    });
  }

  onSubmit() {
    this.baseRateService.addBaseRates(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.newItemEvent.emit()
        // this.toastr.success(response.title + ' added!', 'Success');
        //this.router.navigate(['/data-management/base-rates']);
      }
    });
  }

  onUpdate() {
    this.baseRateService.updateBaseRate(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/data-management/base-rates']);
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
