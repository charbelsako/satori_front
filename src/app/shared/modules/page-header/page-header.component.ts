import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    @Input() previousHeading: string;
    @Input() previousLink: string;
    @Input() heading: string;
    @Input() previoudIcon: string;
    @Input() icon: string;

    constructor() {
        this.previousLink = decodeURIComponent(this.previousLink);
    }

    ngOnInit() {}
}
