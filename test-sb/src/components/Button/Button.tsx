import { PropsWithChildren } from "react";
import styles from "./Button.module.css";
import cn from 'classnames';

type ButtonVariant = 'Primary' | 'Secondary';

// export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//     variant?: ButtonVariant;
// }

export type ButtonProps = PropsWithChildren<{
    variant?: ButtonVariant;
    className?:string;
}>;

export function Button(props: ButtonProps){
    const variant: ButtonVariant = props.variant ?? 'Primary';
    const variantClass = styles[variant];

    return <button
        type='button'
        className={cn(props.className, styles.Button, variantClass)}
        children={props.children} 
    />
}