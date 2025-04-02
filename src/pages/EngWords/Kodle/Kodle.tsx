import styles from "./Kodle.module.css";
import Keyboards from "../components/Keyboards/Keyboards";

function Kodle() {
    const KeyboardList: string[][] = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O"],
        ["P", "A", "S", "D", "F", "G", "H", "J", "K"],
        ["입력", "L", "Z", "X", "C", "V", "B", "N", "M", "취소"],
    ];

    return (
        <main
            className={styles.Main}>
            <div className={styles.WordWrapper}></div>

            <div className={styles.LetterWrapper}>
                
            </div>

            <div className={styles.KeyboardWrapper}>
                <Keyboards KeyboardsLists={KeyboardList} />
            </div>
        </main>
    );
}

export default Kodle;
