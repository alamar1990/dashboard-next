import styles from "../styles/Home.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import InfoLabel from "./infoLabel";

export default function CardSection({children}) {

    return (
        <>
            <div className={styles.card}>
                <h2> Cards </h2>
                <div className={styles.cardsection}>
                    <div className={styles.cardview}>

                    </div>

                    <div className={styles.carddata}>
                        <InfoLabel mainText={'test'} description={'testDescript'} color={'#960000'}/>
                    </div>
                </div>
            </div>
        </>
    )
}