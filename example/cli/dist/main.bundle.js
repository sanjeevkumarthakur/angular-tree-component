webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basictree_basictree_component__ = __webpack_require__("../../../../../src/app/basictree/basictree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fulltree_fulltree_component__ = __webpack_require__("../../../../../src/app/fulltree/fulltree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_templates_component__ = __webpack_require__("../../../../../src/app/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fields_fields_component__ = __webpack_require__("../../../../../src/app/fields/fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_filter_component__ = __webpack_require__("../../../../../src/app/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__empty_empty_component__ = __webpack_require__("../../../../../src/app/empty/empty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rtl_rtl_tree_component__ = __webpack_require__("../../../../../src/app/rtl/rtl-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__async_async_component__ = __webpack_require__("../../../../../src/app/async/async.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__save_restore_save_restore_component__ = __webpack_require__("../../../../../src/app/save-restore/save-restore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__checkboxes_checkboxes_component__ = __webpack_require__("../../../../../src/app/checkboxes/checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__drag_drag_component__ = __webpack_require__("../../../../../src/app/drag/drag.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__fulltree_fulltree_component__["a" /* FullTreeComponent */]
    },
    {
        path: 'basic',
        component: __WEBPACK_IMPORTED_MODULE_2__basictree_basictree_component__["a" /* BasicTreeComponent */]
    },
    {
        path: 'fields',
        component: __WEBPACK_IMPORTED_MODULE_5__fields_fields_component__["a" /* FieldsComponent */]
    },
    {
        path: 'templates',
        component: __WEBPACK_IMPORTED_MODULE_4__templates_templates_component__["a" /* TemplatesComponent */]
    },
    {
        path: 'filter',
        component: __WEBPACK_IMPORTED_MODULE_6__filter_filter_component__["a" /* FilterComponent */]
    },
    {
        path: 'empty',
        component: __WEBPACK_IMPORTED_MODULE_7__empty_empty_component__["a" /* EmptyComponent */]
    },
    {
        path: 'rtl',
        component: __WEBPACK_IMPORTED_MODULE_8__rtl_rtl_tree_component__["a" /* RtlTreeComponent */]
    },
    {
        path: 'async',
        component: __WEBPACK_IMPORTED_MODULE_9__async_async_component__["a" /* AsyncTreeComponent */]
    },
    {
        path: 'save-restore',
        component: __WEBPACK_IMPORTED_MODULE_10__save_restore_save_restore_component__["a" /* SaveRestoreComponent */]
    },
    {
        path: 'checkboxes',
        component: __WEBPACK_IMPORTED_MODULE_11__checkboxes_checkboxes_component__["a" /* CheckboxesComponent */]
    },
    {
        path: 'drag',
        component: __WEBPACK_IMPORTED_MODULE_12__drag_drag_component__["a" /* DragComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["l" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["l" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* unused harmony export View_AppComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 



var styles_AppComponent = [];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](2, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AppComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], [], null, null)], null, null); }
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-root", __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fulltree_fulltree_component_ngfactory__ = __webpack_require__("../../../../../src/app/fulltree/fulltree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basictree_basictree_component_ngfactory__ = __webpack_require__("../../../../../src/app/basictree/basictree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fields_fields_component_ngfactory__ = __webpack_require__("../../../../../src/app/fields/fields.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_templates_component_ngfactory__ = __webpack_require__("../../../../../src/app/templates/templates.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_filter_component_ngfactory__ = __webpack_require__("../../../../../src/app/filter/filter.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__empty_empty_component_ngfactory__ = __webpack_require__("../../../../../src/app/empty/empty.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rtl_rtl_tree_component_ngfactory__ = __webpack_require__("../../../../../src/app/rtl/rtl-tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__async_async_component_ngfactory__ = __webpack_require__("../../../../../src/app/async/async.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__save_restore_save_restore_component_ngfactory__ = __webpack_require__("../../../../../src/app/save-restore/save-restore.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__checkboxes_checkboxes_component_ngfactory__ = __webpack_require__("../../../../../src/app/checkboxes/checkboxes.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__drag_drag_component_ngfactory__ = __webpack_require__("../../../../../src/app/drag/drag.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component_ngfactory__ = __webpack_require__("../../../../../src/app/app.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_mobx_angular_dist_mobx_angular__ = __webpack_require__("../../../../mobx-angular/dist/mobx-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_tree_component_dist_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__fulltree_fulltree_component__ = __webpack_require__("../../../../../src/app/fulltree/fulltree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__basictree_basictree_component__ = __webpack_require__("../../../../../src/app/basictree/basictree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__fields_fields_component__ = __webpack_require__("../../../../../src/app/fields/fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__templates_templates_component__ = __webpack_require__("../../../../../src/app/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__filter_filter_component__ = __webpack_require__("../../../../../src/app/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__empty_empty_component__ = __webpack_require__("../../../../../src/app/empty/empty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__rtl_rtl_tree_component__ = __webpack_require__("../../../../../src/app/rtl/rtl-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__async_async_component__ = __webpack_require__("../../../../../src/app/async/async.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__save_restore_save_restore_component__ = __webpack_require__("../../../../../src/app/save-restore/save-restore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__checkboxes_checkboxes_component__ = __webpack_require__("../../../../../src/app/checkboxes/checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__drag_drag_component__ = __webpack_require__("../../../../../src/app/drag/drag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 


































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵCodegenComponentFactoryResolver */], [[8, [__WEBPACK_IMPORTED_MODULE_3__fulltree_fulltree_component_ngfactory__["a" /* FullTreeComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_4__basictree_basictree_component_ngfactory__["a" /* BasicTreeComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__fields_fields_component_ngfactory__["a" /* FieldsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__templates_templates_component_ngfactory__["a" /* TemplatesComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_7__filter_filter_component_ngfactory__["a" /* FilterComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_8__empty_empty_component_ngfactory__["a" /* EmptyComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_9__rtl_rtl_tree_component_ngfactory__["a" /* RtlTreeComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_10__async_async_component_ngfactory__["a" /* AsyncTreeComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_11__save_restore_save_restore_component_ngfactory__["a" /* SaveRestoreComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_12__checkboxes_checkboxes_component_ngfactory__["a" /* CheckboxesComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_13__drag_drag_component_ngfactory__["a" /* DragComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_14__app_component_ngfactory__["a" /* AppComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModuleRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* LOCALE_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵm */], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* LOCALE_ID */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["j" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* LOCALE_ID */], [2, __WEBPACK_IMPORTED_MODULE_15__angular_common__["p" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* APP_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵf */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵk */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["q" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_15__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Sanitizer */], null, [__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["b" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["e" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["f" /* HammerGestureConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["c" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["j" /* ɵDomEventsPlugin */](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["n" /* ɵKeyEventsPlugin */](p1_0), new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["m" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_15__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["e" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["d" /* EventManager */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["d" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["c" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["l" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["l" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_15__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["k" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["k" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["d" /* EventManager */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["l" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* RendererFactory2 */], null, [__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["k" /* ɵDomRendererFactory2 */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["o" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["l" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Testability */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Testability */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["g" /* Meta */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["g" /* Meta */], [__WEBPACK_IMPORTED_MODULE_15__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["h" /* Title */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["h" /* Title */], [__WEBPACK_IMPORTED_MODULE_15__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_forms__["g" /* ɵi */], __WEBPACK_IMPORTED_MODULE_17__angular_forms__["g" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_18_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_18_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_19__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["v" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_19__angular_router__["k" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_router__["d" /* NoPreloading */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["d" /* NoPreloading */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_19__angular_router__["f" /* PreloadingStrategy */], null, [__WEBPACK_IMPORTED_MODULE_19__angular_router__["d" /* NoPreloading */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_19__angular_router__["n" /* RouterPreloader */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["n" /* RouterPreloader */], [__WEBPACK_IMPORTED_MODULE_19__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["f" /* PreloadingStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_router__["e" /* PreloadAllModules */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["e" /* PreloadAllModules */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_19__angular_router__["h" /* ROUTER_INITIALIZER */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["y" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_19__angular_router__["w" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_19__angular_router__["h" /* ROUTER_INITIALIZER */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_15__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["b" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["p" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgProbeToken */], function () { return [__WEBPACK_IMPORTED_MODULE_19__angular_router__["r" /* ɵb */]()]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_router__["w" /* ɵg */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["w" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], function (p0_0, p1_0) { return [__WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["s" /* ɵh */](p0_0), __WEBPACK_IMPORTED_MODULE_19__angular_router__["x" /* ɵh */](p1_0)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgProbeToken */]], __WEBPACK_IMPORTED_MODULE_19__angular_router__["w" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵConsole */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_forms__["e" /* ɵba */], __WEBPACK_IMPORTED_MODULE_17__angular_forms__["e" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_17__angular_forms__["b" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20_mobx_angular_dist_mobx_angular__["a" /* MobxAngularModule */], __WEBPACK_IMPORTED_MODULE_20_mobx_angular_dist_mobx_angular__["a" /* MobxAngularModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_21_angular_tree_component_dist_angular_tree_component__["c" /* TreeModule */], __WEBPACK_IMPORTED_MODULE_21_angular_tree_component_dist_angular_tree_component__["c" /* TreeModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_19__angular_router__["q" /* ɵa */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["t" /* ɵd */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_router__["p" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["c" /* DefaultUrlSerializer */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["b" /* ChildrenOutletContexts */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_19__angular_router__["g" /* ROUTER_CONFIGURATION */], { useHash: true }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_15__angular_common__["g" /* LocationStrategy */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["s" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_15__angular_common__["n" /* PlatformLocation */], [2, __WEBPACK_IMPORTED_MODULE_15__angular_common__["a" /* APP_BASE_HREF */]], __WEBPACK_IMPORTED_MODULE_19__angular_router__["g" /* ROUTER_CONFIGURATION */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_15__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["f" /* Location */], [__WEBPACK_IMPORTED_MODULE_15__angular_common__["g" /* LocationStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* SystemJsNgModuleLoader */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* SystemJsNgModuleLoaderConfig */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_19__angular_router__["i" /* ROUTES */], function () { return [[{ path: "", component: __WEBPACK_IMPORTED_MODULE_22__fulltree_fulltree_component__["a" /* FullTreeComponent */] }, { path: "basic", component: __WEBPACK_IMPORTED_MODULE_23__basictree_basictree_component__["a" /* BasicTreeComponent */] }, { path: "fields", component: __WEBPACK_IMPORTED_MODULE_24__fields_fields_component__["a" /* FieldsComponent */] }, { path: "templates", component: __WEBPACK_IMPORTED_MODULE_25__templates_templates_component__["a" /* TemplatesComponent */] }, { path: "filter", component: __WEBPACK_IMPORTED_MODULE_26__filter_filter_component__["a" /* FilterComponent */] }, { path: "empty", component: __WEBPACK_IMPORTED_MODULE_27__empty_empty_component__["a" /* EmptyComponent */] }, { path: "rtl", component: __WEBPACK_IMPORTED_MODULE_28__rtl_rtl_tree_component__["a" /* RtlTreeComponent */] }, { path: "async", component: __WEBPACK_IMPORTED_MODULE_29__async_async_component__["a" /* AsyncTreeComponent */] }, { path: "save-restore", component: __WEBPACK_IMPORTED_MODULE_30__save_restore_save_restore_component__["a" /* SaveRestoreComponent */] }, { path: "checkboxes", component: __WEBPACK_IMPORTED_MODULE_31__checkboxes_checkboxes_component__["a" /* CheckboxesComponent */] }, { path: "drag", component: __WEBPACK_IMPORTED_MODULE_32__drag_drag_component__["a" /* DragComponent */] }]]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_19__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["u" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["p" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["i" /* ROUTES */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["g" /* ROUTER_CONFIGURATION */], [2, __WEBPACK_IMPORTED_MODULE_19__angular_router__["o" /* UrlHandlingStrategy */]], [2, __WEBPACK_IMPORTED_MODULE_19__angular_router__["j" /* RouteReuseStrategy */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_router__["l" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_19__angular_router__["l" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_19__angular_router__["q" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_19__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_33__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_33__app_routing_module__["a" /* AppRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [])]); });



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basictree_basictree_component__ = __webpack_require__("../../../../../src/app/basictree/basictree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fulltree_fulltree_component__ = __webpack_require__("../../../../../src/app/fulltree/fulltree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templates_templates_component__ = __webpack_require__("../../../../../src/app/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fields_fields_component__ = __webpack_require__("../../../../../src/app/fields/fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filter_filter_component__ = __webpack_require__("../../../../../src/app/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__empty_empty_component__ = __webpack_require__("../../../../../src/app/empty/empty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rtl_rtl_tree_component__ = __webpack_require__("../../../../../src/app/rtl/rtl-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__async_async_component__ = __webpack_require__("../../../../../src/app/async/async.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__save_restore_save_restore_component__ = __webpack_require__("../../../../../src/app/save-restore/save-restore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__checkboxes_checkboxes_component__ = __webpack_require__("../../../../../src/app/checkboxes/checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__drag_drag_component__ = __webpack_require__("../../../../../src/app/drag/drag.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__basictree_basictree_component__["a" /* BasicTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__fulltree_fulltree_component__["a" /* FullTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__templates_templates_component__["a" /* TemplatesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__fields_fields_component__["a" /* FieldsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__filter_filter_component__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__empty_empty_component__["a" /* EmptyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__rtl_rtl_tree_component__["a" /* RtlTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__async_async_component__["a" /* AsyncTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__save_restore_save_restore_component__["a" /* SaveRestoreComponent */],
                __WEBPACK_IMPORTED_MODULE_16__checkboxes_checkboxes_component__["a" /* CheckboxesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__drag_drag_component__["a" /* DragComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["c" /* TreeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/async/async.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_AsyncTreeComponent */
/* unused harmony export View_AsyncTreeComponent_0 */
/* unused harmony export View_AsyncTreeComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncTreeComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__async_component__ = __webpack_require__("../../../../../src/app/async/async.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_AsyncTreeComponent = [];
var RenderType_AsyncTreeComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_AsyncTreeComponent, data: {} });

function View_AsyncTreeComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 6, "tree-root", [], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](3, 573440, [["tree", 4]], 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], options: [1, "options"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](9, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addNodes() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["add nodes"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; var currVal_1 = _co.options; _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_AsyncTreeComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-async", [], null, null, null, View_AsyncTreeComponent_0, RenderType_AsyncTreeComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__async_component__["a" /* AsyncTreeComponent */], [], null, null)], null, null); }
var AsyncTreeComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-async", __WEBPACK_IMPORTED_MODULE_5__async_component__["a" /* AsyncTreeComponent */], View_AsyncTreeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/async/async.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var id = 10;
var AsyncTreeComponent = (function () {
    function AsyncTreeComponent() {
        this.options = {
            getChildren: this.getChildren.bind(this)
        };
        this.nodes = [];
        this.asyncChildren = [
            {
                name: 'child1',
                hasChildren: true
            }, {
                name: 'child2'
            }
        ];
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' }
                ]
            },
            {
                name: 'root2',
                hasChildren: true
            },
            {
                name: 'root3'
            }
        ];
    }
    AsyncTreeComponent.prototype.addNodes = function () {
        this.nodes[1].children.push({
            id: ++id,
            name: "node " + id
        });
        this.nodes = this.nodes.slice();
    };
    AsyncTreeComponent.prototype.getChildren = function (node) {
        var newNodes = this.asyncChildren.map(function (c) { return Object.assign({}, c); });
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(newNodes); }, 1000);
        });
    };
    AsyncTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-async',
            template: "\n    <tree-root #tree [options]=\"options\" [nodes]=\"nodes\"></tree-root>\n    <button (click)=\"addNodes()\">add nodes</button>\n ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AsyncTreeComponent);
    return AsyncTreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/basictree/basictree.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_BasicTreeComponent */
/* unused harmony export View_BasicTreeComponent_0 */
/* unused harmony export View_BasicTreeComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTreeComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basictree_component__ = __webpack_require__("../../../../../src/app/basictree/basictree.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_BasicTreeComponent = [];
var RenderType_BasicTreeComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_BasicTreeComponent, data: {} });

function View_BasicTreeComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 6, "tree-root", [], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](3, 573440, null, 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], focused: [1, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; var currVal_1 = true; _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_BasicTreeComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-basictree", [], null, null, null, View_BasicTreeComponent_0, RenderType_BasicTreeComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__basictree_component__["a" /* BasicTreeComponent */], [], null, null)], null, null); }
var BasicTreeComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-basictree", __WEBPACK_IMPORTED_MODULE_5__basictree_component__["a" /* BasicTreeComponent */], View_BasicTreeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/basictree/basictree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicTreeComponent = (function () {
    function BasicTreeComponent() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
    }
    BasicTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-basictree',
            template: "\n    <tree-root [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\n  ",
            styles: []
        })
    ], BasicTreeComponent);
    return BasicTreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/checkboxes/checkboxes.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_CheckboxesComponent */
/* unused harmony export View_CheckboxesComponent_0 */
/* unused harmony export View_CheckboxesComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxesComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkboxes_component__ = __webpack_require__("../../../../../src/app/checkboxes/checkboxes.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_CheckboxesComponent = [];
var RenderType_CheckboxesComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_CheckboxesComponent, data: {} });

function View_CheckboxesComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 0, "input", [["type", "checkbox"]], [[8, "indeterminate", 0], [8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.check(_v.context.node, !_v.context.node.data.checked) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](2, null, ["\n\n          ", "\n      "]))], null, function (_ck, _v) { var currVal_0 = _v.context.node.data.indeterminate; var currVal_1 = _v.context.node.data.checked; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _v.context.node.data.name; _ck(_v, 2, 0, currVal_2); }); }
function View_CheckboxesComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["tri-state checkboxes"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](4, 0, null, null, 9, "tree-root", [], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 6).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 6).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](6, 573440, [["tree", 4]], 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], options: [1, "options"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵand */](0, [[2, 2], ["treeNodeTemplate", 2]], null, 0, null, View_CheckboxesComponent_1)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; var currVal_1 = _co.options; _ck(_v, 6, 0, currVal_0, currVal_1); }, null); }
function View_CheckboxesComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-checkboxes", [], null, null, null, View_CheckboxesComponent_0, RenderType_CheckboxesComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__checkboxes_component__["a" /* CheckboxesComponent */], [], null, null)], null, null); }
var CheckboxesComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-checkboxes", __WEBPACK_IMPORTED_MODULE_5__checkboxes_component__["a" /* CheckboxesComponent */], View_CheckboxesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/checkboxes/checkboxes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckboxesComponent = (function () {
    function CheckboxesComponent() {
        var _this = this;
        this.nodes = [
            {
                name: 'root1',
                checked: true,
            },
            {
                name: 'root2',
                checked: false,
                children: [
                    { name: 'child1', checked: false },
                    { name: 'child2', checked: false, children: [
                            { name: 'grandchild1', checked: false },
                            { name: 'grandchild2', checked: false }
                        ] }
                ]
            }
        ];
        this.actionMapping = {
            mouse: {
                click: function (tree, node) { return _this.check(node, !node.data.checked); }
            }
        };
        this.options = {
            actionMapping: this.actionMapping
        };
    }
    CheckboxesComponent.prototype.check = function (node, checked) {
        this.updateChildNodeCheckbox(node, checked);
        this.updateParentNodeCheckbox(node.realParent);
    };
    CheckboxesComponent.prototype.updateChildNodeCheckbox = function (node, checked) {
        var _this = this;
        node.data.checked = checked;
        if (node.children) {
            node.children.forEach(function (child) { return _this.updateChildNodeCheckbox(child, checked); });
        }
    };
    CheckboxesComponent.prototype.updateParentNodeCheckbox = function (node) {
        if (!node) {
            return;
        }
        var allChildrenChecked = true;
        var noChildChecked = true;
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (!child.data.checked || child.data.indeterminate) {
                allChildrenChecked = false;
            }
            if (child.data.checked) {
                noChildChecked = false;
            }
        }
        if (allChildrenChecked) {
            node.data.checked = true;
            node.data.indeterminate = false;
        }
        else if (noChildChecked) {
            node.data.checked = false;
            node.data.indeterminate = false;
        }
        else {
            node.data.checked = true;
            node.data.indeterminate = true;
        }
        this.updateParentNodeCheckbox(node.parent);
    };
    CheckboxesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-checkboxes',
            template: "\n    <h3>tri-state checkboxes</h3>\n    <tree-root\n      #tree\n      [nodes]=\"nodes\"\n      [options]=\"options\">\n\n      <ng-template #treeNodeTemplate let-node=\"node\" let-index=\"index\" >\n        <input\n          (change)=\"check(node, !node.data.checked)\"\n          type=\"checkbox\"\n          [indeterminate]=\"node.data.indeterminate\"\n          [checked]=\"node.data.checked\">\n\n          {{ node.data.name }}\n      </ng-template>\n    </tree-root>\n  ",
            styles: []
        })
    ], CheckboxesComponent);
    return CheckboxesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/drag/drag.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DragComponent */
/* unused harmony export View_DragComponent_0 */
/* unused harmony export View_DragComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drag_component__ = __webpack_require__("../../../../../src/app/drag/drag.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_DragComponent = [];
var RenderType_DragComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_DragComponent, data: {} });

function View_DragComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 6, "tree-root", [], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](3, 573440, null, 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], options: [1, "options"], focused: [2, "focused"], state: [3, "state"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; var currVal_1 = _co.options; var currVal_2 = true; var currVal_3 = _co.state; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_DragComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-drag", [], null, null, null, View_DragComponent_0, RenderType_DragComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__drag_component__["a" /* DragComponent */], [], null, null)], null, null); }
var DragComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-drag", __WEBPACK_IMPORTED_MODULE_5__drag_component__["a" /* DragComponent */], View_DragComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/drag/drag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DragComponent = (function () {
    function DragComponent() {
        this.state = {
            expandedNodeIds: {
                1: true,
                2: true
            },
            hiddenNodeIds: {},
            activeNodeIds: {}
        };
        this.options = {
            allowDrag: function (node) { return node.isLeaf; },
            getNodeClone: function (node) { return (__assign({}, node.data, { id: __WEBPACK_IMPORTED_MODULE_1_uuid___default.a.v4(), name: "copy of " + node.data.name })); }
        };
        this.nodes = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                id: 2,
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
    }
    DragComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-drag',
            template: "\n    <tree-root [state]=\"state\" [options]=\"options\" [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\n  ",
            styles: []
        })
    ], DragComponent);
    return DragComponent;
}());



/***/ }),

/***/ "../../../../../src/app/empty/empty.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_EmptyComponent */
/* unused harmony export View_EmptyComponent_0 */
/* unused harmony export View_EmptyComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__empty_component__ = __webpack_require__("../../../../../src/app/empty/empty.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_EmptyComponent = [];
var RenderType_EmptyComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_EmptyComponent, data: {} });

function View_EmptyComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 6, "tree-root", [["id", "tree1"]], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](3, 573440, [["tree1", 4]], 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], focused: [1, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](9, 0, null, null, 6, "tree-root", [["id", "tree2"]], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 11).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 11).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](11, 573440, [["tree2", 4]], 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], focused: [1, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 5, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 6, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 7, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 8, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](17, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loadNodes() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["loadNodes 1"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; var currVal_1 = true; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _co.nodes2; var currVal_3 = true; _ck(_v, 11, 0, currVal_2, currVal_3); }, null); }
function View_EmptyComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-empty", [], null, null, null, View_EmptyComponent_0, RenderType_EmptyComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__empty_component__["a" /* EmptyComponent */], [], null, null)], null, null); }
var EmptyComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-empty", __WEBPACK_IMPORTED_MODULE_5__empty_component__["a" /* EmptyComponent */], View_EmptyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/empty/empty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmptyComponent = (function () {
    function EmptyComponent() {
        this.nodes = [];
        this.nodes2 = null;
    }
    EmptyComponent.prototype.loadNodes = function () {
        this.nodes = [{ name: 'node' }];
        this.nodes2 = [{ name: 'node' }];
    };
    EmptyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-empty',
            template: "\n    <tree-root #tree1 id=\"tree1\" [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\n    <tree-root #tree2 id=\"tree2\" [focused]=\"true\" [nodes]=\"nodes2\"></tree-root>\n    <button (click)=\"loadNodes()\">loadNodes 1</button>\n  ",
            styles: []
        })
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fields/fields.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_FieldsComponent */
/* unused harmony export View_FieldsComponent_0 */
/* unused harmony export View_FieldsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fields_component__ = __webpack_require__("../../../../../src/app/fields/fields.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_FieldsComponent = [".root1Class[_ngcontent-%COMP%] { color: blue }", ".root2Class[_ngcontent-%COMP%] { color: red }"];
var RenderType_FieldsComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 0, styles: styles_FieldsComponent, data: {} });

function View_FieldsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["Overriding displayField & nodeClass"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](4, 0, null, null, 6, "tree-root", [["id", "tree1"]], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 6).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 6).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](6, 573440, null, 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], options: [1, "options"], focused: [2, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes1; var currVal_1 = _co.options1; var currVal_2 = true; _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_FieldsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-fields", [], null, null, null, View_FieldsComponent_0, RenderType_FieldsComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__fields_component__["a" /* FieldsComponent */], [], null, null)], null, null); }
var FieldsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-fields", __WEBPACK_IMPORTED_MODULE_5__fields_component__["a" /* FieldsComponent */], View_FieldsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/fields/fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FieldsComponent = (function () {
    function FieldsComponent() {
        this.nodes1 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class'
            }
        ];
        this.options1 = {
            displayField: 'title',
            nodeClass: function (node) { return node.data.className; }
        };
    }
    FieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-fields',
            template: "\n    <h3>Overriding displayField & nodeClass</h3>\n    <tree-root id=\"tree1\" [focused]=\"true\" [nodes]=\"nodes1\" [options]=\"options1\"></tree-root>\n  ",
            styles: [
                '.root1Class { color: blue }',
                '.root2Class { color: red }'
            ]
        })
    ], FieldsComponent);
    return FieldsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter/filter.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_FilterComponent */
/* unused harmony export View_FilterComponent_0 */
/* unused harmony export View_FilterComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_component__ = __webpack_require__("../../../../../src/app/filter/filter.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_FilterComponent = [];
var RenderType_FilterComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_FilterComponent, data: {} });

function View_FilterComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["Filter"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](4, 0, [["filter", 1]], null, 0, "input", [["id", "filter"], ["placeholder", "filter nodes"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; if (("keyup" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 11).treeModel.filterNodes(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 4).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](6, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 11).treeModel.clearFilter() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["Clear Filter"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](9, 0, null, null, 6, "tree-root", [], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 11).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 11).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](11, 573440, [["tree", 4]], 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], focused: [1, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](17, 0, [["filter2", 1]], null, 0, "input", [["id", "filter2"], ["placeholder", "filter nodes"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; if (("keyup" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 11).treeModel.filterNodes(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 17).value, false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](19, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["Filter By Function (Fuzzy Search)"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](22, 0, [["filter3", 1]], null, 0, "input", [["id", "filter3"], ["placeholder", "filter nodes by fuzzy search"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.filterFn(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 22).value, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 11).treeModel) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; var currVal_1 = true; _ck(_v, 11, 0, currVal_0, currVal_1); }, null); }
function View_FilterComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-filter", [], null, null, null, View_FilterComponent_0, RenderType_FilterComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__filter_component__["a" /* FilterComponent */], [], null, null)], null, null); }
var FilterComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-filter", __WEBPACK_IMPORTED_MODULE_5__filter_component__["a" /* FilterComponent */], View_FilterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterComponent = (function () {
    function FilterComponent() {
        this.nodes = [
            {
                name: 'North America',
                children: [
                    { name: 'United States', children: [
                            { name: 'New York' },
                            { name: 'California' },
                            { name: 'Florida' }
                        ] },
                    { name: 'Canada' }
                ]
            },
            {
                name: 'South America',
                children: [
                    { name: 'Argentina', children: [] },
                    { name: 'Brazil' }
                ]
            },
            {
                name: 'Europe',
                children: [
                    { name: 'England' },
                    { name: 'Germany' },
                    { name: 'France' },
                    { name: 'Italy' },
                    { name: 'Spain' }
                ]
            }
        ];
    }
    FilterComponent.prototype.filterFn = function (value, treeModel) {
        treeModel.filterNodes(function (node) { return fuzzysearch(value, node.data.name); });
    };
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-filter',
            template: "\n    <h2>Filter</h2>\n    <input id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"filter nodes\"/>\n    <button (click)=\"tree.treeModel.clearFilter()\">Clear Filter</button>\n    <tree-root #tree [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\n\n    <input id=\"filter2\" #filter2 (keyup)=\"tree.treeModel.filterNodes(filter2.value, false)\" placeholder=\"filter nodes\"/>\n\n    <h3>Filter By Function (Fuzzy Search)</h3>\n    <input id=\"filter3\" #filter3 (keyup)=\"filterFn(filter3.value, tree.treeModel)\" placeholder=\"filter nodes by fuzzy search\"/>\n ",
            styles: []
        })
    ], FilterComponent);
    return FilterComponent;
}());

function fuzzysearch(needle, haystack) {
    var haystackLC = haystack.toLowerCase();
    var needleLC = needle.toLowerCase();
    var hlen = haystack.length;
    var nlen = needleLC.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needleLC === haystackLC;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needleLC.charCodeAt(i);
        while (j < hlen) {
            if (haystackLC.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}


/***/ }),

/***/ "../../../../../src/app/fulltree/fulltree.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_FullTreeComponent */
/* unused harmony export View_FullTreeComponent_0 */
/* unused harmony export View_FullTreeComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullTreeComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fulltree_component__ = __webpack_require__("../../../../../src/app/fulltree/fulltree.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 







var styles_FullTreeComponent = ["button[_ngcontent-%COMP%]: {\n        line - height: 24px;\n        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);\n        border: none;\n        border-radius: 2px;\n        background: #A3D9F5;\n        cursor: pointer;\n        margin: 0 3px;\n      }"];
var RenderType_FullTreeComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 0, styles: styles_FullTreeComponent, data: {} });

function View_FullTreeComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 1, "span", [], [[8, "title", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](2, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](4, 0, null, null, 1, "span", [["class", "pull-right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](7, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.go($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["Custom Action"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵinlineInterpolate */](1, "", _v.context.$implicit.data.subTitle, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.data.name; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.childrenCount(_v.context.$implicit); _ck(_v, 5, 0, currVal_2); }); }
function View_FullTreeComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["Loading, please hold...."]))], null, null); }
function View_FullTreeComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 7, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](3, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */], [[8, null], [8, null]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](7, 0, [["filter", 1]], null, 0, "input", [["placeholder", "filter nodes"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.filterNodes(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 7).value, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](10, 0, null, null, 14, "div", [["style", "height: 400px; width: 400px; overflow: hidden;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](12, 0, null, null, 11, "tree-root", [], null, [[null, "event"], [null, "initialized"], ["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } if (("event" === en)) {
        var pd_2 = (_co.onEvent($event) !== false);
        ad = (pd_2 && ad);
    } if (("initialized" === en)) {
        var pd_3 = (_co.onInitialized(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14)) !== false);
        ad = (pd_3 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](14, 573440, [["tree", 4]], 4, __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_5_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], options: [1, "options"], focused: [2, "focused"] }, { initialized: "initialized", event: "event" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵand */](0, [[2, 2], ["treeNodeTemplate", 2]], null, 0, null, View_FullTreeComponent_1)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵand */](0, [[1, 2], ["loadingTemplate", 2]], null, 0, null, View_FullTreeComponent_2)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["Keys:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  down | up | left | right | space | enter\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["Mouse:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  click to select | shift+click to select multi\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](34, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["API:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](37, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.focusNextNode() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["next node"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](40, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.focusPreviousNode() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["previous node"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](43, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.focusDrillDown() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["drill down"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](46, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.focusDrillUp() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["drill up"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](49, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.customTemplateStringOptions.allowDrag = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["allowDrag"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](52, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](54, 0, null, null, 1, "button", [], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.getFocusedNode().toggleActivated() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](55, null, ["\n    ", "\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](57, 0, null, null, 1, "button", [], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.getFocusedNode().toggleExpanded() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](58, null, ["\n    ", "\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](60, 0, null, null, 1, "button", [], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.getFocusedNode().blur() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    blur\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](63, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addNode(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    Add Node\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](66, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.activateSubSub(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    Activate inner node\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](69, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.expandAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    Expand All\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](72, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.collapseAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    Collapse All\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](75, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.activeNodes(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    getActiveNodes()\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.nodes; var currVal_8 = _co.customTemplateStringOptions; var currVal_9 = true; _ck(_v, 14, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.getFocusedNode(); _ck(_v, 54, 0, currVal_10); var tmp_11_0 = null; var currVal_11 = ((((tmp_11_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.getFocusedNode()) == null) ? null : tmp_11_0.isActive) ? "deactivate" : "activate"); _ck(_v, 55, 0, currVal_11); var currVal_12 = !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.getFocusedNode(); _ck(_v, 57, 0, currVal_12); var tmp_13_0 = null; var currVal_13 = ((((tmp_13_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.getFocusedNode()) == null) ? null : tmp_13_0.isExpanded) ? "collapse" : "expand"); _ck(_v, 58, 0, currVal_13); var currVal_14 = !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 14).treeModel.getFocusedNode(); _ck(_v, 60, 0, currVal_14); }); }
function View_FullTreeComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-fulltree", [], null, null, null, View_FullTreeComponent_0, RenderType_FullTreeComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__fulltree_component__["a" /* FullTreeComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FullTreeComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-fulltree", __WEBPACK_IMPORTED_MODULE_6__fulltree_component__["a" /* FullTreeComponent */], View_FullTreeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/fulltree/fulltree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullTreeComponent; });
/* unused harmony export ɵ0 */
/* unused harmony export ɵ1 */
/* unused harmony export ɵ2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ɵ0 = function (tree, node, $event) {
    $event.preventDefault();
    alert("context menu for " + node.data.name);
}, ɵ1 = function (tree, node, $event) {
    if (node.hasChildren)
        __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
}, ɵ2 = function (tree, node, $event) {
    $event.shiftKey
        ? __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_SELECTED_MULTI(tree, node, $event)
        : __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_SELECTED(tree, node, $event);
};
var actionMapping = {
    mouse: {
        contextMenu: ɵ0,
        dblClick: ɵ1,
        click: ɵ2
    },
    keys: (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["a" /* KEYS */].ENTER] = function (tree, node, $event) { return alert("This is " + node.data.name); },
        _a)
};
var FullTreeComponent = (function () {
    function FullTreeComponent() {
        this.nodes2 = [{ name: 'root' }, { name: 'root2' }];
        this.asyncChildren = new Array(4).fill(null).map(function (item, n) { return ({
            name: 'async child2.' + n,
            subTitle: 'async child ' + n,
            hasChildren: n < 5
        }); });
        this.customTemplateStringOptions = {
            // displayField: 'subTitle',
            isExpandedField: 'expanded',
            idField: 'uuid',
            getChildren: this.getChildren.bind(this),
            actionMapping: actionMapping,
            nodeHeight: 23,
            allowDrag: function (node) {
                // console.log('allowDrag?');
                return true;
            },
            allowDrop: function (node) {
                // console.log('allowDrop?');
                return true;
            },
            useVirtualScroll: true,
            animateExpand: true,
            animateSpeed: 30,
            animateAcceleration: 1.2
        };
    }
    FullTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.nodes = [
                {
                    expanded: true,
                    name: 'root expanded',
                    subTitle: 'the root',
                    children: [
                        {
                            name: 'child1',
                            subTitle: 'a good child',
                            hasChildren: false
                        }, {
                            name: 'child2',
                            subTitle: 'a bad child',
                            hasChildren: false
                        }
                    ]
                },
                {
                    name: 'root2',
                    subTitle: 'the second root',
                    children: [
                        {
                            name: 'child2.1',
                            subTitle: 'new and improved',
                            uuid: '11',
                            hasChildren: false
                        }, {
                            name: 'child2.2',
                            subTitle: 'new and improved2',
                            children: [
                                {
                                    uuid: 1001,
                                    name: 'subsub',
                                    subTitle: 'subsub',
                                    hasChildren: false
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'asyncroot',
                    hasChildren: true
                }
            ];
            var _loop_1 = function (i) {
                _this.nodes.push({
                    name: "rootDynamic" + i,
                    subTitle: "root created dynamically " + i,
                    children: new Array(10).fill(null).map(function (item, n) { return ({
                        name: "rootChildDynamic" + i + "." + n,
                        subTitle: "rootChildDynamicTitle" + i + "." + n
                    }); })
                });
            };
            for (var i = 0; i < 1000; i++) {
                _loop_1(i);
            }
        }, 1);
    };
    FullTreeComponent.prototype.getChildren = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.asyncChildren.map(function (c) {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })); }, 2000);
        });
    };
    FullTreeComponent.prototype.addNode = function (tree) {
        this.nodes[0].children.push({
            name: 'a new child'
        });
        tree.treeModel.update();
    };
    FullTreeComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    FullTreeComponent.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text);
    };
    FullTreeComponent.prototype.activateSubSub = function (tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    FullTreeComponent.prototype.onEvent = function (event) {
        console.log(event);
    };
    FullTreeComponent.prototype.onInitialized = function (tree) {
        // tree.treeModel.getNodeById('11').setActiveAndVisible();
    };
    FullTreeComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    FullTreeComponent.prototype.activeNodes = function (treeModel) {
        console.log(treeModel.activeNodes);
    };
    FullTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-fulltree',
            styles: [
                "button: {\n        line - height: 24px;\n        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);\n        border: none;\n        border-radius: 2px;\n        background: #A3D9F5;\n        cursor: pointer;\n        margin: 0 3px;\n      }"
            ],
            template: "\n  <form>\n    <input #filter (keyup)=\"filterNodes(filter.value, tree)\" placeholder=\"filter nodes\"/>\n  </form>\n  <div style=\"height: 400px; width: 400px; overflow: hidden;\">\n\n    <tree-root\n      #tree\n      [nodes]=\"nodes\"\n      [options]=\"customTemplateStringOptions\"\n      [focused]=\"true\"\n      (event)=\"onEvent($event)\"\n      (initialized)=\"onInitialized(tree)\"\n      \n    >\n      <ng-template #treeNodeTemplate let-node>\n        <span title=\"{{node.data.subTitle}}\">{{ node.data.name }}</span>\n        <span class=\"pull-right\">{{ childrenCount(node) }}</span>\n        <button (click)=\"go($event)\">Custom Action</button>\n      </ng-template>\n      <ng-template #loadingTemplate>Loading, please hold....</ng-template>\n    </tree-root>\n  </div>\n  <br>\n  <p>Keys:</p>\n  down | up | left | right | space | enter\n  <p>Mouse:</p>\n  click to select | shift+click to select multi\n  <p>API:</p>\n  <button (click)=\"tree.treeModel.focusNextNode()\">next node</button>\n  <button (click)=\"tree.treeModel.focusPreviousNode()\">previous node</button>\n  <button (click)=\"tree.treeModel.focusDrillDown()\">drill down</button>\n  <button (click)=\"tree.treeModel.focusDrillUp()\">drill up</button>\n  <button (click)=\"customTemplateStringOptions.allowDrag = true\">allowDrag</button>\n  <p></p>\n  <button\n    [disabled]=\"!tree.treeModel.getFocusedNode()\"\n    (click)=\"tree.treeModel.getFocusedNode().toggleActivated()\">\n    {{ tree.treeModel.getFocusedNode()?.isActive ? 'deactivate' : 'activate' }}\n  </button>\n  <button\n    [disabled]=\"!tree.treeModel.getFocusedNode()\"\n    (click)=\"tree.treeModel.getFocusedNode().toggleExpanded()\">\n    {{ tree.treeModel.getFocusedNode()?.isExpanded ? 'collapse' : 'expand' }}\n  </button>\n  <button\n    [disabled]=\"!tree.treeModel.getFocusedNode()\"\n    (click)=\"tree.treeModel.getFocusedNode().blur()\">\n    blur\n  </button>\n  <button\n    (click)=\"addNode(tree)\">\n    Add Node\n  </button>\n  <button\n    (click)=\"activateSubSub(tree)\">\n    Activate inner node\n  </button>\n  <button\n    (click)=\"tree.treeModel.expandAll()\">\n    Expand All\n  </button>\n  <button\n    (click)=\"tree.treeModel.collapseAll()\">\n    Collapse All\n  </button>\n  <button\n    (click)=\"activeNodes(tree.treeModel)\">\n    getActiveNodes()\n  </button>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], FullTreeComponent);
    return FullTreeComponent;
}());


var _a;


/***/ }),

/***/ "../../../../../src/app/rtl/rtl-tree.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_RtlTreeComponent */
/* unused harmony export View_RtlTreeComponent_0 */
/* unused harmony export View_RtlTreeComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtlTreeComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rtl_tree_component__ = __webpack_require__("../../../../../src/app/rtl/rtl-tree.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_RtlTreeComponent = [];
var RenderType_RtlTreeComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_RtlTreeComponent, data: {} });

function View_RtlTreeComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 6, "tree-root", [], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 3).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](3, 573440, null, 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], options: [1, "options"], focused: [2, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; var currVal_1 = _co.options; var currVal_2 = true; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_RtlTreeComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-basictree", [], null, null, null, View_RtlTreeComponent_0, RenderType_RtlTreeComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__rtl_tree_component__["a" /* RtlTreeComponent */], [], null, null)], null, null); }
var RtlTreeComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-basictree", __WEBPACK_IMPORTED_MODULE_5__rtl_tree_component__["a" /* RtlTreeComponent */], View_RtlTreeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/rtl/rtl-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtlTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RtlTreeComponent = (function () {
    function RtlTreeComponent() {
        this.options = {
            rtl: true
        };
        this.nodes = [
            {
                name: 'עץ תיקיות',
                children: [
                    { name: 'קובץ 1' },
                    { name: 'קובץ 2' }
                ]
            },
            {
                name: 'עוד עץ',
                children: [
                    { name: 'עלה', children: [] },
                    { name: 'ענף', children: [
                            { name: 'בן של ענף' }
                        ] }
                ]
            }
        ];
    }
    RtlTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-basictree',
            template: "\n    <tree-root [focused]=\"true\" [nodes]=\"nodes\" [options]=\"options\"></tree-root>\n  ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None,
            styles: []
        })
    ], RtlTreeComponent);
    return RtlTreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/save-restore/save-restore.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_SaveRestoreComponent */
/* unused harmony export View_SaveRestoreComponent_0 */
/* unused harmony export View_SaveRestoreComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveRestoreComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__save_restore_component__ = __webpack_require__("../../../../../src/app/save-restore/save-restore.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_SaveRestoreComponent = [];
var RenderType_SaveRestoreComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 2, styles: styles_SaveRestoreComponent, data: {} });

function View_SaveRestoreComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, [["filter", 1]], null, 0, "input", [["id", "filter"], ["placeholder", "filter nodes"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; if (("keyup" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).treeModel.filterNodes(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 1).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](3, 0, null, null, 6, "tree-root", [], null, [[null, "stateChange"], ["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 5).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } if (("stateChange" === en)) {
        var pd_2 = (_co.setState($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](5, 573440, [["tree", 4]], 4, __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], focused: [1, "focused"], state: [2, "state"] }, { stateChange: "stateChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; var currVal_1 = true; var currVal_2 = _co.state; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SaveRestoreComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-saverestore", [], null, null, null, View_SaveRestoreComponent_0, RenderType_SaveRestoreComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__save_restore_component__["a" /* SaveRestoreComponent */], [], null, null)], null, null); }
var SaveRestoreComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-saverestore", __WEBPACK_IMPORTED_MODULE_5__save_restore_component__["a" /* SaveRestoreComponent */], View_SaveRestoreComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/save-restore/save-restore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveRestoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SaveRestoreComponent = (function () {
    function SaveRestoreComponent() {
        this.state = localStorage.treeState && JSON.parse(localStorage.treeState);
        this.nodes = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { id: 2, name: 'child1' },
                    { id: 3, name: 'child2' }
                ]
            },
            {
                id: 4,
                name: 'root2',
                children: [
                    { id: 5, name: 'child2.1', children: [] },
                    { id: 6, name: 'child2.2', children: [
                            { id: 7, name: 'grandchild2.2.1' }
                        ] }
                ]
            }
        ];
    }
    SaveRestoreComponent.prototype.setState = function (state) {
        localStorage.treeState = JSON.stringify(state);
    };
    SaveRestoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-saverestore',
            template: "\n    <input id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"filter nodes\"/>\n    <tree-root [state]=\"state\" (stateChange)=\"setState($event)\" #tree [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\n  ",
            styles: []
        })
    ], SaveRestoreComponent);
    return SaveRestoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/templates/templates.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_TemplatesComponent */
/* unused harmony export View_TemplatesComponent_0 */
/* unused harmony export View_TemplatesComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_node_expander_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-expander.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_components_tree_node_expander_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-expander.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_tree_component_dist_components_tree_node_children_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-children.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_components_tree_node_children_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-children.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_tree_component_dist_components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_tree_component_dist_models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templates_component__ = __webpack_require__("../../../../../src/app/templates/templates.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 










var styles_TemplatesComponent = [".root1Class[_ngcontent-%COMP%] { color: blue }", ".root2Class[_ngcontent-%COMP%] { color: red }"];
var RenderType_TemplatesComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 0, styles: styles_TemplatesComponent, data: {} });

function View_TemplatesComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](2, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](4, 0, null, null, 1, "span", [], [[8, "className", 0], [2, "title", null]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "]))], null, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.data.className + "Index"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.index; _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.data.className; var currVal_3 = true; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.data.title; _ck(_v, 5, 0, currVal_4); }); }
function View_TemplatesComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](2, null, ["Loading ", "..."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "]))], null, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.data.className + "Loading"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.data.title; _ck(_v, 2, 0, currVal_1); }); }
function View_TemplatesComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](2, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["      \n         "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](4, 0, null, null, 0, "input", [["type", "checkbox"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\u2192"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n         "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](8, 0, null, null, 1, "span", [], [[8, "className", 0], [2, "title", null]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](9, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "]))], null, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.data.className + "Index"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.index; _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.data.className; var currVal_3 = true; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.data.title; _ck(_v, 9, 0, currVal_4); }); }
function View_TemplatesComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 18, "div", [["class", "tree-node"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](3, 0, null, null, 0, "input", [["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_v.context.$implicit.toggleActivated(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](5, 0, null, null, 1, "tree-node-expander", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_node_expander_component_ngfactory__["b" /* View_TreeNodeExpanderComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_tree_component_dist_components_tree_node_expander_component_ngfactory__["a" /* RenderType_TreeNodeExpanderComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](6, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2_angular_tree_component_dist_components_tree_node_expander_component__["a" /* TreeNodeExpanderComponent */], [], { node: [0, "node"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](8, 0, null, null, 7, "div", [["class", "node-content-wrapper"]], [[2, "node-content-wrapper-active", null], [2, "node-content-wrapper-focused", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.toggleActivated(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](10, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](13, 0, null, null, 1, "span", [], [[8, "className", 0], [2, "title", null]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](14, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](17, 0, null, null, 1, "tree-node-children", [], null, null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_tree_component_dist_components_tree_node_children_component_ngfactory__["b" /* View_TreeNodeChildrenComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_tree_component_dist_components_tree_node_children_component_ngfactory__["a" /* RenderType_TreeNodeChildrenComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](18, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4_angular_tree_component_dist_components_tree_node_children_component__["a" /* TreeNodeChildrenComponent */], [], { node: [0, "node"], templates: [1, "templates"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit; _ck(_v, 6, 0, currVal_1); var currVal_9 = _v.context.$implicit; var currVal_10 = _v.context.templates; _ck(_v, 18, 0, currVal_9, currVal_10); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.isActive; _ck(_v, 3, 0, currVal_0); var currVal_2 = _v.context.$implicit.isActive; var currVal_3 = _v.context.$implicit.isFocused; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = (_v.context.$implicit.data.className + "Index"); _ck(_v, 10, 0, currVal_4); var currVal_5 = _v.context.index; _ck(_v, 11, 0, currVal_5); var currVal_6 = _v.context.$implicit.data.className; var currVal_7 = true; _ck(_v, 13, 0, currVal_6, currVal_7); var currVal_8 = _v.context.$implicit.data.title; _ck(_v, 14, 0, currVal_8); }); }
function View_TemplatesComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["treeNodeTemplate and loadingTemplate"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](4, 0, null, null, 11, "tree-root", [["id", "tree1"]], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 6).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 6).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](6, 573440, null, 4, __WEBPACK_IMPORTED_MODULE_7_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_8_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], options: [1, "options"], focused: [2, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 1, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 2, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 3, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 4, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵand */](0, [[2, 2], ["treeNodeTemplate", 2]], null, 0, null, View_TemplatesComponent_1)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵand */](0, [[1, 2], ["loadingTemplate", 2]], null, 0, null, View_TemplatesComponent_2)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    \n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](17, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["treeNodeWrapper"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](20, 0, null, null, 9, "tree-root", [["id", "tree3"]], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 22).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 22).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](22, 573440, null, 4, __WEBPACK_IMPORTED_MODULE_7_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_8_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], options: [1, "options"], focused: [2, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 5, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 6, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 7, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 8, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵand */](0, [[7, 2], ["treeNodeWrapperTemplate", 2]], null, 0, null, View_TemplatesComponent_3)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](31, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["treeNodeFullTemplate"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](34, 0, null, null, 9, "tree-root", [["id", "tree2"]], null, [["body", "keydown"], ["body", "mousedown"]], function (_v, en, $event) { var ad = true; if (("body:keydown" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 36).onKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("body:mousedown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵnov */](_v, 36).onMousedown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["b" /* View_TreeComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_tree_component_dist_components_tree_component_ngfactory__["a" /* RenderType_TreeComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](36, 573440, null, 4, __WEBPACK_IMPORTED_MODULE_7_angular_tree_component_dist_components_tree_component__["a" /* TreeComponent */], [__WEBPACK_IMPORTED_MODULE_6_angular_tree_component_dist_models_tree_model__["a" /* TreeModel */], __WEBPACK_IMPORTED_MODULE_8_angular_tree_component_dist_models_tree_dragged_element_model__["a" /* TreeDraggedElement */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]], { nodes: [0, "nodes"], focused: [1, "focused"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 9, { loadingTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 10, { treeNodeTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 11, { treeNodeWrapperTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](335544320, 12, { treeNodeFullTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵand */](0, [[12, 2], ["treeNodeFullTemplate", 2]], null, 0, null, View_TemplatesComponent_4)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes1; var currVal_1 = _co.options1; var currVal_2 = true; _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.nodes2; var currVal_4 = _co.options1; var currVal_5 = true; _ck(_v, 22, 0, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.nodes2; var currVal_7 = true; _ck(_v, 36, 0, currVal_6, currVal_7); }, null); }
function View_TemplatesComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, 0, null, null, 1, "app-templates", [], null, null, null, View_TemplatesComponent_0, RenderType_TemplatesComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__templates_component__["a" /* TemplatesComponent */], [], null, null)], null, null); }
var TemplatesComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]("app-templates", __WEBPACK_IMPORTED_MODULE_9__templates_component__["a" /* TemplatesComponent */], View_TemplatesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/templates/templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemplatesComponent = (function () {
    function TemplatesComponent() {
        this.nodes1 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class',
                hasChildren: true
            }
        ];
        this.nodes2 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class',
                children: [
                    { title: 'child1', className: 'child1Class' }
                ]
            }
        ];
        this.options1 = {
            getChildren: function () { return new Promise(function (resolve, reject) { }); }
        };
        this.options0 = {
            displayField: 'title',
            nodeClass: function (node) { return node.data.title + "Class"; }
        };
    }
    TemplatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-templates',
            template: "\n    <h3>treeNodeTemplate and loadingTemplate</h3>\n    <tree-root id=\"tree1\" [focused]=\"true\" [nodes]=\"nodes1\" [options]=\"options1\">\n      <ng-template #treeNodeTemplate let-node let-index=\"index\">\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\n        <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\n      </ng-template>\n      <ng-template #loadingTemplate let-node>\n        <div [class]=\"node.data.className + 'Loading'\">Loading {{ node.data.title }}...</div>\n      </ng-template>\n    </tree-root>\n    \n    <h3>treeNodeWrapper</h3>\n    <tree-root id=\"tree3\" [focused]=\"true\" [nodes]=\"nodes2\" [options]=\"options1\">\n      <ng-template #treeNodeWrapperTemplate let-node let-index=\"index\">\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>      \n         <input type=\"checkbox\"><span>&rarr;</span>\n         <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\n      </ng-template>\n    </tree-root>\n\n    <h3>treeNodeFullTemplate</h3>\n    <tree-root id=\"tree2\" [focused]=\"true\" [nodes]=\"nodes2\">\n      <ng-template #treeNodeFullTemplate let-node let-index=\"index\" let-templates=\"templates\">\n        <div class=\"tree-node\">\n          <input type=\"checkbox\" [checked]=\"node.isActive\" (change)=\"node.toggleActivated(true)\" />\n          <tree-node-expander [node]=\"node\"></tree-node-expander>\n          <div\n            class=\"node-content-wrapper\"\n            [class.node-content-wrapper-active]=\"node.isActive\"\n            [class.node-content-wrapper-focused]=\"node.isFocused\"\n            (click)=\"node.toggleActivated(true)\">\n            <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\n            <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\n          </div>\n          <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\n        </div>\n      </ng-template>\n    </tree-root>\n  ",
            styles: [
                '.root1Class { color: blue }',
                '.root2Class { color: red }'
            ]
        })
    ], TemplatesComponent);
    return TemplatesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__ = __webpack_require__("../../../../../src/app/app.module.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["i" /* platformBrowser */]().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__["a" /* AppModuleNgFactory */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map