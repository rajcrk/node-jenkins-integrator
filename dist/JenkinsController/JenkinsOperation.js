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
const winston = require('winston');
const request_1 = require("request");
// async function fetchAsync(projectName: string, workArea: string, commitId: string): Promise<string> {
//     let url = `http://192.168.100.29:8080/job/ZbuildHack/build?token=dudes`;
//     let _jwtTokenURL = `http://192.168.100.29:8080/job/ZbuildHack/lastBuild/api/json`;
//     // let url = `http://127.0.0.1:8080/job/${projectName}/buildWithParameters?token=raj&DB_USER_NAME=Rajesh&DB_USER_PASSWORD=Zilker@1234&DB_NAME=mockdb&VERSION=1.0&admin_first_name=rajesh&admin_last_name=kannan&admin_email=rkannan@ztech.io&admin_user_name=admin&admin_password=admin`;
//     var jobResponse = await fetch(url, { method: 'POST' });
//     console.log("----------------Response-----------------");
//     console.log(jobResponse);
//     console.log("----------------Response-----------------");
//     return JSON.stringify(jobResponse);
// }
function fetchAsync(projectName, workArea, commitId) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `http://192.168.100.29:8080/job/ZbuildHack/build?token=dudes`;
        let _jwtTokenURL = `http://192.168.100.29:8080/job/ZbuildHack/lastBuild/api/json`;
        return new Promise((resolve, reject) => {
            request_1.get(url, {}, (err, resp, body) => {
                // winston.debug('SOAData req sent. We won\'t be logging the request as  it contains critical userinfo');
                if (resp) {
                    // winston.debug('%%%%%%%%%jeykjfef%%%%%%%%%%55 ', body);
                    // winston.debug('Respeejjkehjefonse ', resp);
                    // winston.debug('bodjhdgfdsgkfgdsy ', body);
                    return new Promise((resolve, reject) => {
                        request_1.post(_jwtTokenURL, {}, (err, resp, body) => {
                            if (resp) {
                                //     winston.debug('%%%%%%%%%%%%%%%%%%%55 ', body);
                                let reponseJenk = JSON.parse(resp.body);
                                winston.debug('Response ', JSON.parse(resp.body));
                                winston.debug(reponseJenk.result);
                                return 'Random';
                            }
                            else {
                                return 'Error while fetching the Status of the build';
                            }
                        });
                    });
                }
                else {
                    return 'Error while starting the build';
                }
            });
        });
    });
}
exports.fetchAsync = fetchAsync;
//# sourceMappingURL=JenkinsOperation.js.map