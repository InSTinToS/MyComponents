import { ISimpleSliderForward, ISimpleSliderProps } from './types';
import { TMeta, TStory } from '../../types/storybook.types';
import SimpleSlider from './index';
import React from 'react';
declare const metadata: TMeta<typeof SimpleSlider>;
export declare const Default: TStory<React.ForwardRefExoticComponent<ISimpleSliderProps & React.RefAttributes<ISimpleSliderForward>>>;
export default metadata;
