import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.info}>
      <div className={styles.logo}>
        <Image src='/logo.png' alt='Jeffery Blog' width={50} height={50}/>
        <h1 className={styles.logoText}>Jeffery Gerald's Blog</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={styles.icons}>
          <Image src='/github.png' alt='' width={18} height={18} /> 
          <Image src='/Discord.png' alt='' width={18} height={18} />
          <Image src='/instagram.png' alt='' width={18} height={18} />
          <Image src='/Reddit.png' alt='' width={18} height={18} />
          <Image src='/Pinterest.png' alt='' width={18} height={18} />
        </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href='/'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>Fenrir</Link>
          </div>

          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href='/'>Cybersec</Link>
            <Link href='/'>Cloud</Link>
            <Link href='/'>Gaming</Link>
            <Link href='/'>Coding</Link>
          </div>

          <div className={styles.list}>
            <span className={styles.listTitle}>Socials</span>
            <Link href='/'>Github</Link>
            <Link href='/'>Discord</Link>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Reddit</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer