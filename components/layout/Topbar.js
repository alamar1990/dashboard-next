import styles from "../../styles/Home.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Topbar({children}) {
    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.toptitle}>
                    <h4 className={styles.title}>Weekly sumup</h4>
                    <p>
                        Get your summary of your weekly transactions here
                    </p>
                </div>
                <div className={styles.user}>
                    <FontAwesomeIcon color={"gray"} size={"2x"} icon={faUserCircle}/>
                    <p>John Doe</p>
                </div>
            </div>
        </>
    )
}