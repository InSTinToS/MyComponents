import SimpleSlider from './index';
import React, { useRef } from 'react';
const metadata = {
    argTypes: {},
    title: 'SimpleSlider',
    component: SimpleSlider,
    parameters: {
        docs: { description: { component: `Simple slider component` } }
    }
};
const Template = (args) => {
    const simpleSliderRef = useRef(null);
    const items = [
        React.createElement("li", { key: '1', style: { width: '100%' } }, "Page 1"),
        React.createElement("li", { key: '2', style: { width: '100%' } }, "Page 2")
    ];
    return (React.createElement("ul", { style: {} },
        React.createElement(SimpleSlider, Object.assign({}, args, { items: items, ref: simpleSliderRef, leftButton: React.createElement("button", { type: 'button', onClick: () => { var _a; return (_a = simpleSliderRef.current) === null || _a === void 0 ? void 0 : _a.onLeftClick(); } }, "Left"), rightButton: React.createElement("button", { type: 'button', onClick: () => { var _a; return (_a = simpleSliderRef.current) === null || _a === void 0 ? void 0 : _a.onRightClick(); } }, "Right") }))));
};
export const Default = Template.bind({});
Default.args = {};
export default metadata;
//# sourceMappingURL=SimpleSlider.stories.js.map