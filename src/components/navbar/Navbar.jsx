import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '../themeToggle/ThemeToggle'
import { AuthLinks } from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/github.png" alt="GitHub" width={24} height={24} />
        <Image src="/Discord.png" alt="Discord" width={24} height={24} />
        <Image src="/Reddit.png" alt="Reddit" width={24} height={24} />
        <Image src="/Instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/Pinterest.png" alt="Pinterest" width={24} height={24} />
      </div>

      {/* Replacing the text logo with an image */}
      <div className={styles.logo}>
        <Image
          src="/favicon.png"  // Replace with the path to your logo image
          alt="Website Logo"
          width={80}  // Adjust the width as needed
          height={80}  // Adjust the height as needed
        />
      </div>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
