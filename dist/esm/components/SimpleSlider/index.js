import { AnimatePresence, motion } from 'framer-motion';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
const SimpleSlider = forwardRef(({ items, liProps, leftButton, rightButton, startFrom = 'start', animatePresenceProps }, ref) => {
    const [{ index, direction }, setSlider] = useState({
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
    useImperativeHandle(ref, () => ({ onRightClick, onLeftClick, getInfo }), [
        getInfo
    ]);
    return (React.createElement(React.Fragment, null,
        index !== 0 && leftButton,
        React.createElement(AnimatePresence, Object.assign({ exitBeforeEnter: true }, animatePresenceProps), items.map((item, itemIndex) => itemIndex === index && (React.createElement(motion.li, Object.assign({ exit: 'exit', animate: 'enter', key: itemIndex, initial: 'initial', variants: itemVariants, transition: { type: 'tween', duration: 0.5 } }, liProps), item)))),
        index !== items.length - 1 && rightButton));
});
SimpleSlider.displayName = 'SimpleSlider';
export default SimpleSlider;
//# sourceMappingURL=index.js.map