import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatterService } from '../../service/matter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { JwtService } from '@app/shared/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-matter',
  templateUrl: './view-matter.component.html',
  styleUrls: ['./view-matter.component.scss'],
  animations: [routerTransition()]
})
export class ViewMatterComponent implements OnInit {
  isLoading: boolean;
  matters: any;
  isEditAccess: boolean = false;
  @Input('matterIds') matterIds?: any = [];
  @Output('closeMatterId') closeMatterId: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    public route: ActivatedRoute,
    public MatterService: MatterService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    public router: Router,

  ) {

  }

  ngOnInit(): void {
  }
  closeMatter(matterId) {
    this.closeMatterId.emit(matterId);
  }
  ngOnChanges(changes) {
        
    changes.matterIds.currentValue?.length > 0 && this.getMatter(changes.matterIds.currentValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values
    
}
  getMatter(matterIds: string) {
    this.isLoading = true;
    this.MatterService.getMatterByIds(matterIds).subscribe(response => {
      this.matters = response;
      this.isLoading = false;
      this.cdr.detectChanges();
    }, (error) => {
      this.isLoading = false;
    });
  }


}
