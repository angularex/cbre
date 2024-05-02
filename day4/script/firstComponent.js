"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Component = function (config) {
    return function (TargetClass) {
        let tc = new TargetClass();
        return class {
            constructor() {
                this.template = config.template;
                this.selector = config.selector;
                this.title = tc.title;
            }
        };
    };
};
let FirstComponent = class FirstComponent {
    constructor() {
        this.title = "CBRE hyderabad";
    }
};
FirstComponent = __decorate([
    Component({
        selector: "app-root",
        template: `
        <div>
            <h1>Title is {{ title }}</h1>
        </div>
    `
    })
], FirstComponent);
