import styles from "../../styles/Home.module.scss";
import Image from "next/image";

export default function Sidebar({children}) {
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.sidebar_content}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                    </span>
                    </a>
                </div>
            </div>
        </>
    )
}