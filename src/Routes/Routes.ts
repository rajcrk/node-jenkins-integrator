import { Request, Response } from "express";
import * as JenkinsOperation from '../JenkinsController/JenkinsOperation';
import { stringify } from "querystring";
/**
 * GET /All Asset
 * Veiw all property page.
 */
export let startJenkinsJob = (req: Request, res: Response) => {
    var resposeToSend;
    let sMessage = formattingMessage(req);
    let message = SplitString(sMessage);
    var projectName = message[1];
    var workArea = message[2];
    var commitId = message[3];

    JenkinsOperation.fetchAsync(projectName, workArea, commitId)
        .then(data => {
            console.log(data);
            resposeToSend = data;
        })
        .catch(reason => console.log(reason.message))

    console.log('Data Received is ', resposeToSend);
    res.send({ text: `${projectName} Setup Started` });
};

function SplitString(inputMessage: string) {
    let res = [];
    res = inputMessage.split(" ");
    console.log(res);
    return res;
}

function formattingMessage(req: Request): string {
    let text = '';
    if (req.body.type === 'ADDED_TO_SPACE' && req.body.space.type === 'ROOM') {
        text = `Thanks for adding me to ${req.body.space.displayName}`;
        // Case 2: When BOT was added to a DM
    } else if (req.body.type === 'ADDED_TO_SPACE'
        && req.body.space.type === 'DM') {
        text = `Thanks for adding me to a DM, ${req.body.user.displayName}`;
        // Case 3: Texting the BOT
    } else if (req.body.type === 'MESSAGE') {
        text = `${req.body.message.text}`;
    }
    return text;
}
