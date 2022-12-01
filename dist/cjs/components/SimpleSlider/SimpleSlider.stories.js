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
exports.Default = void 0;
const index_1 = __importDefault(require("./index"));
const react_1 = __importStar(require("react"));
const metadata = {
    argTypes: {},
    title: 'SimpleSlider',
    component: index_1.default,
    parameters: {
        docs: { description: { component: `Simple slider component` } }
    }
};
const Template = (args) => {
    const simpleSliderRef = (0, react_1.useRef)(null);
    const items = [
        react_1.default.createElement("li", { key: '1', style: { width: '100%' } }, "Page 1"),
        react_1.default.createElement("li", { key: '2', style: { width: '100%' } }, "Page 2")
    ];
    return (react_1.default.createElement("ul", { style: {} },
        react_1.default.createElement(index_1.default, Object.assign({}, args, { items: items, ref: simpleSliderRef, leftButton: react_1.default.createElement("button", { type: 'button', onClick: () => { var _a; return (_a = simpleSliderRef.current) === null || _a === void 0 ? void 0 : _a.onLeftClick(); } }, "Left"), rightButton: react_1.default.createElement("button", { type: 'button', onClick: () => { var _a; return (_a = simpleSliderRef.current) === null || _a === void 0 ? void 0 : _a.onRightClick(); } }, "Right") }))));
};
exports.Default = Template.bind({});
exports.Default.args = {};
exports.default = metadata;
//# sourceMappingURL=SimpleSlider.stories.js.map