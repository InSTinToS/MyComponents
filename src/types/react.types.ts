import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SVGAttributes,
  SetStateAction
} from 'react'

export type TSVGProps = SVGAttributes<SVGElement>
export type TFormProps = FormHTMLAttributes<HTMLFormElement>
export type TSetState<State> = Dispatch<SetStateAction<State>>
export type TInputProps = InputHTMLAttributes<HTMLInputElement>
export type TTimer = string | number | NodeJS.Timeout | undefined
export type TAnchorProps = ButtonHTMLAttributes<HTMLAnchorElement>

export type TDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export interface IChildrenProps {
  children?: ReactNode
}
