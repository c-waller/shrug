// feed page

import styles from "./feed.module.css";
import MainTopicTitle from "../components/MainTopicTitle";

// these are examples!!!!!!!!!
const shrugs = [
  {
    title: "A thought",
    content: "Does elon musk tell people he's african american?",
    date: "9 hours ago",
    nick: "eli",
    id: "m8czd-wl56e",
    tags: ["random", "thoughts"],
    comments: 23,
  },
  {
    title: "finals week soon",
    content: "its over for me",
    nick: "someone",
    date: "3 hours ago",
    id: "q7fkp-hu24a",
    tags: [],
    comments: 5,
  },
  {
    title: "Mind empty",
    content: "No thoughts.",
    date: "6 hours ago",
    nick: "someone",
    id: "x3nvt-kg91z",
    tags: ["mindfulness"],
    comments: 0,
  },
  {
    title: "Note To Self",
    content: "Drink some water. Stand up. Breathe. You're doing fine.",
    date: "14 hours ago",
    nick: "someone",
    id: "a1xrf-vn83y",
    tags: ["selfcare", "reminder"],
    comments: 8,
  },
  {
    title: "Bored",
    content: `console.log("maybe this will work");\n// it didn't`,
    date: "15 hours ago",
    nick: "x",
    id: "z9hdp-rm70q",
    tags: ["coding", "debugging"],
    comments: 3,
  },
  {
    title: "It's never too late",
    content:
      "There's a famous Japanese proverb that says, \"if you find yourself on the wrong train, get off at the next station.\" It doesn't matter if you have to pay a high cost for a new ticket. It doesn't matter if you're embarrassed to have made a mistake. Every price you pay to fix the situation is worth not going the wrong way, and starting to go the right way. Not having the courage to get off means going to the wrong destination. This, of course, isn't about trains. It's about life.",
    date: "1 hour ago",
    nick: "thethinker",
    id: "t2wqx-mk45n",
    tags: [],
    comments: 12,
  },
  {
    title: "Observation",
    content: "People who walk fast in airports probably run entire empires",
    date: "2 hours ago",
    nick: "someone",
    id: "k4tjm-uz33c",
    tags: ["observation", "travel"],
    comments: 15,
  },
  {
    title: "I Miss Old Youtube",
    content:
      "bring back the weird stuff from 2009!!! i wanna see a potato singing again!!",
    date: "22 hours ago",
    nick: "someone",
    id: "v6gsl-yt28b",
    tags: ["nostalgia", "youtube", "unemployed"],
    comments: 42,
  },
  {
    title: "dream log",
    content:
      "i was riding a bike through the clouds, racing a bird that sounded like it was beatboxing. woke up and my legs hurt.",
    date: "8 hours ago",
    nick: "someone",
    id: "r5bze-pc60v",
    tags: ["dreams", "weird"],
    comments: 7,
  },
  {
    title: "I still haven't found an internship",
    content: "am i cooked?",
    date: "12 hours ago",
    nick: "someone",
    id: "n0yjd-xq17s",
    tags: [],
    comments: 19,
  },
];

export default function Feed() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <MainTopicTitle />
        {shrugs.map((shrug, index) => (
          <article className={styles.shrug} key={index}>
            <h2 className={styles.title}>{shrug.title}</h2>
            <div className={styles.description}>
              {shrug.content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            {shrug.tags.length > 0 ? (
              <div className={styles.tags}>
                {shrug.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}
            <div className={styles.metadataContainer}>
              <div className={styles.metadata}>
                <span>{shrug.date} </span>
                <span>· </span>
                <span>{shrug.nick} </span>
              </div>
              <div className={styles.commentsContainer}>
                <span className={styles.comments}> {shrug.comments} </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles.commentIcon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
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
