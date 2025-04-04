import { useState } from 'react';
import styles from './ChangeClass.module.css'
import HBlock from '@components/HBlock'
import { QuestionIcon } from '@components/QuestionIcon'
import { MySlider } from '@components/MySlider';
import { MyButton, MyButtonProps} from "@components/MyButton"

interface Button2Props extends MyButtonProps {
    onClick? : () => void;
}

function Button2(props : Button2Props) {
    return (
        <MyButton
            size={props.size}
            variant={props.variant}
            color={props.color}
            rounded={props.rounded}
            className={props.className}
            id={props.id}
            onClick={() => props.onClick !== undefined ? props.onClick() : undefined}>
          {props.children}
        </MyButton>
      )
}

const ChangeClass: React.FC = () => {
    const [RowNum, setRowNum] = useState(5);
    const [ColumnNum, setColumnNum] = useState(6);

    function getRowNum(RN : number) {
        setRowNum(RN);
    }

    function getColumnNum(CN : number) {
        setColumnNum(CN);
    }

    function genTable() {
        
    }

    return (
        <main className={styles.Main}>
            <header className={styles.Header}>
                <HBlock num={1}
                style={{
                    fontSize : "1.5em",
                    width : "100%"
                }}
                className={styles.Title}>
                    &lt;자리바꾸기&gt;
                </HBlock>
            </header>

            <section className={styles.QuestionSection}>
                <QuestionIcon className={styles.QuestionIcon} />
            </section>

            <section className={styles.InputWrapper}>
                <MySlider
                    variant="outline"
                    defaultValue={[RowNum]}
                    width="20%"
                    color="gray"
                    id="SliderRowNum"
                    className={styles.Slider}
                    getValue={(v : number) => getRowNum(v)}/>

                <MySlider
                    variant="outline"
                    defaultValue={[ColumnNum]}
                    width="20%"
                    color="gray"
                    id="SliderColumnNum"
                    className={styles.Slider}
                    getValue={(v : number) => getColumnNum(v)}/>

                <Button2
                    size="md"
                    variant="solid"
                    color="gray"
                    rounded="lg"
                    onClick={() => genTable()}>
                    자리 생성하기
                </Button2>

            </section>
        </main>
    )
}

export default ChangeClass