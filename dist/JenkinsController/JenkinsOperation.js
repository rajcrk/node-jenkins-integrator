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
function fetchAsync(projectName, workArea, commitId) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `http://127.0.0.1:8080/job/${projectName}/buildWithParameters?token=raj&DB_USER_NAME=Rajesh&DB_USER_PASSWORD=Zilker@1234&DB_NAME=mockdb&VERSION=1.0&admin_first_name=rajesh&admin_last_name=kannan&admin_email=rkannan@ztech.io&admin_user_name=admin&admin_password=admin`;
        var jobResponse = yield fetch(url, { method: 'POST' });
        console.log("----------------Response-----------------");
        console.log(jobResponse);
        console.log("----------------Response-----------------");
        const data = yield jobResponse.json();
        console.log(data);
        // only proceed once second promise is resolved
        return data;
    });
}
exports.fetchAsync = fetchAsync;
//# sourceMappingURL=JenkinsOperation.js.map