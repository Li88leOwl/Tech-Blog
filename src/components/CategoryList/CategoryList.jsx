import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.coding}`}>
          <Image 
          src="/coding.png" 
          alt='' 
          width={32} 
          height={32} 
          className={styles.image}
          />
          Coding
          </Link>

          <Link href={'/blog'} className={`${styles.category} ${styles.cybersec}`}>
          <Image src="/cybersec.png" alt='' width={32} height={32} className={styles.image}/>
          CyberSec
          </Link>


          <Link href={'/blog'} className={`${styles.category} ${styles.cloud}`}>
          <Image src="/cloud.png" alt='' width={32} height={32} className={styles.image}/>
          Cloud
          </Link>


          <Link href={'/blog'} className={`${styles.category} ${styles.gaming}`}>
          <Image src="/gaming.png" alt='' width={32} height={32} className={styles.image}/>
          Gaming
          </Link>


          <Link href={'/blog'} className={`${styles.category} ${styles.lifestyle}`}>
          <Image src="/logo.png" alt='' width={32} height={32} className={styles.image}/>
          Lifestyle
          </Link>

          <Link href={'/blog'} className={`${styles.category} ${styles.travel}`}>
          <Image src="/travel.png" alt='' width={32} height={32} className={styles.image}/>
          Travel
          </Link>
      </div>
      </div>
  )
}

export default CategoryList