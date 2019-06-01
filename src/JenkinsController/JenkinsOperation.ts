// tslint:disable-next-line: no-var-requires
const fetch = require('node-fetch');
const winston = require('winston');
import { post, get } from 'request';


export {
    fetchAsync
};

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


async function fetchAsync(projectName: string, workArea: string, commitId: string): Promise<any> {
    let url = `http://192.168.100.29:8080/job/ZbuildHack/build?token=dudes`;
    let _jwtTokenURL = `http://192.168.100.29:8080/job/ZbuildHack/lastBuild/api/json`;
    return new Promise<any>((resolve: any, reject: any) => {
        get(url, {
        }, (err: any, resp: any, body: any) => {
            // winston.debug('SOAData req sent. We won\'t be logging the request as  it contains critical userinfo');
            if (resp) {
                // winston.debug('%%%%%%%%%jeykjfef%%%%%%%%%%55 ', body);
                // winston.debug('Respeejjkehjefonse ', resp);
                // winston.debug('bodjhdgfdsgkfgdsy ', body);
                return new Promise<any>((resolve: any, reject: any) => {
                    post(_jwtTokenURL, {
                    }, (err: any, resp: any, body: any) => {
                        if (resp) {
                            //     winston.debug('%%%%%%%%%%%%%%%%%%%55 ', body);
                            let reponseJenk = JSON.parse(resp.body);
                            winston.debug('Response ', JSON.parse(resp.body));
                            winston.debug(reponseJenk.result);
                            return 'Random';
                        } else {
                            return 'Error while fetching the Status of the build';
                        }
                    });
                });
            } else {
                return 'Error while starting the build';
            }
        });
    });
}