import styles from "./App.module.css";
import { Badge } from "./components/Badge/Badge";

export function App(){
  return <div className={styles.App}>
    <Badge status="Archived"/>
    <Badge status="Published"/>
  </div>
}