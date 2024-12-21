import styles from "./Badge.module.css"
import cn from "classnames"

export type BadgeProps = {
    status:"Draft"|"Published"|"Archived";
}

export function Badge(props: BadgeProps){
    const badgeClasses = cn(styles.Badge, styles[props.status]);
    return <span className={badgeClasses}>{props.status}</span>
}