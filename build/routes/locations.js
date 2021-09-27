"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const locations_js_1 = require("../controller/locations.js");
const router = express_1.default.Router();
router
    .route('/')
    .get(locations_js_1.getLocation)
    .post(locations_js_1.addLocation);
module.exports = router;
