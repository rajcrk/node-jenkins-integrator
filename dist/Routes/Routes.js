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
    var resposeToSend;
    let sMessage = formattingMessage(req);
    let message = SplitString(sMessage);
    console.log(`Message is ${message[0]} Message 2 is ${message[1]}, Message 3 is ${message[2]}`);
    var projectName = message[1];
    var workArea = message[2];
    var commitId = message[3];
    JenkinsOperation.fetchAsync(projectName, workArea, commitId)
        .then(data => {
        console.log(data);
        resposeToSend = data;
    })
        .catch(reason => console.log(reason.message));
    console.log('Data Received is ', resposeToSend);
    res.send({ text: `${projectName} Setup Started` });
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
        text = `Thanks for adding me to ${req.body.space.displayName}`;
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
//# sourceMappingURL=Routes.js.map