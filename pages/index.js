import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Layout from "../components/layout/default";

export default function Home() {
  return (
      <Layout>
        <div className={styles.main_content}>
          <h1 className={styles.title}>
            Dashboard
          </h1>

          <h1 className="title">
            <Link href="/posts/first-post">
              <a>Go to posts</a>
            </Link>
          </h1>
        </div>
      </Layout>
  )
}
