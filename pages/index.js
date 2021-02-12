import Head from 'next/head'
import Link from 'next/link'
import HeadInfo from '../components/HeadInfo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
    <HeadInfo title="Home" data="Home Content"/>
    <div>
          <h2 className={styles.title}>Home</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic quidem dolorum distinctio iste in totam quaerat, voluptatem tempore cumque accusantium error, exercitationem numquam neque quibusdam, doloribus provident corrupti tenetur?</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic quidem dolorum distinctio iste in totam quaerat, voluptatem tempore cumque accusantium error, exercitationem numquam neque quibusdam, doloribus provident corrupti tenetur?</p>
          <Link href="/ninjas"><a className={styles.btn}>See Ninja Lists</a></Link>
    </div>
  </>
  )
}
