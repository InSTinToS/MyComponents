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
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const react_1 = __importStar(require("react"));
const SimpleSlider = (0, react_1.forwardRef)(({ items, liProps, leftButton, rightButton, startFrom = 'start', animatePresenceProps }, ref) => {
    const [{ index, direction }, setSlider] = (0, react_1.useState)({
        index: startFrom === 'start' ? 0 : items.length - 1,
        direction: startFrom === 'start' ? 'left' : 'right'
    });
    const itemVariants = {
        enter: { x: '0%', opacity: 1 },
        exit: { x: direction === 'right' ? '-50%' : '50%', opacity: 0 },
        initial: { x: direction === 'right' ? '-50%' : '50%', opacity: 0 }
    };
    const onRightClick = () => {
        setSlider(prev => {
            const newIndex = prev.index + 1;
            return {
                direction: 'right',
                index: newIndex <= items.length - 1 ? newIndex : prev.index
            };
        });
    };
    const onLeftClick = () => {
        setSlider(prev => {
            const newIndex = prev.index - 1;
            return {
                direction: 'left',
                index: newIndex >= 0 ? newIndex : prev.index
            };
        });
    };
    const getInfo = () => ({
        index,
        direction,
        showLeft: index !== 0,
        showRight: index !== items.length - 1
    });
    (0, react_1.useImperativeHandle)(ref, () => ({ onRightClick, onLeftClick, getInfo }), [
        getInfo
    ]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        index !== 0 && leftButton,
        react_1.default.createElement(framer_motion_1.AnimatePresence, Object.assign({ exitBeforeEnter: true }, animatePresenceProps), items.map((item, itemIndex) => itemIndex === index && (react_1.default.createElement(framer_motion_1.motion.li, Object.assign({ exit: 'exit', animate: 'enter', key: itemIndex, initial: 'initial', variants: itemVariants, transition: { type: 'tween', duration: 0.5 } }, liProps), item)))),
        index !== items.length - 1 && rightButton));
});
SimpleSlider.displayName = 'SimpleSlider';
exports.default = SimpleSlider;
//# sourceMappingURL=index.js.map