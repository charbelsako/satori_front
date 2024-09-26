"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["common"],{

/***/ 96995:
/*!************************************************************!*\
  !*** ./src/app/layout/dashboard/service/search.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);





let SearchService = class SearchService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
    }
    getRecords(data, actionparam, filterData) {
        let _filterData = filterData;
        if (filterData.responsibleAttorney) {
            _filterData.responsibleAttorney = filterData.responsibleAttorney.id;
        }
        const queryParams = this.queryString(actionparam, 'array');
        let queryString = queryParams.length > 0 ? `&${queryParams.join("&")}` : '';
        if (data.searchTerm == '') {
            return this.apiService.post(`/search/filter?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}${queryString}`, _filterData);
        }
        else {
            return this.apiService.post(`/search/filter?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}${queryString}`, _filterData);
        }
    }
    getSearchForExcelDownload(data, actionparam, filterData) {
        const queryParams = this.queryString(actionparam, 'array');
        let queryString = queryParams.length > 0 ? `&${queryParams.join("&")}` : '';
        let _filterData = filterData;
        if (filterData.responsibleAttorney) {
            _filterData.responsibleAttorney = filterData.responsibleAttorney.id;
        }
        if (data.searchTerm == '') {
            return this.apiService.postBlob(`/search/download-excel?sortBy=${data.sortColumn + ':' + data.sortDirection}${queryString}`, _filterData);
        }
        else {
            return this.apiService.postBlob(`/search/download-excel?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}${queryString}`, _filterData);
        }
    }
    filtersSearchDataOption(data, actionparam) {
        const queryString = this.queryString(actionparam);
        let filterData = data;
        if (filterData.responsibleAttorney) {
            filterData.responsibleAttorney = filterData.responsibleAttorney.id;
        }
        return this.apiService.post(`/search/filter/options${queryString}`, filterData);
    }
    filtersSearchData(actionparam) {
        const queryString = this.queryString(actionparam);
        return this.apiService.post(`/search/filter/options${queryString}`);
    }
    filterMatterSearchData(actionparam) {
        const queryString = this.queryString(actionparam);
        return this.apiService.post(`/search/filter/options${queryString}`);
    }
    queryString(actionparam, returnType = 'string') {
        const { billingMode, payorType, expire, adjustment, staffId, staffIdOperation, staffIdDuration } = actionparam;
        let queryArray = [];
        if (billingMode) {
            queryArray.push(`billingMode=${decodeURI(billingMode)}`);
        }
        if (expire) {
            queryArray.push(`expire=${decodeURI(expire)}`);
        }
        if (payorType) {
            queryArray.push(`payorType=${decodeURI(payorType)}`);
        }
        if (adjustment) {
            queryArray.push(`adjustment=${decodeURI(adjustment)}`);
        }
        if (staffId) {
            queryArray.push(`staffId=${decodeURI(staffId)}`);
            queryArray.push(`staffIdOperation=${decodeURI(staffIdOperation)}`);
            queryArray.push(`staffIdDuration=${decodeURI(staffIdDuration)}`);
        }
        let queryString = "";
        if (queryArray.length > 0) {
            queryString = `?${queryArray.join("&")}`;
        }
        return returnType === 'string' ? queryString : queryArray;
    }
    getDashboardRecords() {
        return this.apiService.get(`/search/dashboard-records`);
    }
    getDayExpireChart() {
        return this.apiService.get(`/search/get-day-expire-chart`);
    }
    getAggregationBilling() {
        return this.apiService.get(`/search/get-aggregation-billing`);
    }
    getAggregationFilter(time) {
        return this.apiService.post(`/search/get-aggregation-filter-operation`, {
            time: time
        });
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
SearchService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SearchService);



/***/ }),

/***/ 26316:
/*!*****************************************************!*\
  !*** ./src/app/layout/role/service/role.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26067);






let RoleService = class RoleService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
        this.activityState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    }
    getRoles(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/roles?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/roles?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getAllRoles() {
        return this.apiService.get(`/roles?sortBy=createdAt:desc&limit=10&page=1`);
    }
    getWebModules() {
        return this.apiService.get(`/staffs/get/web/module/all`);
    }
    getRoleById(data) {
        return this.apiService.get(`/roles/${data}`);
    }
    addNewRole(data) {
        return this.apiService.post(`/roles`, data);
    }
    updateRole(roleId, data) {
        return this.apiService.patch(`/roles/${roleId}`, data);
    }
    deleteRole(data) {
        return this.apiService.delete(`/roles/` + data);
    }
    /**
    * Getter method for getting Logged In status
    */
    getActivityState() {
        return this.activityState.asObservable();
    }
    /**
    * Setter method to set Logged In status
    * @param value
    */
    setActivityState(value) {
        this.activityState.next(value);
    }
};
RoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
RoleService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], RoleService);



/***/ }),

/***/ 67090:
/*!*************************************************************!*\
  !*** ./src/app/layout/timecard/service/timecard.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeCardService": () => (/* binding */ TimeCardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);





let TimeCardService = class TimeCardService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
    }
    getTimeCards(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/timecards?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/timecards?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getTimeCardsByMatter(matterId) {
        return this.apiService.get(`/timecards?matter=${matterId}`);
    }
    getTimeCardForExcelDownload(data) {
        if (data.searchTerm == '') {
            return this.apiService.getBlob(`/timecards/download?sortBy=${data.sortColumn + ':' + data.sortDirection}`);
        }
        else {
            return this.apiService.getBlob(`/timecards/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
        }
    }
    getDeletedTimeCards(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/timecards?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/timecards?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getTimeCardCSV() {
        return this.apiService.get(`/timecards/bulk/csv/data`);
    }
    getTimeCardById(data) {
        return this.apiService.get(`/timecards/${data}`);
    }
    addNewTimeCard(data) {
        return this.apiService.post(`/timecards`, data);
    }
    updateTimeCard(clientId, data) {
        return this.apiService.patch(`/timecards/${clientId}`, data);
    }
    deleteTimeCard(data) {
        return this.apiService.delete(`/timecards/` + data);
    }
    getTimecardClientLevelRate(clientId) {
        return this.apiService.get(`/timecards/level-set?client=${clientId}`);
    }
    getTimecardMatterLevelRate(matterNumber) {
        return this.apiService.get(`/timecards/level-set?matterNumber=${matterNumber}`);
    }
};
TimeCardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
TimeCardService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], TimeCardService);



/***/ })

}]);
//# sourceMappingURL=common.js.map