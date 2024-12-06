import { PropsWithChildren } from "react";
import styles from "./Badge.module.css";
import cn from "classnames";

export type BadgeProps = PropsWithChildren<{
    status:'Published' | 'Draft' | 'Archived';
}>;

export function Badge(props:BadgeProps){
    const {status, children} = props;
    return <span className={cn(styles.Badge, styles[status])}>{children}</span>
}