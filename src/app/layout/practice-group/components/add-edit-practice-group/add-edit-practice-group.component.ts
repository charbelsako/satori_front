import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { PracticeGroupService } from '../../service/practice-group.service';
import { ToastrService } from 'ngx-toastr';
import { AreaOfLawService } from '@app/layout/area-of-law/service/area-of-law.service';

@Component({
  selector: 'app-add-edit-practice-group',
  templateUrl: './add-edit-practice-group.component.html',
  styleUrls: ['./add-edit-practice-group.component.scss'],
  animations: [routerTransition()]
})
export class AddEditPracticeGroupComponent implements OnInit {
  addEditForm: FormGroup;
  editForm: boolean = false;
  tempId: any;
  isLoading: boolean = false;
  areaOfLaws: any = [];
  @Output() newItemEvent = new EventEmitter()
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public areaOfLawService: AreaOfLawService,
    public practiceGroupService: PracticeGroupService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      if (params.tempId !== '' && params.tempId != null) {
        this.tempId = params.tempId;
        this.editForm = true;
        this.getPracticeGroup(this.tempId);
      } else {
        this.isLoading = true;
        this.getAreaOfLaw()
      }
    });


    this.addEditForm = fb.group({
      name: ['', [Validators.required]],
      areaOfLawId: [[], [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  getAreaOfLaw() {
    this.areaOfLawService.getAreaOfLaws({
      page: 1,
      limit: 10,
      totalPages: 1,
      totalResults: 0,
      searchTerm: '',
      sortColumn: 'createdAt',
      sortDirection: 'asc',
    }).subscribe(response => {
      this.areaOfLaws = response['results'];
      this.isLoading = false;
  },(error)=>{
      this.isLoading = false;
  });
  }
  getPracticeGroup(tempId: string) {
    this.isLoading = true;
    this.practiceGroupService.getPracticeGroupById(tempId).subscribe(response => {
      this.addEditForm.patchValue({...response, areaOfLawId: response?.areaOfLawId?.map((areaOfLaw)=> areaOfLaw?.id || areaOfLaw) || []});
      this.getAreaOfLaw()
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/data-mangement/practice-groups']);
    });
  }

  onSubmit() {
    this.practiceGroupService.addPracticeGroups(this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        //this.toastr.success(response.title + ' added!', 'Success');
        this.newItemEvent.emit()
        //this.router.navigate(['/data-mangement/practice-groups']);
      }
    });
  }

  cancelEvent() {
    this.addEditForm.reset();
    this.newItemEvent.emit()
  }
  onUpdate() {
    this.practiceGroupService.updatePracticeGroup(this.tempId, this.addEditForm.value).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        // this.toastr.success(response.title + ' Updated!', 'Success');
        this.router.navigate(['/data-mangement/practice-groups']);
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
