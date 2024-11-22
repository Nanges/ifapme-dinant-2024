import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import cn from 'classnames';

type ButtonVariant = 'Primary' | 'Secondary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
}

export function Button(props: ButtonProps){
    const {type, className, ...remaining} = props;
    const defaultType = type ? 'button' : type;
    const variant: ButtonVariant = props.variant ?? 'Primary';
    const variantClass = styles[variant];

    return <button 
        type={defaultType}
        className={cn(className, styles.Button, variantClass)} 
        {...remaining}
    />
}