import { FC, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import cls from './Input.module.scss'
import { classNames, Mods } from '../../lib/ClasseNames'

type InputVariant = "small" | "medium" | "big"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    variant?: InputVariant
    value: string
    error?: string
}

export const Input: FC<InputProps> = forwardRef((props) => {

    const { value = '', error, placeholder, className = '', variant = 'medium', ...rest} = props;

    const variantClasses: Record<InputVariant, string> = {
        small: cls.small,
        medium: cls.medium,
        big: cls.big
    }
    
    const classes = [
        variant && variantClasses[variant],
        className 
    ].filter(Boolean).join(''); 

    return (
       <div className={classNames(cls.container, {[cls.active]: value}, [className])}>
           <div className={cls.label}>
           <input value={value} className={classes} {...rest} /> 
           {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
           </div>
           {error && <span className={cls.error}>{error}</span>}
        </div>
    )
})