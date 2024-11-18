import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, Little🦉, here!</b> Discover my stories and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/l i t t l e_Owl.png" alt='' fill className={styles.image}/>
          </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>"Code, Cloud, and the Journey Beyond"</h1>
          <p className={styles.postDesc}>For Jeffery Gerald, the journey into the world of technology wasn’t the obvious choice. As a kid, he didn’t grow up dreaming of coding or cybersecurity. In fact, he had entirely different aspirations. He wanted to be an artist, a writer, a traveler—someone whose life would be filled with creativity and exploration. Technology seemed like something distant, a tool to help with other dreams, not a path in itself.

But life has a funny way of shifting our direction, and somewhere along the way, Jeffery’s path veered into the world of tech.</p>

            <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>

  )
}

export default Featured;

