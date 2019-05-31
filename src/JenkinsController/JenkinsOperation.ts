// tslint:disable-next-line: no-var-requires
const fetch = require('node-fetch');

export {
    fetchAsync
};

async function fetchAsync(projectName: string, workArea: string, commitId: string): Promise<string> {
    let url = `http://127.0.0.1:8080/job/${projectName}/buildWithParameters?token=raj&DB_USER_NAME=Rajesh&DB_USER_PASSWORD=Zilker@1234&DB_NAME=mockdb&VERSION=1.0&admin_first_name=rajesh&admin_last_name=kannan&admin_email=rkannan@ztech.io&admin_user_name=admin&admin_password=admin`;
    var jobResponse = await fetch(url, { method: 'POST' });
    console.log("----------------Response-----------------");
    console.log(jobResponse);
    console.log("----------------Response-----------------");
    const data = await jobResponse.json();
    console.log(data);
    // only proceed once second promise is resolved
    return data;
}