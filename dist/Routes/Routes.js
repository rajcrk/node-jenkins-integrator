"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const JenkinsOperation = __importStar(require("../JenkinsController/JenkinsOperation"));
/**
 * GET /All Asset
 * Veiw all property page.
 */
exports.startJenkinsJob = (req, res) => {
    let isMessageValidBoolean;
    var resposeToSend;
    let chatBotMessage = formattingMessage(req);
    /*
    Checking if the user provided message is valid or not
    */
    // if (!isMessageValid(chatBotMessage)) { res.send({ text: `Semms like you typed in something wrong !, Dont worry follow this method\nZilker Deploy Bot, Mr. Meeseeks\nUsing me you can deploy projects by providing in the depolyment ID\nSounds fun right ?\nFormat for using this bot\nbuild <project-name> <work-area> <commit-id>` }) }
    if (!isMessageValid(chatBotMessage)) {
        res.send({
            "cards": [
                {
                    "sections": [
                        {
                            "widgets": [
                                {
                                    "textParagraph": {
                                        "text": "<b>Mr. Meeseeks</b>:<br>Seems like your message is not following the format<hr><br>Format for using this bot <b><font color=\"#0000ff\"><br>build [project-name] [work-area] [commit-id] </font></b>"
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
    var projectName = message[1];
    var workArea = message[2];
    var commitId = message[3];
    console.log('Just before fetchAsync');
    JenkinsOperation.fetchAsync(projectName, workArea, commitId)
        .then(data => {
        console.log('=================Entering into JenkinsOperation==========================');
        console.log(data);
        resposeToSend = data;
        res.send({ text: `${projectName} setup started ...` });
    })
        .catch(reason => {
        console.log(reason.message);
        res.send({ text: `Seems Something Went Wrong !! ...` });
    });
};
function SplitString(inputMessage) {
    let res = [];
    res = inputMessage.split(" ");
    console.log(res);
    return res;
}
function formattingMessage(req) {
    let text = '';
    if (req.body.type === 'ADDED_TO_SPACE' && req.body.space.type === 'ROOM') {
        text = `Thanks for adding me to ${req.body.space.displayName}\nWelcome to the super awesome Zilker Deploy Bot, Mr. Meeseeks\nUsing me you can deploy projects by providing in the depolyment ID\nSounds fun right ?\nFormat for using this bot\nbuild <project-name> <work-area> <commit-id>`;
        // Case 2: When BOT was added to a DM
    }
    else if (req.body.type === 'ADDED_TO_SPACE'
        && req.body.space.type === 'DM') {
        text = `Thanks for adding me to a DM, ${req.body.user.displayName}`;
        // Case 3: Texting the BOT
    }
    else if (req.body.type === 'MESSAGE') {
        text = `${req.body.message.text}`;
    }
    return text;
}
function isMessageValid(message) {
    let splittedMessage = message.split(" ");
    if (splittedMessage.length != 4 && !(splittedMessage[2] == "ui" || splittedMessage[2] == "service")) {
        return false;
    }
    return true;
}
//# sourceMappingURL=Routes.js.map