//// [tests/cases/compiler/internalAliasInterfaceInsideTopLevelModuleWithExport.ts] ////

//// [internalAliasInterfaceInsideTopLevelModuleWithExport.ts]
export module a {
    export interface I {
    }
}

export import b = a.I;
export var x: b;


//// [internalAliasInterfaceInsideTopLevelModuleWithExport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
