// tslint:disable-next-line: no-var-requires
const fetch = require('node-fetch');

export {
    fetchAsync
};

async function fetchAsync(): Promise<string> {
    var sentiment = await fetch('http://localhost:8080/job/print_hello_world/build?token=raj', { method: 'POST' });
    console.log("----------------Response-----------------");
    console.log(sentiment);
    console.log("----------------Response-----------------");

    const data = await sentiment.json();
    console.log(data);
    // only proceed once second promise is resolved
    return data;
}