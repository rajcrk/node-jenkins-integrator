"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data/data"));
/**
 * GET /All Asset
 * Signup page.
 */
exports.getAllAsset = (req, res) => {
    res.send(data_1.default);
};
//# sourceMappingURL=asset.js.map