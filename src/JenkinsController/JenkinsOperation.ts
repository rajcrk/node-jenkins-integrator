const fetch = require('node-fetch');
const winston = require('winston');
import { post, get } from 'request';


export {
    buildProject,
    getBuildConsole,
    deleteJob,
    buildWithParameters
};

async function buildProject(build: string, projectName: string, workArea: string, commitId: string): Promise<any> {
    let url = `http://192.168.100.29:8080/job/${projectName}/${build}?token=dudes`;
    return new Promise<any>((resolve: any, reject: any) => {
        get(url, {
        }, (err: any, resp: any, body: any) => {
            if (resp && resp.statusCode === 201) {
                return resolve(`${projectName} Build started ...`);
            } else {
                return reject(`Error while starting the ${projectName}` + err);
            }
        });
    });
}

async function getBuildConsole(projectName: string): Promise<any> {
    let _jwtTokenURL = `http://192.168.100.29:8080/job/${projectName}/lastBuild/api/json`;
    return new Promise<any>((resolve: any, reject: any) => {
        post(_jwtTokenURL, {
        }, (err: any, resp: any, body: any) => {
            if (resp) {
                let reponseJenk = JSON.parse(resp.body);
                return resolve(reponseJenk.result);
                // return reponseJenk.result;
            } else {
                return reject('Error while getting the status of the project');
            }
        });
    });
}

async function deleteJob(projectName: string): Promise<any> {
    let _jwtTokenURL = `http://192.168.100.29:8080/job/${projectName}/doDelete`;
    return new Promise<any>((resolve: any, reject: any) => {
        post(_jwtTokenURL, {
        }, (err: any, resp: any, body: any) => {
            if (resp && resp.statusCode == 302) {
                return resolve(`${projectName} is deleted successfully :-)  ...`);
            } else {
                return reject(`Error while deleting the project ${projectName}`);
            }
        });
    });
}

async function buildWithParameters(values: string[]): Promise<any> {
    let _jwtTokenURL = `http://192.168.100.29:8080/job/${values[1]}/${values[0]}?token=zilker&name=${values[2]}&password=${values[3]}`;
    return new Promise<any>((resolve: any, reject: any) => {
        post(_jwtTokenURL, {
        }, (err: any, resp: any, body: any) => {
            if (resp && resp.statusCode == 201) {
                return resolve(`${values[1]} is builded successfully :-)  ...`);
            } else {
                return reject(`Error building the project ${values[1]}`);
            }
        });
    });
}
