import { Button } from "./components/Button/Button";
import styles from "./App.module.css";

export function App(){
  return <div className={styles.App}>
    <Button variant='Primary'>Primary button</Button>
    <Button variant='Secondary'>Secondary button</Button>
    <Button>Default</Button>
  </div>
}