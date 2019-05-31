"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
const fetch = require('node-fetch');
function fetchAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        var sentiment = yield fetch('http://localhost:8080/job/print_hello_world/build?token=raj', { method: 'POST' });
        console.log("----------------Response-----------------");
        console.log(sentiment);
        console.log("----------------Response-----------------");
        const data = yield sentiment.json();
        console.log(data);
        // only proceed once second promise is resolved
        return data;
    });
}
exports.fetchAsync = fetchAsync;
//# sourceMappingURL=JenkinsOperation.js.map