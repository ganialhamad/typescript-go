//// [tests/cases/compiler/es5ModuleWithModuleGenCommonjs.ts] ////

//// [es5ModuleWithModuleGenCommonjs.ts]
export class A
{
    constructor ()
    {
    }

    public B()
    {
        return 42;
    }
}

//// [es5ModuleWithModuleGenCommonjs.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
class A {
    constructor() {
    }
    B() {
        return 42;
    }
}
exports.A = A;
