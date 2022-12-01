import { ComponentMeta, ComponentStory } from '@storybook/react'
import { JSXElementConstructor } from 'react'

export type TMeta<
  TypeOfComponent extends
    | JSXElementConstructor<any>
    | keyof JSX.IntrinsicElements
> = ComponentMeta<TypeOfComponent>

export type TStory<
  TypeOfComponent extends
    | JSXElementConstructor<any>
    | keyof JSX.IntrinsicElements
> = ComponentStory<TypeOfComponent>
