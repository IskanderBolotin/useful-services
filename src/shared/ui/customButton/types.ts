import { ComponentProps, ElementType } from "react";

export const enum ButtonDirection {
  Left = "left",
  Top = "top",
  Right = "right",
  Bottom = "bottom"
};

export const enum ButtonViewType {
  Primary = 'primary-type',
  PrimaryBorder = 'primary-border-type',
  Common = 'common-type',
  CommonWarning = 'common-warning-type',
};


type CustomButtonOwnProps<E> = {
  as?: E;
  className?: string;
  icon?: IconSvg;
  iconGap?: number;
  isActive?: boolean;
  direction?: ButtonDirection;
  buttonViewType?: ButtonViewType;
  handler?: () => void;
} 

export type CustomButtonProps<E extends ElementType> = CustomButtonOwnProps<E> & Omit<ComponentProps<E>, keyof CustomButtonOwnProps<E>>;