// landing page

import MainButton from "./components/MainButton";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() 
{
  return (
    <div className={styles.container}>
      <h1> ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) </h1>
      <MainButton> Sign Up </MainButton>
      <Link href={"feed"}> <MainButton className={styles.signInButton}> Sign In </MainButton> </Link>
    </div>
  );
}
