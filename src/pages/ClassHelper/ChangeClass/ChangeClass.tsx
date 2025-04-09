import { useState } from 'react';
import styles from './ChangeClass.module.css';
import HBlock from '@components/HBlock';
import QuestionCircleIcon from '@components/QuestionCircleIcon';
import { MySlider } from '@components/MySlider';
import { MyButton, MyButtonProps} from "@components/MyButton";
import { Stack } from '@chakra-ui/react';
import questioncircleicon from '@assets/QuestionCirclelcon.svg';
import { Table } from '@components/Table';
import { get2DArray } from '@utils/getArray';

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
            onClick={() => props.onClick !== undefined 
            ? props.onClick() 
            : undefined}>
          {props.children}
        </MyButton>
      )
}

const ChangeClass: React.FC = () => {
    // 슬라이더 값을 위한 state
    const [tempRowNum, setTempRowNum] = useState(6);    // 분단당 학생수
    const [tempColumnNum, setTempColumnNum] = useState(5);  // 분단 수
    
    // 실제 테이블에 적용될 값을 위한 state
    const [tableRowNum, setTableRowNum] = useState(6);
    const [tableColumnNum, setTableColumnNum] = useState(5);
    
    //학생명단 리스트
    const [studentsNames, setStudentsNames] = useState(() => 
        get2DArray<string>(tableColumnNum, tableRowNum, ""));

    //슬라이더 state변경하는 함수
    function handleRowNumChange(RN: number) {
        setTempRowNum(RN);
    }

    function handleColumnNumChange(CN: number) {
        setTempColumnNum(CN);
    }
    
    function handleGenerateTable() {
        setTableRowNum(tempRowNum);
        setTableColumnNum(tempColumnNum);
        setStudentsNames(get2DArray<string>(tempColumnNum, tempRowNum, ""));
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
                <QuestionCircleIcon className={styles.QuestionIcon} 
                src={questioncircleicon}
                alt="자리 바꾸기 아이콘"
                width="auto"
                />
            </section>

            {/**Slider들감싸주는 section */}
            <section className={styles.InputWrapper}>
                <Stack className={styles.Stack}
                width="100%"
                gap="6">
                    {/**분단 개수 입력받기기*/}
                    <MySlider
                    variant="outline"
                    defaultValue={[tempColumnNum]}
                    width="40%"
                    color="gray"
                    Label={<HBlock num={2} 
                    className={styles.Label1}>
                        분단 수
                        </HBlock>}
                        
                    ValueText={true}
                    min={1}
                    max={10}
                    id="SliderColumnNum"
                    className={styles.Slider}
                    getValue={(v : number) => handleColumnNumChange(v)}/>

                    {/**분단의 학생수 입력받기기 */}
                    <MySlider
                    variant="outline"
                    defaultValue={[tempRowNum]}
                    width="40%"
                    color="gray"
                    min={1}
                    max={10}

                    Label= { <HBlock 
                        num={2}
                        className={styles.Label1}>
                            행의 수
                        </HBlock> }

                    ValueText={true}
                    id="SliderRowNum"
                    className={styles.Slider}
                    getValue={(v : number) => handleRowNumChange(v)}/>
                </Stack>
                
                <div className={styles.SubmitBtnWrapper}>
                    <Button2
                        size="md"
                        variant="solid"
                        color="gray"
                        rounded="lg"
                        onClick={handleGenerateTable}>
                        <HBlock 
                        num={2}
                        className={styles.Label2}>
                            자리 생성하기
                        </HBlock>
                    </Button2>
                </div>
            </section>

            <section 
                className={styles.StudentsTableSection}
                id={"TableSection"}>
                {/**StudentsTable */}
               <Table
                    className={styles.StudentsTable}
                    id="StudentsTable"
                    row={tableRowNum}
                    column={tableColumnNum}
                    TBodyProps={{
                        className:styles.StudentsTableBody
                    }}
                    RowProps={{
                        className: styles.StudentsTableRow,
                    }}
                    TdProps={{
                        className: styles.StudentsTableTd
                    }}
                    TdLists={studentsNames}
                />
            </section>
        </main>
    )
}

export default ChangeClass
