import { AnimatePresenceProps, HTMLMotionProps } from 'framer-motion';
import React, { ReactNode } from 'react';
interface ISimpleSliderState {
    index: number;
    direction: 'right' | 'left';
}
export interface ISimpleSliderForward {
    onLeftClick: () => void;
    onRightClick: () => void;
    getInfo: () => ISimpleSliderState & {
        showLeft: boolean;
        showRight: boolean;
    };
}
export interface ISimpleSliderProps {
    items: ReactNode[];
    leftButton: ReactNode;
    rightButton: ReactNode;
    startFrom?: 'start' | 'end';
    liProps?: HTMLMotionProps<'li'>;
    animatePresenceProps?: AnimatePresenceProps;
}
declare const SimpleSlider: React.ForwardRefExoticComponent<ISimpleSliderProps & React.RefAttributes<ISimpleSliderForward>>;
export default SimpleSlider;
