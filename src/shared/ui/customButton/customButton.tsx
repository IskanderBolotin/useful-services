import { ElementType } from "react";
import cn from "classnames";
import { isDefined, isDefinedFn } from "shared/lib/isDefined";
import { ButtonDirection, ButtonViewType, CustomButtonProps } from "./types";
import s from "./customButton.module.scss";

const defaultElement = "button";

const CustomButton = <E extends ElementType = typeof defaultElement> ({ as, className, icon: Icon, iconGap, direction = ButtonDirection.Left, buttonViewType: buttonType = ButtonViewType.Common, handler, children, ...otherProps }: React.PropsWithChildren<CustomButtonProps<E>>) => {
  const TagName = as || defaultElement;
  const isButtonVertical = direction === ButtonDirection.Top || direction === ButtonDirection.Bottom;

  const getIconStyles = () => {
    let styles = {};

    switch(direction) {
      case ButtonDirection.Left:
        styles = {
          ...styles,
          marginRight: `${iconGap}px`
        };
        break;
      case ButtonDirection.Top:
        styles = {
          ...styles,
          marginBottom: `${iconGap}px`
        };
        break;
      case ButtonDirection.Right:
        styles = {
          ...styles,
          marginLeft: `${iconGap}px`
        };
        break;
      case ButtonDirection.Bottom:
        styles = {
          ...styles,
          marginTop: `${iconGap}px`
        };
        break;
    };

    return styles;
  };

  const renderIcon = () => {
    if (isDefined(Icon)) {
      return (
        <span className={s.icon} style={getIconStyles()}>
          <Icon />
        </span>
      )
    }
    return null;
  };

  const renderContent = () => {
    switch(direction) {
      case ButtonDirection.Left:
      case ButtonDirection.Top:
        return (
          <>
            {
              renderIcon()
            }
            {
              children
            }
          </>
        )
      case ButtonDirection.Right:
      case ButtonDirection.Bottom:
        return (
          <>
            {
              children
            }
            {
              renderIcon()
            }
          </>
        )
    }
  };

  const onClickHandler = () => {
    if (isDefinedFn(handler)) {
      handler()
    }
  };

  return (
    <TagName className={cn(s.button, s[buttonType], className)} {...otherProps} onClick={onClickHandler}>
      <span className={cn(s.inner, isButtonVertical && s.vertical)}>
        {
          renderContent()
        }
      </span>
    </TagName>
  )
};

export default CustomButton;