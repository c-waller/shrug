// feed page

import styles from "./feed.module.css";
import MainTopicTitle from "../components/MainTopicTitle";
import CommentButton from "../components/CommentButton";

// these are examples!!!!!!!!!
const shrugs = [
  {
    title: "",
    content: "",
    date: "2 hours ago",
    nick: "someone",
    id: "k4tjm-uz33c",
    tags: ["fashion", "margiela", "unemployed", "im the second lion"],
    comments: 15,
    img: "https://media.discordapp.net/attachments/1233498823641534537/1310089561409585243/IMG_8304.jpg?ex=681d7afb&is=681c297b&hm=01b6d9fe139d2fb759a9ffa06af35afac55a469bb52d1de8a9c4a159296ae4dd&=&format=webp&width=1302&height=1664",
  },
  {
    title: "A thought",
    content: "Does elon musk tell people he's african american?",
    date: "9 hours ago",
    nick: "eli",
    id: "m8czd-wl56e",
    tags: ["random", "thoughts"],
    comments: 23,
    img: null,
  },
  {
    title: "finals week soon",
    content: "its over for me",
    nick: "someone",
    date: "3 hours ago",
    id: "q7fkp-hu24a",
    tags: [],
    comments: 1,
    img: null,
  },
  {
    title: "Mind empty",
    content: "No thoughts.",
    date: "6 hours ago",
    nick: "someone",
    id: "x3nvt-kg91z",
    tags: ["mindfulness"],
    comments: 0,
    img: "https://media.discordapp.net/attachments/1233498823641534537/1258265530113200138/IMG_6886.png?ex=681d7897&is=681c2717&hm=325de523b1484aa3baf339993d7d37eb3f2741a9ddc1765f99495cda67dda246&=&format=webp&quality=lossless&width=1738&height=1456",
  },
  {
    title: "Note To Self",
    content: "Drink some water. Stand up. Breathe. You're doing fine.",
    date: "14 hours ago",
    nick: "someone",
    id: "a1xrf-vn83y",
    tags: ["selfcare", "reminder"],
    comments: 8,
    img: null,
  },
  {
    title: "Bored",
    content: `console.log("maybe this will work");\n// it didn't`,
    date: "15 hours ago",
    nick: "x",
    id: "z9hdp-rm70q",
    tags: ["coding", "debugging"],
    comments: 3,
    img: null,
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
    img: null,
  },
  {
    title: "I Miss Old Youtube",
    content:
      "bring back the weird stuff from 2009!!! i wanna see a potato singing again!!",
    date: "22 hours ago",
    nick: "someone",
    id: "v6gsl-yt28b",
    tags: ["oldyt"],
    comments: 42,
    img: null,
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
    img: null,
  },
  {
    title: "I still haven't found an internship",
    content: "am i cooked?",
    date: "12 hours ago",
    nick: "someone",
    id: "n0yjd-xq17s",
    tags: [],
    comments: 19,
    img: null,
  },
  {
    title: "why do we exist",
    content: "just to suffer?",
    date: "4 hours ago",
    nick: "someone",
    id: "p9xyz-abc12",
    tags: ["deep", "existential", "philosophy", "thoughts", "life"],
    comments: 31,
    img: null,
  },
  {
    title: "my cat just",
    content: "meowed in morse code. SOS. what do i do",
    date: "1 hour ago",
    nick: "someone",
    id: "c7def-ghi34",
    tags: ["cats"],
    comments: 27,
    img: null,
  },
  {
    title: "TIL",
    content: "if you type 'google' into google, it will break the internet",
    date: "5 hours ago",
    nick: "someone",
    id: "t5jkl-mno56",
    tags: ["tech", "lifehack", "internet"],
    comments: 14,
    img: null,
  },
  {
    title: "found this in my notes app",
    content:
      "buy milk\nremember to forget\nwhy is the sky blue\ncall mom\nwhat if we're all just NPCs in someone's dream",
    date: "7 hours ago",
    nick: "notetaker",
    id: "n3pqr-stu78",
    tags: ["notes", "random", "thoughts", "life"],
    comments: 9,
    img: null,
  },
  {
    title: "my brain at 3am",
    content:
      "what if birds are just government drones and that's why they're always watching us",
    date: "3 hours ago",
    nick: "someone",
    id: "i1vwx-yz90",
    tags: ["conspiracy", "birds arent real"],
    comments: 45,
    img: null,
  },
  {
    title: "shower thought",
    content: "if you think about it, a hot dog is just a meat popsicle",
    date: "6 hours ago",
    nick: "someone",
    id: "f2abc-def12",
    tags: ["food", "shower thoughts"],
    comments: 18,
    img: null,
  },
  {
    title: "serious question",
    content:
      "if you could have any superpower, but it had to be mildly inconvenient, what would you choose? mine would be the ability to turn invisible but only when no one is looking at me",
    date: "2 hours ago",
    nick: "someone",
    id: "s4ghi-jkl34",
    tags: ["superpowers", "discussion"],
    comments: 52,
    img: null,
  },
  {
    title: "life update",
    content:
      "just realized i've been using my phone upside down for the past 3 years",
    date: "1 hour ago",
    nick: "someone",
    id: "c6mno-pqr56",
    tags: ["life", "oops"],
    comments: 33,
    img: null,
  },
  {
    title: "deep cut",
    content:
      "sometimes i wonder if my plants are judging me for not watering them enough. like, they're just sitting there, silently judging my life choices",
    date: "4 hours ago",
    nick: "someone",
    id: "p8stu-vwx78",
    tags: ["plants", "existential"],
    comments: 21,
    img: null,
  },
  {
    title: "real talk",
    content:
      "we're all just trying to find our place in this world, one meme at a time",
    date: "3 hours ago",
    nick: "someone",
    id: "d0yza-bcd90",
    tags: ["philosophy", "memes"],
    comments: 29,
    img: null,
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
            {shrug.img && (
              <div className={styles.imageContainer}>
                <img
                  src={shrug.img}
                  alt={shrug.title}
                  className={styles.image}
                />
              </div>
            )}
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
