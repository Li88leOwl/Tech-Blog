import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/cybersec.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.cybersec}`}>Cybersec</span>
          <h3 className={styles.postTitle}>
          A strange email appeared in my inbox, and before I knew it, my personal details were being held hostage by a hacker halfway around the world.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jeffery Gerald</span>
            <span className={styles.date}> - 10.11.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.gaming}`}>
            Gaming
          </span>
          <h3 className={styles.postTitle}>
          The decisions I made in the game mirrored my own struggles in life. 
          Do I take the easy path, or do I fight for what’s right? Do I sacrifice personal gain for the greater good? 
          It was a digital reflection of humanity at its best and worst, and for the first time, I realized how much games shape our view of the world. 
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Christopher Jnr</span>
            <span className={styles.date}> - 09.08.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
          But in that quiet moment, as I stared at the screen and saw the program run flawlessly for the first time, something inside me clicked. It felt like 
          I had unlocked a secret door, not just to a world of technology, but to a deeper understanding of myself.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Duncan</span>
            <span className={styles.date}> - 19.06.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/logo.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.cloud}`}>
            Cloud
          </span>
          <h3 className={styles.postTitle}>
          I’d always been someone who liked to keep things close to home—my files, my documents, everything neatly stored on my laptop. But then, a hard drive failure came out of nowhere. In the blink of an eye, everything I thought was secure was gone.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jeffery Gerald</span>
            <span className={styles.date}> - 12.07.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;