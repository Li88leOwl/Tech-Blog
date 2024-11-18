import React from 'react'
import styles from './menuCategories.module.css'
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link> 
        <Link href='/blog' className={`${styles.categoryItem} ${styles.cybersec}`}>Cybersec</Link> 
        <Link href='/blog' className={`${styles.categoryItem} ${styles.cloud}`}>Cloud</Link> 
        <Link href='/blog' className={`${styles.categoryItem} ${styles.gaming}`}>Gaming</Link> 
        <Link href='/blog' className={`${styles.categoryItem} ${styles.lifestyle}`}>Lifestyle</Link>
        <Link href='/blog' className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link> 
       
      </div>
  )
}

export default MenuCategories