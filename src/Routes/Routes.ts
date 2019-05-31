// import async from 'async';
import { Request, Response } from "express";
import { AssetModel } from '../models/asset';
import * as JenkinsOperation from '../JenkinsController/JenkinsOperation';
/**
 * GET /All Asset
 * Veiw all property page.
 */
export let startJenkinsJob = (req: Request, res: Response) => {
    var resposeToSend;

    JenkinsOperation.fetchAsync()
        .then(data => {
            console.log(data);
            resposeToSend = data;
        })
        .catch(reason => console.log(reason.message))

    console.log('Data Received is ', resposeToSend);
    // res.send(assetData);
};
