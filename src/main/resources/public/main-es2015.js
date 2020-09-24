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
                if (value === 'makeActive') {
                    this.elRef.nativeElement.scrollIntoView({ block: 'center', inline: 'center' });
                    this.backgroundColor = this.codeLine.lineBackgroundColor;
                }
                else if (value === 'deActivate') {
                    this.backgroundColor = this.codeLine.lineBackgroundColor;
                }
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
/* harmony import */ var _components_trace_widget_side_debugger_debugger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/trace/widget-side/debugger/debugger.component */ "./src/app/components/trace/widget-side/debugger/debugger.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'trace' },
    { path: 'trace', component: _components_trace_trace_component__WEBPACK_IMPORTED_MODULE_2__["TraceComponent"] },
    { path: 'debug', component: _components_trace_widget_side_debugger_debugger_component__WEBPACK_IMPORTED_MODULE_3__["DebuggerComponent"] },
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
/* harmony import */ var _components_trace_widget_side_player_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/trace/widget-side/player/player.component */ "./src/app/components/trace/widget-side/player/player.component.ts");
/* harmony import */ var _components_trace_widget_side_debugger_debugger_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/trace/widget-side/debugger/debugger.component */ "./src/app/components/trace/widget-side/debugger/debugger.component.ts");















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
        _Directives_line_manipulator_directive__WEBPACK_IMPORTED_MODULE_11__["LineManipulatorDirective"],
        _components_trace_widget_side_player_player_component__WEBPACK_IMPORTED_MODULE_12__["PlayerComponent"],
        _components_trace_widget_side_debugger_debugger_component__WEBPACK_IMPORTED_MODULE_13__["DebuggerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _components_trace_widget_side_player_player_component__WEBPACK_IMPORTED_MODULE_12__["PlayerComponent"],
                    _components_trace_widget_side_debugger_debugger_component__WEBPACK_IMPORTED_MODULE_13__["DebuggerComponent"],
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
    } }, directives: [_Directives_line_manipulator_directive__WEBPACK_IMPORTED_MODULE_2__["LineManipulatorDirective"]], styles: [".code-line[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 65px 800px 65px 65px;\r\n  grid-template-areas: \"lineNum code order statement\";\r\n  align-items: center;\r\n}\r\n\r\n.line-num[_ngcontent-%COMP%] {\r\n  grid-column: 1 / 2;\r\n  text-align: center;\r\n}\r\n\r\n.code[_ngcontent-%COMP%] {\r\n  grid-column: 2 / 3;\r\n}\r\n\r\n.statement[_ngcontent-%COMP%] {\r\n  grid-column: 3 / 4;\r\n  text-align: right;\r\n}\r\n\r\n.order[_ngcontent-%COMP%] {\r\n  grid-column: 4 / 5;\r\n  text-align: right;\r\n}\r\n\r\npre[_ngcontent-%COMP%] {\r\n  font-family: Consolas, serif; font-style: normal; font-variant: normal; font-weight: 400;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1.2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS9jb2RlLXNpZGUvY29kZS1saW5lL2NvZGUtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxtREFBbUQ7RUFDbkQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCO0VBQ3hGLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFjZS9jb2RlLXNpZGUvY29kZS1saW5lL2NvZGUtbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGUtbGluZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY1cHggODAwcHggNjVweCA2NXB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibGluZU51bSBjb2RlIG9yZGVyIHN0YXRlbWVudFwiO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5lLW51bSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvZGUge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcclxufVxyXG5cclxuLnN0YXRlbWVudCB7XHJcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ub3JkZXIge1xyXG4gIGdyaWQtY29sdW1uOiA0IC8gNTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxucHJlIHtcclxuICBmb250LWZhbWlseTogQ29uc29sYXMsIHNlcmlmOyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4iXX0= */"] });
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
    } }, directives: [_code_side_code_side_component__WEBPACK_IMPORTED_MODULE_1__["CodeSideComponent"], _widget_side_widget_side_component__WEBPACK_IMPORTED_MODULE_2__["WidgetSideComponent"]], styles: [".trace-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 995px 400px;\r\n  grid-template-areas: \"code-side widget-side\";\r\n  grid-column-gap: 10px;\r\n  justify-content: center;\r\n}\r\n\r\n.trace-code-side[_ngcontent-%COMP%] {\r\n  grid-area: code-side;\r\n}\r\n\r\n.trace-widget-side[_ngcontent-%COMP%] {\r\n  grid-area: widget-side;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS90cmFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw0Q0FBNEM7RUFDNUMscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2UvdHJhY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFjZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5OTVweCA0MDBweDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNvZGUtc2lkZSB3aWRnZXQtc2lkZVwiO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNlLWNvZGUtc2lkZSB7XHJcbiAgZ3JpZC1hcmVhOiBjb2RlLXNpZGU7XHJcbn1cclxuXHJcbi50cmFjZS13aWRnZXQtc2lkZSB7XHJcbiAgZ3JpZC1hcmVhOiB3aWRnZXQtc2lkZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trace',
                templateUrl: './trace.component.html',
                styleUrls: ['./trace.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/trace/widget-side/debugger/debugger.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/trace/widget-side/debugger/debugger.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DebuggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebuggerComponent", function() { return DebuggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_bkp_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/bkp.model */ "./src/app/models/bkp.model.ts");
/* harmony import */ var _services_debugger_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/debugger-http.service */ "./src/app/services/debugger-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function DebuggerComponent_div_1_div_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_7_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r21.$implicit;
    const i_r5 = ctx_r21.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 2 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar2);
} }
function DebuggerComponent_div_1_div_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r27.$implicit;
    const i_r5 = ctx_r27.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 3 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar3);
} }
function DebuggerComponent_div_1_div_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_9_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar4 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r33.$implicit;
    const i_r5 = ctx_r33.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 4 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar4);
} }
function DebuggerComponent_div_1_div_5_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_10_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar5 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r39.$implicit;
    const i_r5 = ctx_r39.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 5 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar5);
} }
function DebuggerComponent_div_1_div_5_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_11_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar6 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r45.$implicit;
    const i_r5 = ctx_r45.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 6 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar6);
} }
function DebuggerComponent_div_1_div_5_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_12_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar7 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r51.$implicit;
    const i_r5 = ctx_r51.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 7 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar7);
} }
function DebuggerComponent_div_1_div_5_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_13_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar8 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r57.$implicit;
    const i_r5 = ctx_r57.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 8 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar8);
} }
function DebuggerComponent_div_1_div_5_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_14_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar9 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r63.$implicit;
    const i_r5 = ctx_r63.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 9 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar9);
} }
function DebuggerComponent_div_1_div_5_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_15_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar10 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const bkpEntity_r4 = ctx_r69.$implicit;
    const i_r5 = ctx_r69.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 10 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar10);
} }
function DebuggerComponent_div_1_div_5_ng_container_16_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r72);
} }
function DebuggerComponent_div_1_div_5_ng_container_16_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const varNum_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", varNum_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](varNum_r73);
} }
function DebuggerComponent_div_1_div_5_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_16_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].condition = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DebuggerComponent_div_1_div_5_ng_container_16_option_2_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_16_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvarForCondition = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DebuggerComponent_div_1_div_5_ng_container_16_option_4_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_16_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].conditionValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "is numeric what u compare to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_ng_container_16_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].isConditionValueNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.conditionOptions.compare);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvarForCondition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.conditionOptions.varNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].conditionValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].isConditionValueNumber);
} }
function DebuggerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BKP: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const bkpEntity_r4 = ctx.$implicit; return bkpEntity_r4.statement = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_div_5_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const i_r5 = ctx.index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return debuggerM_r1.bkpList[i_r5].pgmvar1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DebuggerComponent_div_1_div_5_ng_container_7_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DebuggerComponent_div_1_div_5_ng_container_8_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DebuggerComponent_div_1_div_5_ng_container_9_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DebuggerComponent_div_1_div_5_ng_container_10_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DebuggerComponent_div_1_div_5_ng_container_11_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DebuggerComponent_div_1_div_5_ng_container_12_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DebuggerComponent_div_1_div_5_ng_container_13_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DebuggerComponent_div_1_div_5_ng_container_14_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DebuggerComponent_div_1_div_5_ng_container_15_Template, 4, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DebuggerComponent_div_1_div_5_ng_container_16_Template, 10, 6, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebuggerComponent_div_1_div_5_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const i_r5 = ctx.index; const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.conditionHandler(debuggerM_r1.bkpList[i_r5]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebuggerComponent_div_1_div_5_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const i_r5 = ctx.index; const j_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.handleBkp("rmv", j_r2, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "rmv bkp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bkpEntity_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const debuggerM_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", bkpEntity_r4.statement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Var 1 ", debuggerM_r1.program, " BKP ", bkpEntity_r4.statement, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.bkpList[i_r5].pgmvar1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar1 || debuggerM_r1.bkpList[i_r5].pgmvar2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar2 || debuggerM_r1.bkpList[i_r5].pgmvar3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar3 || debuggerM_r1.bkpList[i_r5].pgmvar4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar4 || debuggerM_r1.bkpList[i_r5].pgmvar5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar5 || debuggerM_r1.bkpList[i_r5].pgmvar6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar6 || debuggerM_r1.bkpList[i_r5].pgmvar7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar7 || debuggerM_r1.bkpList[i_r5].pgmvar8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar8 || debuggerM_r1.bkpList[i_r5].pgmvar9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].pgmvar9 || debuggerM_r1.bkpList[i_r5].pgmvar10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", debuggerM_r1.bkpList[i_r5].hasCondition);
} }
function DebuggerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PGM: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const debuggerM_r1 = ctx.$implicit; return debuggerM_r1.program = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DebuggerComponent_div_1_div_5_Template, 21, 14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebuggerComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const j_r2 = ctx.index; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.handleBkp("add", j_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add bkp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebuggerComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const debuggerM_r1 = ctx.$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.sendBKP(debuggerM_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "JUST BKP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebuggerComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const j_r2 = ctx.index; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.handlePgm("rmv", j_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "RMV PGM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const debuggerM_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", debuggerM_r1.program);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", debuggerM_r1.bkpList);
} }
class DebuggerComponent {
    constructor(debuggerHttpService) {
        this.debuggerHttpService = debuggerHttpService;
        this.debuggerModelList = [];
        this.conditionOptions = {
            compare: ['*EQ', '*GT', '*LT', '*NE', '*GE', '*NL', '*LE', '*NG', '*CT'],
            varNum: ['*PGMVAR1', '*PGMVAR2', '*PGMVAR3', '*PGMVAR4', '*PGMVAR5', '*PGMVAR6', '*PGMVAR7', '*PGMVAR8', '*PGMVAR9', '*PGMVAR10']
        };
    }
    ngOnInit() {
        this.multiPgmDebugger = { debuggerModelList: [], batch: false };
    }
    getData() {
        this.multiPgmDebugger.debuggerModelList = this.debuggerModelList;
        console.log('debuggerModel: ', this.multiPgmDebugger);
        this.debuggerHttpService.postDebug(this.multiPgmDebugger).subscribe();
    }
    handleBkp(command, debuggerModelNumber, debuggerModelListNumber) {
        console.log('modelNumber: ', debuggerModelNumber);
        console.log('listNumber: ', debuggerModelListNumber);
        if (command === 'add') {
            this.debuggerModelList[debuggerModelNumber].bkpList.push(new _models_bkp_model__WEBPACK_IMPORTED_MODULE_1__["BkpModelClass"]());
            console.log(this.debuggerModelList[debuggerModelNumber]);
        }
        if (command === 'rmv') {
            console.log(debuggerModelListNumber);
            this.debuggerModelList[debuggerModelNumber].bkpList.splice(debuggerModelListNumber, 1);
        }
    }
    handlePgm(command, modelNumber) {
        if (command === 'add') {
            this.debuggerModelList.push({ program: '', bkpList: [new _models_bkp_model__WEBPACK_IMPORTED_MODULE_1__["BkpModelClass"]()] });
        }
        if (command === 'rmv') {
            this.debuggerModelList.splice(modelNumber, 1);
        }
    }
    sendBKP(debuggerM) {
        this.debuggerHttpService.sendBkp(debuggerM).subscribe();
    }
    conditionHandler(bkp) {
        bkp.hasCondition = !bkp.hasCondition;
        if (!bkp.hasCondition) {
            bkp.condition = null;
            bkp.conditionValue = null;
            bkp.isConditionValueNumber = false;
            bkp.pgmvarForCondition = null;
        }
    }
}
DebuggerComponent.ɵfac = function DebuggerComponent_Factory(t) { return new (t || DebuggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_debugger_http_service__WEBPACK_IMPORTED_MODULE_2__["DebuggerHttpService"])); };
DebuggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DebuggerComponent, selectors: [["app-debugger"]], decls: 9, vars: 2, consts: [[1, "debugger-flex-container"], ["class", "debugger-pgm-item", 4, "ngFor", "ngForOf"], [3, "click"], ["for", "batch"], ["type", "checkbox", "id", "batch", 3, "ngModel", "ngModelChange"], [1, "debugger-pgm-item"], ["for", "pgm"], ["type", "text", "id", "pgm", "placeholder", "program", 3, "ngModel", "ngModelChange"], [1, "debugger-bkp-panel"], ["class", "debugger-item", 4, "ngFor", "ngForOf"], [1, "debugger-item"], ["type", "text", "placeholder", "addbkp", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "pgmVar", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "whatToCompare", 3, "ngModel", "ngModelChange"], [2, "display", "flex"], ["for", "isNumeric"], ["type", "checkbox", "id", "isNumeric", 3, "ngModel", "ngModelChange"], [3, "value"]], template: function DebuggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DebuggerComponent_div_1_Template, 12, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebuggerComponent_Template_button_click_2_listener() { return ctx.handlePgm("add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ADD NEW PGM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebuggerComponent_Template_button_click_4_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "set debug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DebuggerComponent_Template_input_ngModelChange_8_listener($event) { return ctx.multiPgmDebugger.batch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.debuggerModelList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.multiPgmDebugger.batch);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: [".debugger-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.debugger-pgm-item[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: solid 2px plum;\r\n}\r\n\r\n.debugger-bkp-panel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5px 0;\r\n}\r\n\r\n.debugger-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: solid 2px goldenrod;\r\n  margin: 15px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS93aWRnZXQtc2lkZS9kZWJ1Z2dlci9kZWJ1Z2dlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2Uvd2lkZ2V0LXNpZGUvZGVidWdnZXIvZGVidWdnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWJ1Z2dlci1mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZGVidWdnZXItcGdtLWl0ZW0ge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IHNvbGlkIDJweCBwbHVtO1xyXG59XHJcblxyXG4uZGVidWdnZXItYmtwLXBhbmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmRlYnVnZ2VyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IHNvbGlkIDJweCBnb2xkZW5yb2Q7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DebuggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-debugger',
                templateUrl: './debugger.component.html',
                styleUrls: ['./debugger.component.css']
            }]
    }], function () { return [{ type: _services_debugger_http_service__WEBPACK_IMPORTED_MODULE_2__["DebuggerHttpService"] }]; }, null); })();


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
        this.tracePath = 'C:\\Users\\Pupu\\Desktop\\res\\trace.txt';
        this.coblistPath = 'C:\\Users\\Pupu\\Desktop\\res\\kek.txt';
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
}
FileWidgetComponent.ɵfac = function FileWidgetComponent_Factory(t) { return new (t || FileWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_code_http_service__WEBPACK_IMPORTED_MODULE_1__["CodeHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_line_service__WEBPACK_IMPORTED_MODULE_2__["LineService"])); };
FileWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileWidgetComponent, selectors: [["app-file-widget"]], viewQuery: function FileWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.coblistElement = _t.first);
    } }, decls: 9, vars: 2, consts: [["type", "text", "size", "40", "placeholder", "insert coblist path here", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function FileWidgetComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ "./src/app/components/trace/widget-side/player/player.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/trace/widget-side/player/player.component.ts ***!
  \*************************************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_line_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/line.service */ "./src/app/services/line.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class PlayerComponent {
    constructor(lineService) {
        this.lineService = lineService;
    }
    ngOnInit() {
        this.singleStatement = 322;
        this.startingOrder = 322;
    }
    goToStatement() {
        this.lineService.makeActiveLine(this.singleStatement, 'statement');
    }
    nextStatement() {
        this.lineService.makeActiveLine(++this.startingOrder, 'order');
    }
    previousStatement() {
        this.lineService.makeActiveLine(--this.startingOrder, 'order');
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"])); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 10, vars: 2, consts: [[1, "file-statement-go-to"], ["type", "text", "size", "5", "placeholder", "statement", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "file-statement-player"], ["type", "text", "size", "5", "placeholder", "stmntToStart", 3, "ngModel", "ngModelChange"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_Template_input_ngModelChange_1_listener($event) { return ctx.singleStatement = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_button_click_2_listener() { return ctx.goToStatement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "vigy\u00E9l oda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_Template_input_ngModelChange_5_listener($event) { return ctx.startingOrder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_button_click_6_listener() { return ctx.previousStatement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_button_click_8_listener() { return ctx.nextStatement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.singleStatement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startingOrder);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".file-statement-go-to[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 5px;\r\n}\r\n.file-statement-player[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS93aWRnZXQtc2lkZS9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2Uvd2lkZ2V0LXNpZGUvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUtc3RhdGVtZW50LWdvLXRvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZmlsZS1zdGF0ZW1lbnQtcGxheWVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: ['./player.component.css']
            }]
    }], function () { return [{ type: _services_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"] }]; }, null); })();


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
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/player.component */ "./src/app/components/trace/widget-side/player/player.component.ts");
/* harmony import */ var _debugger_debugger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debugger/debugger.component */ "./src/app/components/trace/widget-side/debugger/debugger.component.ts");





class WidgetSideComponent {
    constructor() { }
    ngOnInit() {
    }
}
WidgetSideComponent.ɵfac = function WidgetSideComponent_Factory(t) { return new (t || WidgetSideComponent)(); };
WidgetSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetSideComponent, selectors: [["app-widget-side"]], decls: 5, vars: 0, consts: [[1, "widget-side-container"], [1, "first-item"]], template: function WidgetSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-file-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-debugger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_file_widget_file_widget_component__WEBPACK_IMPORTED_MODULE_1__["FileWidgetComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"], _debugger_debugger_component__WEBPACK_IMPORTED_MODULE_3__["DebuggerComponent"]], styles: [".widget-side-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 400px;\r\n  grid-auto-flow: row;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  overflow: auto;\r\n  align-self: start;\r\n  top: 10px;\r\n  max-height: 90vh;\r\n\r\n}\r\n\r\n.first-item[_ngcontent-%COMP%] {\r\n  grid-column: 1 / 2;\r\n}\r\n\r\n.widget-item[_ngcontent-%COMP%] {\r\n  grid-column: 1 / 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjZS93aWRnZXQtc2lkZS93aWRnZXQtc2lkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFjZS93aWRnZXQtc2lkZS93aWRnZXQtc2lkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldC1zaWRlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICB0b3A6IDEwcHg7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuXHJcbn1cclxuXHJcbi5maXJzdC1pdGVtIHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbn1cclxuXHJcbi53aWRnZXQtaXRlbSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-side',
                templateUrl: './widget-side.component.html',
                styleUrls: ['./widget-side.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/models/bkp.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/bkp.model.ts ***!
  \*************************************/
/*! exports provided: BkpModelClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BkpModelClass", function() { return BkpModelClass; });
class BkpModelClass {
    constructor() {
        this.statement = null;
        this.pgmvar1 = null;
        this.pgmvar2 = null;
        this.pgmvar3 = null;
        this.pgmvar4 = null;
        this.pgmvar5 = null;
        this.pgmvar6 = null;
        this.pgmvar7 = null;
        this.pgmvar8 = null;
        this.pgmvar9 = null;
        this.pgmvar10 = null;
        this.hasCondition = false;
        this.pgmvarForCondition = null;
        this.condition = null;
        this.conditionValue = null;
        this.isConditionValueNumber = false;
    }
}


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

/***/ "./src/app/services/debugger-http.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/debugger-http.service.ts ***!
  \***************************************************/
/*! exports provided: DebuggerHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebuggerHttpService", function() { return DebuggerHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const CODE_BASE_URL = 'http://localhost:8080/api/debug';
class DebuggerHttpService {
    constructor(http) {
        this.http = http;
    }
    postDebug(debugData) {
        return this.http.post(CODE_BASE_URL + '/online', debugData);
    }
    sendBkp(debuggerM) {
        return this.http.post(CODE_BASE_URL + '/bkp', debuggerM);
    }
}
DebuggerHttpService.ɵfac = function DebuggerHttpService_Factory(t) { return new (t || DebuggerHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DebuggerHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DebuggerHttpService, factory: DebuggerHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DebuggerHttpService, [{
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
        this.omniOrders = {};
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
        this.codeModel.traceList.forEach(traceDtoModel => {
            this.omniOrders[traceDtoModel.orderNumber] = traceDtoModel;
        });
        console.log(this.omniOrders);
    }
    makeActiveLine(num, command) {
        var _a;
        let lineToManipulate;
        if (command === 'statement') {
            lineToManipulate = this.omniStatements[num];
        }
        if (command === 'order') {
            lineToManipulate = this.omniStatements[(_a = this === null || this === void 0 ? void 0 : this.omniOrders[num]) === null || _a === void 0 ? void 0 : _a.statement];
        }
        if (lineToManipulate) {
            lineToManipulate.lineBackgroundColor = 'yellowgreen';
            lineToManipulate.activeLine.next('makeActive');
            if (this.activeLine && this.activeLine !== lineToManipulate) {
                this.activeLine.lineBackgroundColor = 'black';
                this.activeLine.activeLine.next('deActivate');
            }
            this.activeLine = lineToManipulate;
        }
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