//// [tests/cases/compiler/jsxFactoryMissingErrorInsideAClass.ts] ////

//// [test.tsx]
export class C {
    factory() {
        return <div></div>;
    }
}


//// [test.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C = void 0;
class C {
    factory() {
        return <div></div>;
    }
}
exports.C = C;
