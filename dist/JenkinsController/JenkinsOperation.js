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
const fetch = require('node-fetch');
const winston = require('winston');
const request_1 = require("request");
function buildProject(build, projectName, workArea, commitId) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `http://192.168.100.29:8080/job/${projectName}/${build}?token=dudes`;
        return new Promise((resolve, reject) => {
            request_1.get(url, {}, (err, resp, body) => {
                if (resp && resp.statusCode === 201) {
                    return resolve(`${projectName} Build started ...`);
                }
                else {
                    return reject(`Error while starting the ${projectName}` + err);
                }
            });
        });
    });
}
exports.buildProject = buildProject;
function getBuildConsole(projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        let _jwtTokenURL = `http://192.168.100.29:8080/job/${projectName}/lastBuild/api/json`;
        return new Promise((resolve, reject) => {
            request_1.post(_jwtTokenURL, {}, (err, resp, body) => {
                if (resp) {
                    let reponseJenk = JSON.parse(resp.body);
                    return resolve(reponseJenk.result);
                    // return reponseJenk.result;
                }
                else {
                    return reject('Error while getting the status of the project');
                }
            });
        });
    });
}
exports.getBuildConsole = getBuildConsole;
function deleteJob(projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        let _jwtTokenURL = `http://192.168.100.29:8080/job/${projectName}/doDelete`;
        return new Promise((resolve, reject) => {
            request_1.post(_jwtTokenURL, {}, (err, resp, body) => {
                if (resp && resp.statusCode == 302) {
                    return resolve(`${projectName} is deleted successfully :-)  ...`);
                }
                else {
                    return reject(`Error while deleting the project ${projectName}`);
                }
            });
        });
    });
}
exports.deleteJob = deleteJob;
function buildWithParameters(values) {
    return __awaiter(this, void 0, void 0, function* () {
        let _jwtTokenURL = `http://192.168.100.29:8080/job/${values[1]}/${values[0]}?token=zilker&name=${values[2]}&password=${values[3]}`;
        return new Promise((resolve, reject) => {
            request_1.post(_jwtTokenURL, {}, (err, resp, body) => {
                if (resp && resp.statusCode == 201) {
                    return resolve(`${values[1]} is builded successfully :-)  ...`);
                }
                else {
                    return reject(`Error building the project ${values[1]}`);
                }
            });
        });
    });
}
exports.buildWithParameters = buildWithParameters;
//# sourceMappingURL=JenkinsOperation.js.map