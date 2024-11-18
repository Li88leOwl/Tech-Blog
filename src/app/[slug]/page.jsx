import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                    <Image src='/p1.jpeg' alt='' fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.uername}>Jeffery Gerald</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>  
            </div>
                <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
                </div>
          </div>
        <div className={styles.content}>
            <div className={styles.post}>
               <div className={styles.description}>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                     <h2>Lorem ipsum dolor sit amet,</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
               </div>
               <div className={styles.comment}>
              <Comments/>
            </div>
            </div>
            
            <Menu/>
                </div>
    </div>
  )
}

export default SinglePage
