import styles from "./new-shrug.module.css";
import NavBar from "../components/NavBar";

export default function NewPost()
{
    return(
        <div className={styles.container}>
            <NavBar />
            <p> This is where you write posts </p>
        </div>
    )
}