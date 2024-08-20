import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ChartData, ChartType, Chart } from "chart.js";
import { Router } from '@angular/router';
import { SearchService } from './service/search.service';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    aggregationBilling: Array<any> = [];
    payorTypeAggrements: Array<any> = [];
    isLoading: any = false
    isChartLoading: any = false
    isAggregationBillingLoading: any = false
    clientCount: Number = 0
    clientGroupCount: Number = 0
    expireWeeklyCount: Number = 0
    expireMonthlyCount: Number = 0
    matterCount: Number = 0
    aggregationCount: Number = 0
    expireAggrement: Array<any> = [0, 0, 0, 0];
    adjustmentAggrement: Array<any> = [0, 0, 0, 0];
    dataSets: Array<any> = ['Matter', 'Client', 'Aggreement']
    dateRangeLabel: Array<any> = ['30 Days', '31 to 60 Days', '61 to 90 Days', '90+ Days']
    dateRangeValue: Array<any> = ["Expiring Agreement", "Adjustment Date"]
    actionType: Array<any> = ["Added Agreement", "Modify Agreement"]
    addedAggrement: Array<any> = []
    updateAggrement: Array<any> = []
    staff: Array<any> = []
    chart: any;
    pieChart: any;
    chartpayorTypeAggrementschart: any;
    chartAggregationTeamActivity: any;
    aggregationBillingchart: any;
    chartAggregationBilling: any;
    teamMemberFilter = "15"
    teamMemberFilterLoading = false
    teamMembersAggregationOperation: Array<any> = [];
    // Radar
    //  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    //  public radarChartData: any = [
    //      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    //      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    //  ];
    //  public radarChartType: ChartType;

    //  // Pie
    //  // public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    //  // public pieChartData: number[] = [300, 500, 100];
    //  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    //      labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    //      datasets: [ {
    //          data: [ 300, 500, 100 ]
    //      } ]
    //  };
    //  public pieChartType: ChartType;

    constructor(public router: Router,
        public searchService: SearchService,
        private cdr: ChangeDetectorRef,
        private confirmationDialogService: ConfirmationDialogService) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        this.isLoading = true;
        this.isChartLoading = true;
        this.isAggregationBillingLoading = true;
        this.getAllSearch();
        this.getDayExpireChart()
        this.getAggregationBilling()
        this.getAggregationFilter()
    }

    public getDayExpireChart() {
        return this.searchService.getDayExpireChart().subscribe(
            response => {
                this.expireAggrement = [
                    response.expire.expire30DaysCount || 0,
                    response.expire.expire31To60DaysCount || 0,
                    response.expire.expire61To90DaysCount || 0,
                    response.expire.expire90PlusDaysCount || 0
                ]
                this.adjustmentAggrement = [
                    response.adjustment.adjustment30DaysCount || 0,
                    response.adjustment.adjustment31To60DaysCount || 0,
                    response.adjustment.adjustment61To90DaysCount || 0,
                    response.adjustment.adjustment90PlusDaysCount || 0
                ]
                this.isChartLoading = false
                this.createExpireChart();
            }, (error) => {
                this.isChartLoading = false
            }
        );
    }
    public getAggregationFilter() {
        this.teamMemberFilterLoading = true
        return this.searchService.getAggregationFilter(this.teamMemberFilter).subscribe(
            response => {
                this.teamMemberFilterLoading = false;
                this.teamMembersAggregationOperation = response;
                this.chartTeamMembersAggregationOperationDraw(response);
            }, (error) => {
                this.teamMemberFilterLoading = false;
            }
        );
    }
    public onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
    }
    public chartTeamMembersAggregationOperationDraw(data) {
        let updateAggrement = []
        let addedAggrement = []
        let labelArray = {}
        data.map((_data) => {
            if (!labelArray[_data.staffName.name]) {
                labelArray[_data.staffName.name] = {}
            }
            if (_data._id.action === "add") {
                labelArray[_data.staffName.name].addField = _data
            } else {
                labelArray[_data.staffName.name].updateField = _data
            }
        }).filter(this.onlyUnique);
        Object.values(labelArray).forEach((_data) => {
            if (_data['addField']) {
                this.addedAggrement.push(_data['addField'])
                addedAggrement.push(_data['addField'].count)
            } else {
                this.addedAggrement.push(null)
                addedAggrement.push(0)
            }
            if (_data['updateField']) {
                this.updateAggrement.push(_data['updateField'])
                updateAggrement.push(_data['updateField'].count)
            } else {
                this.updateAggrement.push(null)
                updateAggrement.push(0)
            }
        })
        this.staff = data
        this.chartAggregationTeamActivity = new Chart("chartTeamMemberFilter", {
            type: 'bar', //this denotes tha type of chart
            data: {// values on X-Axis
                labels: Object.keys(labelArray),
                datasets: [
                    {
                        label: this.actionType[0],
                        data: addedAggrement,
                        backgroundColor: 'limegreen'
                    },
                    {
                        label: this.actionType[1],
                        data: updateAggrement,
                        backgroundColor: 'blue'
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onChartTeamActionClicked(event, element)
            }

        });
    }
    public onChartTeamActionClicked(event, elements) {
        const itemIndex = elements?.[0]?.datasetIndex >= 0 && this.actionType[elements[0].datasetIndex]
        switch(itemIndex) {
            case "Added Agreement":
                const itemDataRange = elements?.[0]?.index >= 0 && this.addedAggrement[elements[0].index]
                itemDataRange?._id?.staff && this.router.navigate([`/dashboard/staff/added/${itemDataRange._id.staff}/${this.teamMemberFilter}`]);
                break;
            case "Modify Agreement":
                const itemDataRange1 = elements?.[0]?.index >= 0 && this.updateAggrement[elements[0].index]
                itemDataRange1?._id?.staff && this.router.navigate([`/dashboard/staff/updated/${itemDataRange1._id.staff}/${this.teamMemberFilter}`]);
        }
    }
    public getAggregationBilling() {
        return this.searchService.getAggregationBilling().subscribe(
            response => {
                this.isAggregationBillingLoading = false
                this.aggregationBilling = response.billingModel || []
                this.payorTypeAggrements = response.payorType || []
                this.chartAggregationBillingDraw(response.billingModel || [])
                this.chartPayorTypeAggrementsDraw(response.payorType || [])
            }, (error) => {
                this.isAggregationBillingLoading = false
            }
        );
    }
    public chartPayorTypeAggrementsDraw(data) {
        if (data.length === 0) return;

        this.chartpayorTypeAggrementschart = new Chart("chartpayorTypeAggrements", {
            type: 'pie', //this denotes tha type of chart
            data: {// values on X-Axis
                labels: data.map((_data) => _data._id),
                datasets: [
                    {
                        data: data.map((_data) => _data.count)
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onChartPayorClicked(event, element)
            }
        });
    }
    public chartAggregationBillingDraw(data) {
        if (data.length === 0) return;

        this.aggregationBillingchart = new Chart("chartAggregationBilling", {
            type: 'pie', //this denotes tha type of chart
            data: {// values on X-Axis
                labels: data.map((_data) => _data._id),
                datasets: [
                    {
                        data: data.map((_data) => _data.count)
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onChartClicked(event, element)
            }
        });
    }
    public onChartPayorClicked(event, elements) {
        const item = elements?.[0]?.index >= 0 && this.payorTypeAggrements[elements[0].index]
        if (item) {
            this.router.navigate(['/dashboard/payor/' + encodeURI(item._id)]);
        }
    }
    public onCharLinkClicked(event, elements) {
        const item = elements?.[0]?.index >= 0 && this.dataSets[elements[0].index];
        switch (item) {
            case "Matter":
                this.router.navigate(['/matters']);
                break;
            case "Client":
                this.router.navigate(['/clients']);
                break;
            case "Aggreement":
                this.router.navigate(['/dashboard/search']);
        }
    }
    public onChartClicked(event, elements) {
        const item = elements?.[0]?.index >= 0 && this.aggregationBilling[elements[0].index]
        if (item) {
            this.router.navigate(['/dashboard/billing/' + encodeURI(item._id)]);
        }
    }
    public onCharExpireClicked(event, elements) {
        const itemDataRange = elements?.[0]?.index >= 0 && this.dateRangeLabel[elements[0].index].toLowerCase().replace(/ /g, '-').replace(/\+/g, 'plus')
        const itemIndex = elements?.[0]?.datasetIndex >= 0 && this.dateRangeValue[elements[0].datasetIndex]
        switch(itemIndex) {
            case "Expiring Agreement":
                this.router.navigate([`/dashboard/search/expire/${itemDataRange}`]);
                break;
            case "Adjustment Date":
                this.router.navigate([`/dashboard/search/adjustment/${itemDataRange}`]);
        }
    }
    public teamMemberFilterChange() {
        this.chartAggregationTeamActivity && this.chartAggregationTeamActivity.destroy();
        this.getAggregationFilter()
    }
    public drawPieChar() {
        this.pieChart = new Chart("cl-ma-ag--chart", {
            type: 'pie', //this denotes tha type of chart
            data: {// values on X-Axis
                labels: this.dataSets,
                datasets: [
                    {
                        data: [
                            this.matterCount,
                            this.clientCount,
                            this.aggregationCount
                        ],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ]
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onCharLinkClicked(event, element)
            }

        });
    }
    public getAllSearch() {
        return this.searchService.getDashboardRecords().subscribe(
            response => {
                this.clientCount = response.clientCount
                this.aggregationCount = response.aggregationCount
                this.expireWeeklyCount = response.expireWeeklyCount
                this.expireMonthlyCount = response.expireMonthlyCount
                this.matterCount = response.matterCount
                this.clientGroupCount = response.clientCount
                this.isLoading = false
                this.drawPieChar()
            }, (error) => {
                this.isLoading = false
            }
        );
    }
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
    public clientLink(): void {
        this.router.navigate(['/clients']);
    }
    public matterLink(): void {
        this.router.navigate(['/matters']);
    }
    public aggregationLink(type): void {
        this.router.navigate([`/dashboard/search/expire/${type}`]);
    }
    createExpireChart() {
        this.chart = new Chart("expire-chart", {
            type: 'bar', //this denotes tha type of chart
            data: {// values on X-Axis
                labels: this.dateRangeLabel,
                datasets: [
                    {
                        label: this.dateRangeValue[0],
                        data: this.expireAggrement,
                        backgroundColor: 'blue'
                    },
                    {
                        label: this.dateRangeValue[1],
                        data: this.adjustmentAggrement,
                        backgroundColor: 'limegreen'
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onCharExpireClicked(event, element)
            }

        });
    }

}
