import Head from '../components/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className="container-fluid p-0">
          <h2>Welcome to my Portfolio.</h2>
          <h3 className="mt-4">This is Shashi and I am a Full Stack Developer!!!</h3>
          <hr />
          <Link to={'/about'} as={'/about'} href={'/about'}>
            <a className="nav-link js-scroll-trigger next-page-link">View About</a>
          </Link>
        </div>
    </div>
  )
}

