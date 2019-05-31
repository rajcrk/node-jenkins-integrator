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
    JenkinsOperation.fetchAsync()
        .then(data => {
        console.log(data);
        resposeToSend = data;
    })
        .catch(reason => console.log(reason.message));
    console.log('Data Received is ', resposeToSend);
    // res.send(assetData);
};
//# sourceMappingURL=Routes.js.map