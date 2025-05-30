//// [tests/cases/compiler/moduleReopenedTypeSameBlock.ts] ////

//// [moduleReopenedTypeSameBlock.ts]
module M { export class C1 { } }
module M {
    export interface I { n: number; }
    export class C2 { f(): I { return null; } }
}


//// [moduleReopenedTypeSameBlock.js]
var M;
(function (M) {
    class C1 {
    }
    M.C1 = C1;
})(M || (M = {}));
(function (M) {
    class C2 {
        f() { return null; }
    }
    M.C2 = C2;
})(M || (M = {}));
