import { FC, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames, Mods } from '../../lib/ClasseNames';

type ButtonSize = "small" | "medium" | "large" | "extra_large";
type ButtonVariant = "default" | "primary_white" | "outline";

interface ButtonProps {
    children: ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    className?: string; 
    max?: boolean; 
}
export const Button: FC<ButtonProps> = (props) => {
  const { children, className, variant = "default", size = "medium", max = false } = props;

  const sizeClasses: Record<ButtonSize, string> = {
    small: cls.small,
    medium: cls.medium,
    large: cls.large,
    extra_large: cls.large_extra,
  };

  const variantClasses: Record<ButtonVariant, string> = {
    default: cls.default,
    primary_white: cls.primary_white,
    outline: cls.outline,
  };

  const mods: Mods = {
    [cls.max]: max,
  };

  const classes = [
    variant && variantClasses[variant],
    size && sizeClasses[size],
    className,
  ].filter(Boolean) as string[] 

  return (
    <button className={classNames(cls.btn, mods, classes)}>
      {children}
    </button>
  );
};
