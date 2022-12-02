import useSimpleSlider from './logic';
import { AnimatePresence, motion } from 'framer-motion';
import React, { forwardRef } from 'react';
const SimpleSlider = forwardRef(({ items, liProps, leftButton, rightButton, startFrom = 'start', animatePresenceProps }, ref) => {
    const { index, itemVariants } = useSimpleSlider({ ref, items, startFrom });
    return (React.createElement(React.Fragment, null,
        index !== 0 && leftButton,
        React.createElement(AnimatePresence, Object.assign({ exitBeforeEnter: true }, animatePresenceProps), items.map((item, itemIndex) => itemIndex === index && (React.createElement(motion.li, Object.assign({ exit: 'exit', animate: 'enter', key: itemIndex, initial: 'initial', variants: itemVariants, transition: { type: 'tween', duration: 0.5 } }, liProps), item)))),
        index !== items.length - 1 && rightButton));
});
SimpleSlider.displayName = 'SimpleSlider';
export default SimpleSlider;
//# sourceMappingURL=index.js.map