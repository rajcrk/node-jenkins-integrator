import { Request, Response } from "express";
import * as JenkinsOperation from '../JenkinsController/JenkinsOperation';

export let startJenkinsJob = (req: Request, res: Response) => {

    let chatBotMessage = formattingMessage(req);
    /*
    Checking if the user provided message is valid or not 
    */
    if (!isMessageValid(chatBotMessage)) {
        res.send({
            "cards": [
                {
                    "sections": [
                        {
                            "widgets": [
                                {
                                    "textParagraph": {
                                        "text": "<b>Mr. Meeseeks</b>:<br>Seems like your message is not following the format<hr><br>Format for using this bot <b><font color=\"#0000ff\"><br>build [project-name] [work-area] [commit-id] </font></b><br>Format for checking status<b><font color=\"#0000ff\"><br>status [project-name]</font></b><br>Format for deleting job<b><font color=\"#0000ff\"><br>delete [project-name]</font></b><br>Format for building with param <b><font color=\"#0000ff\"><br>buildWithParameters [project-name]</font></b>"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        return;
    }
    let message = SplitString(chatBotMessage);
    var job = message[0];
    var projectName = message[1];
    var workArea = message[2];
    var commitId = message[3];
    if (message[0] == 'build') {
        JenkinsOperation.buildProject(job, projectName, workArea, commitId)
            .then(data => {
                console.log(data);
                res.send({ text: data });
            })
            .catch(err => {
                res.send({ text: `Seems Something Went Wrong !! ...${err}` });
            })
    } else if (message[0] == 'status') {
        JenkinsOperation.getBuildConsole(projectName)
            .then(data => {
                res.send({ text: data.toString() });
            })
            .catch(err => {
                res.send({ text: `Seems Something Went Wrong in getting build status of ${projectName} !! ...${err}` });
            })
    }
    else if (message[0] == 'delete') {
        JenkinsOperation.deleteJob(projectName)
            .then(data => {
                res.send({ text: data.toString() });
            })
            .catch(err => {
                res.send({ text: `Error deleting the ${projectName} !! ...${err}` });
            })
    }
    else if (message[0] == 'buildWithParameters') {
        var split = SplitString(chatBotMessage);
        JenkinsOperation.buildWithParameters(split)
            .then(data => {
                res.send({ text: data.toString() });
            })
            .catch(err => {
                res.send({ text: `Error deleting the ${projectName} !! ...${err}` });
            })
    } else {
        res.send({
            "cards": [
                {
                    "sections": [
                        {
                            "widgets": [
                                {
                                    "textParagraph": {
                                        "text": "<b>Mr. Meeseeks</b>:<br>Seems like your message is not following the format<hr><br>Format for using this bot <b><font color=\"#0000ff\"><br>build [project-name] [work-area] [commit-id] </font></b><br>Format for checking status<b><font color=\"#0000ff\"><br>status [project-name]</font></b><br>Format for deleting job<b><font color=\"#0000ff\"><br>delete [project-name]</font></b><br>Format for building with param <b><font color=\"#0000ff\"><br>buildWithParameters [project-name]</font></b>"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        return;
    }
};

function SplitString(inputMessage: string) {
    let res = [];
    res = inputMessage.split(" ");
    console.log(res);
    return res;
}

function getParameters(paramterString: string) {
    var splittedString = SplitString(paramterString);
}

function formattingMessage(req: Request): string {
    let text = '';
    if (req.body.type === 'ADDED_TO_SPACE' && req.body.space.type === 'ROOM') {
        text = `Thanks for adding me to ${req.body.space.displayName}\nWelcome to the super awesome Zilker Deploy Bot, Mr. Meeseeks\nUsing me you can deploy projects by providing in the depolyment ID\nSounds fun right ?\nFormat for using this bot\nbuild <project-name> <work-area> <commit-id>`;
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

function isMessageValid(message: string): boolean {
    let splittedMessage = message.split(" ");
    if (splittedMessage.length < 2) {
        return false;
    }
    return true;
}
