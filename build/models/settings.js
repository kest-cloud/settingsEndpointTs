"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SetttingsSchema = new mongoose_1.default.Schema({
    image: { type: String },
    doors: { type: String },
    color: { type: String },
    type: { type: String },
    capacity: { type: String },
    private: { type: String },
    vehicleMake: { type: String },
    vehicleModel: { type: String },
    manufactureYear: { type: String },
    vehiclePlateNum: { type: String },
});
SetttingsSchema.pre('save', async function (next) {
    const Settings = SetttingsSchema;
    this.settings = {
        image: Settings.image,
        doors: Settings.doors,
        color: Settings.color,
        type: Settings.type,
        capacity: Settings.capacity,
        private: Settings.provate,
        vehicleMake: Settings.vehicleMake,
        vehicleModel: Settings.vehicleModel,
        manufacturerYear: Settings.manufacturerYear,
        vehiclePlateNum: Settings.vehiclePlateNum,
    };
});
const Settings = mongoose_1.default.model('Settings', SetttingsSchema);
exports.default = Settings;
//export { 'Location', LocationSchema };
