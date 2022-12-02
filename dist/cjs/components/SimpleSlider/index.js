"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logic_1 = __importDefault(require("./logic"));
const framer_motion_1 = require("framer-motion");
const react_1 = __importStar(require("react"));
const SimpleSlider = (0, react_1.forwardRef)(({ items, liProps, leftButton, rightButton, startFrom = 'start', animatePresenceProps }, ref) => {
    const { index, itemVariants } = (0, logic_1.default)({ ref, items, startFrom });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        index !== 0 && leftButton,
        react_1.default.createElement(framer_motion_1.AnimatePresence, Object.assign({ exitBeforeEnter: true }, animatePresenceProps), items.map((item, itemIndex) => itemIndex === index && (react_1.default.createElement(framer_motion_1.motion.li, Object.assign({ exit: 'exit', animate: 'enter', key: itemIndex, initial: 'initial', variants: itemVariants, transition: { type: 'tween', duration: 0.5 } }, liProps), item)))),
        index !== items.length - 1 && rightButton));
});
SimpleSlider.displayName = 'SimpleSlider';
exports.default = SimpleSlider;
//# sourceMappingURL=index.js.map