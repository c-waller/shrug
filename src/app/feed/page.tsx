// feed page

import styles from "./feed.module.css";
import MainTopicTitle from "../components/MainTopicTitle";
import CommentButton from "../components/CommentButton";
import json from '../lib/data.json';
import { Shrug } from "../types/shrug";

const shrugs: Shrug[] = json as unknown as Shrug[];

export default function Feed() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <MainTopicTitle /> */}
        {shrugs.map((shrug, index) => (
          <article className={styles.shrug} key={index}>

            {shrug.type === "text" && (
              <>
                <h2 className={styles.title}>{shrug.title}</h2>
                <div className={styles.description}>
                  {shrug.content.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </>
            )}

            {shrug.type === "image" && (
              <div className={styles.imageContainer}>
                <img
                  src={shrug.image}
                  alt={shrug.title || "Image"}
                  className={styles.image}
                />
              </div>
            )}

            {shrug.tags.length > 0 && (
              <div className={styles.tags}>
                {shrug.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <div className={styles.metadataContainer}>
              <div className={styles.metadata}>
                <span>{shrug.createdAt} </span>
                <span>· </span>
                <span>{shrug.nick} </span>
              </div>
              <div className={styles.commentsContainer}>
                <span className={styles.comments}> {shrug.comments} </span>
                <CommentButton />
                <span className={styles.tooltiptext}>
                  {shrug.comments === 1
                    ? "1 thought"
                    : `${shrug.comments} thoughts`}
                </span>
              </div>
            </div>
          </article>
        ))}
      </main>
      <footer className={styles.footer}>
        <p className={styles.pageNumber}> newer </p>
        <p className={styles.pageNumber}> page 2 of 3 </p>
        <p className={styles.pageNumber}> older </p>
      </footer>
    </div>
  );
}
