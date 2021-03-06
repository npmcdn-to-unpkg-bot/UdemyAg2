"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_list_component_1 = require('./hero-list.component');
require('./rxjs-operators');
var HttpComponent = (function () {
    function HttpComponent() {
    }
    HttpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-http',
            template: "\n\t\t<hero-list></hero-list>\n        \n\n\n\t",
            directives: [hero_list_component_1.HeroListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HttpComponent);
    return HttpComponent;
}());
exports.HttpComponent = HttpComponent;
//# sourceMappingURL=http.component.js.map