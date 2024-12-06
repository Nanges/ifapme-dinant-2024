import styles from "./App.module.css";
import { Badge } from "./components/Badge/Badge";

export function App(){
  return <div className={styles.App}>
    <Badge status="Draft">Brouillon</Badge>
    <Badge status="Published">Publié</Badge>
    <Badge status="Archived">Archivé</Badge>
  </div>
}