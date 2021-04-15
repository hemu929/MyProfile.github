webpackJsonp([1,4],{

/***/ 349:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 349;


/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(459);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/HEMU/Desktop/Hemanth/src/main.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    //title = 'app works!';
    AppComponent.prototype.move = function () {
        console.log(window.innerWidth);
        if (window.innerWidth < 400) {
            window.scrollTo({ top: 2200, behavior: 'smooth' });
        }
        else {
            window.scrollTo({ top: 1500, behavior: 'smooth' });
        }
    };
    AppComponent.prototype.top = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(617),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/HEMU/Desktop/Hemanth/src/app.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/HEMU/Desktop/Hemanth/src/app.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/HEMU/Desktop/Hemanth/src/environment.js.map

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: linear-gradient(-54deg, #fdfcfb 0, #e2d1c3 100%);\r\n    background-image: url(assets/images/cool-background.png);\r\n    height: 620px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.header {\r\n    color: #212F3D;\r\n    font-size: 2rem;\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n    padding: 100px 0px 0px 80px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.subheader {\r\n    color: #212F3D;\r\n    font-size: 3rem;\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n    padding: 0px 0px 0px 80px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.job {\r\n    padding: 30px 0px 0px 80px;\r\n}\r\n\r\n.tech {\r\n    color: #212F3D;\r\n    font-size: 20px;\r\n}\r\n\r\n.find {\r\n    color: whitesmoke;\r\n    font-size: 18px;\r\n    padding: 30px 0px 0px 80px;\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n}\r\n\r\n.find2 {\r\n    padding: 0px 0px 0px 70px;\r\n}\r\n\r\n.linkimg {\r\n    height: 40px;\r\n    width: 40px;\r\n    padding: 10px 0px 0px 8px;\r\n}\r\n\r\n.centxt {\r\n    color: white;\r\n    font-size: 50px;\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n}\r\n\r\n.nextslide {\r\n    background: linear-gradient(-54deg, #1c777d, #d2e3c0);\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.row {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n\r\n.txtdate {\r\n    color: black;\r\n    padding: 70px 0px 0px 60px;\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n    margin-right: 30px;\r\n}\r\n\r\n.txtdate2 {\r\n    margin-right: 23px;\r\n}\r\n\r\n.linkimg2 {\r\n    height: 70px;\r\n    width: 70px;\r\n    padding: 0px 0px 0px 8px;\r\n}\r\n\r\n.dot {\r\n    height: 70px;\r\n    width: 35px;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    margin-top: 50px;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    transition: 0.3s;\r\n    width: 85%;\r\n    border-radius: 35px;\r\n    background: linear-gradient(-54deg, #000000, #434343)\r\n}\r\n\r\n.card:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.container {\r\n    padding: 9px 16px;\r\n}\r\n\r\n.container h4 {\r\n    color: whitesmoke;\r\n    font-size: 15px;\r\n}\r\n\r\n.dotcontact {\r\n    height: 40px;\r\n    width: 195px;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    margin-top: 30px;\r\n}\r\n\r\n.container h3 {\r\n    color: #6f86d6;\r\n    font-size: 20px;\r\n    padding-top: 30px;\r\n}\r\n\r\n.but {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    transition: 0.3s;\r\n    width: 30%;\r\n    border-radius: 35px;\r\n    background: linear-gradient(-54deg, #000000, #434343);\r\n    margin-top: 40px;\r\n    margin-left: 60px;\r\n}\r\n\r\n.contactmid {\r\n    margin-top: 50px;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    margin-left: 440px;\r\n}\r\n\r\n.top {\r\n    text-align: right;\r\n    padding: 90px 150px 0px 0px;\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n    color: white;\r\n}\r\n\r\n.nav-bar {\r\n    border-bottom: 1px solid rgba(255, 255, 255, .25);\r\n    padding-top: 130px;\r\n}\r\n\r\n.angicon {\r\n    padding: 25px 0px 0px 70px;\r\n}\r\n\r\n.angicon2 {\r\n    border-radius: 80px;\r\n    height: 50px;\r\n    width: 70px;\r\n}\r\n\r\n.foot {\r\n    text-align: right;\r\n    font-size: 19px;\r\n    padding: 13px 0px 0px 950px;\r\n}\r\n\r\n\r\n/* Media code starts from here....................................................... */\r\n\r\n@media screen and (max-width: 600px) {\r\n    .contactmid {\r\n        margin-top: 50px;\r\n        -ms-flex-line-pack: center;\r\n            align-content: center;\r\n        margin-left: 40px;\r\n    }\r\n    .dot {\r\n        margin-left: 20px;\r\n        width: 105px;\r\n    }\r\n    .nextslide {\r\n        height: 100%;\r\n    }\r\n    .foot {\r\n        text-align: right;\r\n        font-size: 19px;\r\n        padding: 13px 0px 0px 60px;\r\n    }\r\n    .cardmob {\r\n        margin-left: 40px;\r\n    }\r\n    .txtdate {\r\n        margin-left: 0px;\r\n        font-size: 15px;\r\n        margin-right: 5px;\r\n    }\r\n    .header {\r\n        padding: 100px 0px 0px 50px;\r\n    }\r\n    .subheader {\r\n        padding: 0px 0px 0px 50px;\r\n    }\r\n    .job {\r\n        padding: 30px 0px 0px 50px;\r\n    }\r\n    .find {\r\n        padding: 30px 0px 0px 50px;\r\n    }\r\n    .find2 {\r\n        padding: 0px 0px 0px 50px;\r\n    }\r\n    .but {\r\n        margin-left: 40px;\r\n        padding: 0px 0px 0px 10px;\r\n    }\r\n    .angicon {\r\n        padding: 25px 0px 0px 20px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<body>\n    <div>\n        <h3 class=\"header\">Hey, I'm</h3>\n    </div>\n\n    <div>\n        <h2 class=\"subheader\">Hemanth Gaddam</h2>\n    </div>\n\n    <div class=\"job\">\n        <h2 class=\"tech\">Senior Systems Engineer | Web Developer | C# | .NET Microservices | Angular 6 | SQL Server</h2>\n    </div>\n    <div>\n        <div class=\"find\">Find Me on:</div>\n        <div class=\"find2\">\n            <a href=\"https://www.linkedin.com/in/gaddam-hemanth\" target=\"_blank\" rel=\"noopener noreferrer\"><img class=\"linkimg\" src=\"assets/images/linkedin-512.png\" alt=\"Linkedin\"></a>\n            <a href=\"https://github.com/hemu929\" target=\"_blank\" target=\"_blank\" rel=\"noopener noreferrer\"><img class=\"linkimg\" src=\"assets/images/github_circle_black-512.png\" alt=\"GitHub\"></a>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"but\">\n                <div class=\"container\">\n                    <h4 (click)=\"move()\">Contact</h4>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n\n\n\n</body>\n\n<div class=\"nextslide\">\n    <div>\n        <h2 class=\"centxt\">My Timeline</h2>\n    </div>\n    <div class=\"row\">\n        <div class=\"txtdate\">\n            Sep 2014-Apr 2018\n        </div>\n        <div class=\"col-md-1 dot\">\n            <img class=\"linkimg2\" src=\"assets/images/129978-200.png\" alt=\"graduation\">\n        </div>\n        <div class=\"col-md-8 cardmob\" style=\"margin-top: 50px;\">\n            <div class=\"card\">\n                <div class=\"container\">\n                    <h4>B.Tech - Electronics and Communication Engineering</h4>\n                    <h4>SV College of Engineering - 82.1%</h4>\n                    <h4>Tirupati </h4>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"txtdate\">\n            Jul 2018-Nov 2018\n        </div>\n        <div class=\"col-md-1 dot\">\n            <img class=\"linkimg2\" style=\"border-radius: 80px;\" src=\"assets/images/infy.png\" alt=\"infy\">\n        </div>\n        <div class=\"col-md-8 cardmob\" style=\"margin-top: 50px;\">\n            <div class=\"card\">\n                <div class=\"container\">\n                    <h4>Infosys</h4>\n                    <h4>System Engineer Trainee</h4>\n                    <h4>* Finished My Infosys Training with 83% aggregation in Python, .Net, SQL Server and Angular 6.</h4>\n                    <h4>* Learned a few frontend programming languages like HTML, CSS.</h4>\n                    <h4>* Architected frontend and created multiple forms applying different validations.</h4>\n                    <h4>* Finished one mini project on Logistic Services using Angular 6, .Net and SQL Server.</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"txtdate txtdate2\">\n            Dec 2018-Present\n        </div>\n        <div class=\"col-md-1 dot\">\n            <img class=\"linkimg2\" style=\"border-radius: 80px;\" src=\"assets/images/infy.png\" alt=\"infy\">\n        </div>\n        <div class=\"col-md-8 cardmob\" style=\"margin-top: 50px;\">\n            <div class=\"card\">\n                <div class=\"container\">\n                    <h4>Infosys</h4>\n                    <h4>Senior Systems Engineer</h4>\n                    <h4>* Having more than 2 years of experience in designing, developing and maintaining web based applications.</h4>\n                    <h4>* Designed multiple angular components and delivered them to the client.</h4>\n                    <h4>* Working in a high-speed, agile environment to deliver features in the shortest time possible.</h4>\n                    <h4>* Working in a highly scalable and independently deployable .net microservices using service fabric.</h4>\n                    <h4>* Coded reliable and error free code by using Sonar Qube.</h4>\n                    <h4>* Integrated Exchange Web Services(Outlook) with our product.</h4>\n                    <h4>* Implemented many .Net Framework Batch Jobs.</h4>\n                    <h4>* Experience working in high volume application.</h4>\n                    <h4>* Suggested possible solutions in the product which helped me in achieving problem solving, critical thinking and analytical skills.</h4>\n                    <h4>* Performed unit testing on developed components and API's using swagger.</h4>\n                    <h4>* Learning and working on reactive forms to make dynamic changes on components.</h4>\n                    <h4>* Deployed application in Docker.</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div>\n        <h2 class=\"centxt\">Contact Me</h2>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-5 contactmid\">\n            <div class=\"card\">\n                <div class=\"container\">\n                    <h3>Mobile</h3>\n                    <h4>+91 8121743624 </h4>\n                    <h3>Email</h3>\n                    <h4>gaddamhemanth7@gmail.com</h4>\n                    <h3>Address</h3>\n                    <h4>Mysore, Karnataka, India</h4><br>\n                    <br>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"top\">\n        Go to <img style=\"border-radius: 80px;height: 50px;width: 70px;\" (click)=\"top()\" src=\"assets/images/top.png\" alt=\"infy\">\n    </div>\n    <div class=\"nav-bar\"></div>\n    <div class=\"row angicon\">\n        <img class=\"angicon2\" src=\"assets/images/angular.png\" alt=\"infy\">\n        <h2 class=\"foot\">Build using Angular 6</h2>\n    </div>\n</div>\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(350);


/***/ })

},[632]);
//# sourceMappingURL=main.bundle.map