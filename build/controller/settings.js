"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSettings = void 0;
const settings_js_1 = __importDefault(require("../models/settings.js"));
const getSettings = async (req, res, next) => {
    try {
        const settings = await settings_js_1.default.find();
        return res.status(200).json({
            success: true,
            count: settings.length,
            data: settings
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.getSettings = getSettings;
const addSettings = async (req, res, next) => {
    try {
        const settings = await settings_js_1.default.create(req.body);
        return res.status(201).json({
            success: true,
            data: settings,
        });
    }
    catch (err) {
        console.error(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'You missed a field' });
        }
        res.status(500).json({ error: 'Server error' });
    }
    next();
};
exports.default = addSettings;
