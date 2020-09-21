(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Directives/line-manipulator.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/Directives/line-manipulator.directive.ts ***!
  \**********************************************************/
/*! exports provided: LineManipulatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineManipulatorDirective", function() { return LineManipulatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LineManipulatorDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngOnInit() {
        if (this.codeLine.activeLine) {
            this.codeLine.activeLine.subscribe(value => {
                this.elRef.nativeElement.scrollIntoView();
                this.backgroundColor = this.codeLine.lineBackgroundColor;
            });
        }
    }
}
LineManipulatorDirective.ɵfac = function LineManipulatorDirective_Factory(t) { return new (t || LineManipulatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LineManipulatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LineManipulatorDirective, selectors: [["", "appLineManipulator", ""]], hostVars: 2, hostBindings: function LineManipulatorDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
    } }, inputs: { codeLine: "codeLine" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineManipulatorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appLineManipulator]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { codeLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundColor']
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_trace_trace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/trace/trace.component */ "./src/app/components/trace/trace.component.ts");
/* harmony import */ var _components_trace_widget_side_widget_side_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/trace/widget-side/widget-side.component */ "./src/app/components/trace/widget-side/widget-side.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'trace' },
    { path: 'trace', component: _components_trace_trace_component__WEBPACK_IMPORTED_MODULE_2__["TraceComponent"] },
    { path: 'shit', component: _components_trace_widget_side_widget_side_component__WEBPACK_IMPORTED_MODULE_3__["WidgetSideComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'AngFX';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_trace_code_side_code_side_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/trace/code-side/code-side.component */ "./src/app/components/trace/code-side/code-side.component.ts");
/* harmony import */ var _components_trace_code_side_code_line_code_line_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/trace/code-side/code-line/code-line.component */ "./src/app/components/trace/code-side/code-line/code-line.component.ts");
/* harmony import */ var _components_trace_trace_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/trace/trace.component */ "./src/app/components/trace/trace.component.ts");
/* harmony import */ var _components_trace_widget_side_widget_side_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/trace/widget-side/widget-side.component */ "./src/app/components/trace/widget-side/widget-side.component.ts");
/* harmony import */ var _components_trace_widget_side_file_widget_file_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/trace/widget-side/file-widget/file-widget.component */ "./src/app/components/trace/widget-side/file-widget/file-widget.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Directives_line_manipulator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Directives/line-manipulator.directive */ "./src/app/Directives/line-manipulator.directive.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_trace_code_side_code_side_component__WEBPACK_IMPORTED_MODULE_5__["CodeSideComponent"],
        _components_trace_code_side_code_line_code_line_component__WEBPACK_IMPORTED_MODULE_6__["CodeLineComponent"],
        _components_trace_trace_component__WEBPACK_IMPORTED_MODULE_7__["TraceComponent"],
        _components_trace_widget_side_widget_side_component__WEBPACK_IMPORTED_MODULE_8__["WidgetSideComponent"],
        _components_trace_widget_side_file_widget_file_widget_component__WEBPACK_IMPORTED_MODULE_9__["FileWidgetComponent"],
        _Directives_line_manipulator_directive__WEBPACK_IMPORTED_MODULE_11__["LineManipulatorDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_trace_code_side_code_side_component__WEBPACK_IMPORTED_MODULE_5__["CodeSideComponent"],
                    _components_trace_code_side_code_line_code_line_component__WEBPACK_IMPORTED_MODULE_6__["CodeLineComponent"],
                    _components_trace_trace_component__WEBPACK_IMPORTED_MODULE_7__["TraceComponent"],
                    _components_trace_widget_side_widget_side_component__WEBPACK_IMPORTED_MODULE_8__["WidgetSideComponent"],
                    _components_trace_widget_side_file_widget_file_widget_component__WEBPACK_IMPORTED_MODULE_9__["FileWidgetComponent"],
                    _Directives_line_manipulator_directive__WEBPACK_IMPORTED_MODULE_11__["LineManipulatorDirective"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/trace/code-side/code-line/code-line.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/trace/code-side/code-line/code-line.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CodeLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLineComponent", function() { return CodeLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_line_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/line.service */ "./src/app/services/line.service.ts");
/* harmony import */ var _Directives_line_manipulator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Directives/line-manipulator.directive */ "./src/app/Directives/line-manipulator.directive.ts");




class CodeLineComponent {
    constructor(lineService) {
        this.lineService = lineService;
    }
    ngOnInit() {
        this.backgroundColor = this.setBackgroundColor;
    }
}
CodeLineComponent.ɵfac = function CodeLineComponent_Factory(t) { return new (t || CodeLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"])); };
CodeLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeLineComponent, selectors: [["app-code-line"]], hostVars: 2, hostBindings: function CodeLineComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
    } }, inputs: { setBackgroundColor: "setBackgroundColor", codeLine: "codeLine" }, decls: 10, vars: 5, consts: [["appLineManipulator", "", 1, "code-line", 3, "codeLine"], [1, "line-num"], [1, "code"], [1, "statement"], [1, "order"]], template: function CodeLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("codeLine", ctx.codeLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.codeLine.lineNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.codeLine.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.codeLine.statement, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.codeLine.order, " ");
    } }, directives: [_Directives_line_manipulator_directive__WEBPACK_IMPORTED_MODULE_2__["LineManipulatorDirective"]], styles: [".code-line[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 65px 700px 65px 65px;\r\n  grid-template-areas: \"lineNum code order statement\";\r\n  align-items: center;\r\n}\r\n\r\n.line-num[_ngcontent-%COMP%] {\r\n  grid-column: 1 / 2;\r\n  text-align: center;\r\n}\r\n\r\n.code[_ngcontent-%COMP%] {\r\n  grid-column: 2 / 3;\r\n}\r\n\r\n.order[_ngcontent-%COMP%] {\r\n  grid-column: 3 / 4;\r\n  text-align: right;\r\n}\r\n\r\n.statement[_ngcontent-%COMP%] {\r\n  grid-column: 4 / 5;\r\n  text-align: right;\r\n}\r\n\r\npre[_ngcontent-%COMP%] {\r\n  font-family: Consolas, serif; font-style: normal; font-variant: normal; font-weight: 400;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1.2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS9jb2RlLXNpZGUvY29kZS1saW5lL2NvZGUtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxtREFBbUQ7RUFDbkQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCO0VBQ3hGLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFjZS9jb2RlLXNpZGUvY29kZS1saW5lL2NvZGUtbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGUtbGluZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY1cHggNzAwcHggNjVweCA2NXB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibGluZU51bSBjb2RlIG9yZGVyIHN0YXRlbWVudFwiO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5lLW51bSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcclxufVxyXG5cclxuLm9yZGVyIHtcclxuICBncmlkLWNvbHVtbjogMyAvIDQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQge1xyXG4gIGdyaWQtY29sdW1uOiA0IC8gNTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxucHJlIHtcclxuICBmb250LWZhbWlseTogQ29uc29sYXMsIHNlcmlmOyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeLineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-code-line',
                templateUrl: './code-line.component.html',
                styleUrls: ['./code-line.component.css']
            }]
    }], function () { return [{ type: _services_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundColor']
        }], setBackgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], codeLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/trace/code-side/code-side.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/trace/code-side/code-side.component.ts ***!
  \*******************************************************************/
/*! exports provided: CodeSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSideComponent", function() { return CodeSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_code_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/code-http.service */ "./src/app/services/code-http.service.ts");
/* harmony import */ var _services_line_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/line.service */ "./src/app/services/line.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _code_line_code_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-line/code-line.component */ "./src/app/components/trace/code-side/code-line/code-line.component.ts");






function CodeSideComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-code-line", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const codeLine_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("codeLine", codeLine_r1);
} }
class CodeSideComponent {
    constructor(codeHttpService, lineService) {
        this.codeHttpService = codeHttpService;
        this.lineService = lineService;
    }
    ngOnInit() {
        this.codeModel = this.lineService.codeModel;
    }
}
CodeSideComponent.ɵfac = function CodeSideComponent_Factory(t) { return new (t || CodeSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_code_http_service__WEBPACK_IMPORTED_MODULE_1__["CodeHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_line_service__WEBPACK_IMPORTED_MODULE_2__["LineService"])); };
CodeSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeSideComponent, selectors: [["app-code-side"]], decls: 2, vars: 1, consts: [[1, "code-side-container"], [4, "ngFor", "ngForOf"], [3, "codeLine"]], template: function CodeSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodeSideComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx == null ? null : ctx.codeModel == null ? null : ctx.codeModel.codeLines);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _code_line_code_line_component__WEBPACK_IMPORTED_MODULE_4__["CodeLineComponent"]], styles: [".code-side-container[_ngcontent-%COMP%] {\r\n  width: 955px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS9jb2RlLXNpZGUvY29kZS1zaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFjZS9jb2RlLXNpZGUvY29kZS1zaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvZGUtc2lkZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5NTVweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-code-side',
                templateUrl: './code-side.component.html',
                styleUrls: ['./code-side.component.css']
            }]
    }], function () { return [{ type: _services_code_http_service__WEBPACK_IMPORTED_MODULE_1__["CodeHttpService"] }, { type: _services_line_service__WEBPACK_IMPORTED_MODULE_2__["LineService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/trace/trace.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/trace/trace.component.ts ***!
  \*****************************************************/
/*! exports provided: TraceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceComponent", function() { return TraceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _code_side_code_side_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-side/code-side.component */ "./src/app/components/trace/code-side/code-side.component.ts");
/* harmony import */ var _widget_side_widget_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget-side/widget-side.component */ "./src/app/components/trace/widget-side/widget-side.component.ts");




class TraceComponent {
    constructor() { }
    ngOnInit() {
    }
}
TraceComponent.ɵfac = function TraceComponent_Factory(t) { return new (t || TraceComponent)(); };
TraceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TraceComponent, selectors: [["app-trace"]], decls: 5, vars: 0, consts: [[1, "trace-container"], [1, "trace-code-side"], [1, "trace-widget-side"]], template: function TraceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-code-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-widget-side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_code_side_code_side_component__WEBPACK_IMPORTED_MODULE_1__["CodeSideComponent"], _widget_side_widget_side_component__WEBPACK_IMPORTED_MODULE_2__["WidgetSideComponent"]], styles: [".trace-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 995px 800px;\r\n  grid-template-areas: \"code-side widget-side\";\r\n  justify-content: center;\r\n}\r\n\r\n.trace-code-side[_ngcontent-%COMP%] {\r\n  grid-area: code-side;\r\n}\r\n\r\n.trace-widget-side[_ngcontent-%COMP%] {\r\n  grid-area: widget-side;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS90cmFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw0Q0FBNEM7RUFDNUMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFjZS90cmFjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYWNlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDk5NXB4IDgwMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY29kZS1zaWRlIHdpZGdldC1zaWRlXCI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFjZS1jb2RlLXNpZGUge1xyXG4gIGdyaWQtYXJlYTogY29kZS1zaWRlO1xyXG59XHJcblxyXG4udHJhY2Utd2lkZ2V0LXNpZGUge1xyXG4gIGdyaWQtYXJlYTogd2lkZ2V0LXNpZGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trace',
                templateUrl: './trace.component.html',
                styleUrls: ['./trace.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/trace/widget-side/file-widget/file-widget.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/trace/widget-side/file-widget/file-widget.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FileWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWidgetComponent", function() { return FileWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_code_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/code-http.service */ "./src/app/services/code-http.service.ts");
/* harmony import */ var _services_line_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/line.service */ "./src/app/services/line.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = ["coblist"];
class FileWidgetComponent {
    constructor(codeHttpService, lineService) {
        this.codeHttpService = codeHttpService;
        this.lineService = lineService;
    }
    ngOnInit() {
        console.log(this.lineService.codeModel.codeLines);
    }
    getCoblist() {
        if (this.coblistPath) {
            this.codeHttpService.postCooblistFileLocation({ filePath: this.coblistPath }).subscribe(value => {
                this.lineService.codeModel.codeLines = value.codeLines;
                this.lineService.generateOmniStatements();
            });
        }
    }
    getTrace() {
        if (this.tracePath) {
            this.codeHttpService.postTraceFileLocation({ filePath: this.tracePath }).subscribe(value => {
                this.lineService.codeModel.traceList = value.traceList;
                this.lineService.setTraceToStatement();
            });
        }
    }
    takeMeHome() {
        this.lineService.omniStatements[322].lineBackgroundColor = 'yellow';
        this.lineService.omniStatements[322].activeLine.next('baszodjmeg');
        console.log(this.lineService.omniStatements[322]);
    }
    redirect() {
        this.codeHttpService.redirect().subscribe();
    }
}
FileWidgetComponent.ɵfac = function FileWidgetComponent_Factory(t) { return new (t || FileWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_code_http_service__WEBPACK_IMPORTED_MODULE_1__["CodeHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_line_service__WEBPACK_IMPORTED_MODULE_2__["LineService"])); };
FileWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileWidgetComponent, selectors: [["app-file-widget"]], viewQuery: function FileWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.coblistElement = _t.first);
    } }, decls: 14, vars: 2, consts: [["type", "text", "size", "55", "placeholder", "insert coblist path here", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function FileWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FileWidgetComponent_Template_input_ngModelChange_1_listener($event) { return ctx.coblistPath = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileWidgetComponent_Template_button_click_3_listener() { return ctx.getCoblist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "coblist load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FileWidgetComponent_Template_input_ngModelChange_5_listener($event) { return ctx.tracePath = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileWidgetComponent_Template_button_click_7_listener() { return ctx.getTrace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "trace load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileWidgetComponent_Template_button_click_10_listener() { return ctx.takeMeHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "tekerj oda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileWidgetComponent_Template_button_click_12_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "redirect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.coblistPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tracePath);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2Uvd2lkZ2V0LXNpZGUvZmlsZS13aWRnZXQvZmlsZS13aWRnZXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file-widget',
                templateUrl: './file-widget.component.html',
                styleUrls: ['./file-widget.component.css']
            }]
    }], function () { return [{ type: _services_code_http_service__WEBPACK_IMPORTED_MODULE_1__["CodeHttpService"] }, { type: _services_line_service__WEBPACK_IMPORTED_MODULE_2__["LineService"] }]; }, { coblistElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['coblist']
        }] }); })();


/***/ }),

/***/ "./src/app/components/trace/widget-side/widget-side.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/trace/widget-side/widget-side.component.ts ***!
  \***********************************************************************/
/*! exports provided: WidgetSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSideComponent", function() { return WidgetSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _file_widget_file_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-widget/file-widget.component */ "./src/app/components/trace/widget-side/file-widget/file-widget.component.ts");



class WidgetSideComponent {
    constructor() { }
    ngOnInit() {
    }
}
WidgetSideComponent.ɵfac = function WidgetSideComponent_Factory(t) { return new (t || WidgetSideComponent)(); };
WidgetSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetSideComponent, selectors: [["app-widget-side"]], decls: 3, vars: 0, consts: [[1, "widget-side-container"], [1, "first-item"]], template: function WidgetSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-file-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_file_widget_file_widget_component__WEBPACK_IMPORTED_MODULE_1__["FileWidgetComponent"]], styles: [".widget-side-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 400px 400px;\r\n  grid-auto-flow: row;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  align-self: start;\r\n  top: 10px;\r\n\r\n}\r\n\r\n.first-item[_ngcontent-%COMP%] {\r\n  grid-column: 1 / 2;\r\n}\r\n\r\n.widget-item[_ngcontent-%COMP%] {\r\n  grid-column: 1 / 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS93aWRnZXQtc2lkZS93aWRnZXQtc2lkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUzs7QUFFWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2Uvd2lkZ2V0LXNpZGUvd2lkZ2V0LXNpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQtc2lkZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCA0MDBweDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgdG9wOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmZpcnN0LWl0ZW0ge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxufVxyXG5cclxuLndpZGdldC1pdGVtIHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-side',
                templateUrl: './widget-side.component.html',
                styleUrls: ['./widget-side.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/code-http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/code-http.service.ts ***!
  \***********************************************/
/*! exports provided: CodeHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHttpService", function() { return CodeHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const CODE_BASE_URL = 'http://localhost:8080/api/file';
class CodeHttpService {
    constructor(http) {
        this.http = http;
    }
    postCooblistFileLocation(fileLocation) {
        return this.http.post(CODE_BASE_URL + '/coblist', fileLocation);
    }
    postTraceFileLocation(fileLocation) {
        return this.http.post(CODE_BASE_URL + '/trace', fileLocation);
    }
    redirect() {
        return this.http.get(CODE_BASE_URL);
    }
}
CodeHttpService.ɵfac = function CodeHttpService_Factory(t) { return new (t || CodeHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CodeHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CodeHttpService, factory: CodeHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/line.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/line.service.ts ***!
  \******************************************/
/*! exports provided: LineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineService", function() { return LineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class LineService {
    constructor() {
        this.codeModel = { codeLines: [], traceList: [] };
        this.omniStatements = {};
    }
    generateOmniStatements() {
        this.codeModel.codeLines.forEach(codeLine => {
            if (codeLine.statement) {
                this.omniStatements[codeLine.statement] = codeLine;
                this.omniStatements[codeLine.statement].activeLine = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            }
        });
    }
    setTraceToStatement() {
        this.codeModel.traceList.forEach(traceDtoModel => {
            if (this.omniStatements[traceDtoModel.statement]) {
                this.omniStatements[traceDtoModel.statement].order = traceDtoModel.orderNumber;
            }
        });
    }
}
LineService.ɵfac = function LineService_Factory(t) { return new (t || LineService)(); };
LineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LineService, factory: LineService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pupu\IdeaProjects\AngFX\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map