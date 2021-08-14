import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Layout from "../components/layout/default";
import CardSection from "../components/cardSection";

export default function Home() {
  return (
      <Layout>
        <div className={styles.main_content}>
            <div className={styles.main_column}>
                <CardSection/>
            </div>
            <div className={styles.main_column}>
                <div className={styles.card}>
                    <h2>
                        Goals
                    </h2>
                    <p>

                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        Outcome Statistics
                    </h2>
                    <p>

                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        New transaction
                    </h2>
                    <p>

                    </p>
                </div>
            </div>
        </div>
      </Layout>
  )
}
