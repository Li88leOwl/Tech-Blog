
import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

 const Card = () => {
  return (
     <div className={styles.container}>
          <div className={styles.imageContainer}>
             <Image src='/p1.jpeg' alt='' fill  className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>26.09.24 - </span>
                <span className={styles.category}>GAMING</span>
            </div>
            <Link href='/'>
                <h1>The Game That Changed Everything</h1>
            </Link>
            <p className={styles.desc}>I’ve spent countless hours with my hands gripping a controller, immersed in pixelated worlds that felt more real than my own. But there was one game that stood apart—a story-driven RPG where the main character faced tough choices, each decision more impactful than the last. It wasn’t just a game. It was a mirror.

The decisions I made in the game mirrored my own struggles in life. Do I take the easy path, or do I fight for what’s right? Do I sacrifice personal gain for the greater good? It was a digital reflection of humanity at its best and worst, and for the first time, I realized how much games shape our view of the world. They’re not just distractions; they’re emotional journeys. 
            </p>
            <Link href='/'className={styles.link}>Read More</Link>
          </div>
        </div>
    )
}
export default Card
