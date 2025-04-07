import { useState } from 'react';
import styles from './ChangeClass.module.css';
import HBlock from '@components/HBlock';
import QuestionCircleIcon from '@components/QuestionCircleIcon';
import { MySlider } from '@components/MySlider';
import { MyButton, MyButtonProps} from "@components/MyButton";
import { Stack } from '@chakra-ui/react';
import questioncircleicon from '@assets/QuestionCirclelcon.svg';
import { TableProps, Table } from '@components/Table';
import { getArray, get2DArray } from '@utils/getArray';
import { v4 as uuidv4 } from 'uuid';
import { ComponentsProps } from '@/types/ComponentsProps';

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
    const [ColumnNum, setColumnNum] = useState(6);  // 분단 개수수
    const [RowNum, setRowNum] = useState(5);        // 분단 학생 수
    const [isFileUploaded, SetisFileUploded] = useState(false);    // 학생 명단 파일 업로드 됐는지 체크

    let tArr1 = get2DArray<string>(ColumnNum, RowNum, "");
    const [StudentsNames, SetStudentsName] = useState(tArr1);    // 학생 명단
    

    function getRowNum(RN : number) {
        setRowNum(RN);
    }

    function getColumnNum(CN : number) {
        setColumnNum(CN);
    }
    
    //Table생성 함수
    function genTable() {
        return (
        <Table
        className={styles.StudentsTable}
        id={"StudentsTable"}
        row={RowNum}
        column={ColumnNum}
        width="100%"  // 명시적으로 width 설정
        RowProps={{
            className: styles.TableRow,
            style: { width: "100%" }
        }}
        TdProps={{
            className: styles.TableTd
        }}
        TdLists={StudentsNames}
             />
         )
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
                    defaultValue={[ColumnNum]}
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
                    getValue={(v : number) => getColumnNum(v)}/>

                    {/**분단의 학생수 입력받기기 */}
                    <MySlider
                    variant="outline"
                    defaultValue={[RowNum]}
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
                    getValue={(v : number) => getRowNum(v)}/>
                </Stack>
                
                <div className={styles.SubmitBtnWrapper}>
                    <Button2
                        size="md"
                        variant="solid"
                        color="gray"
                        rounded="lg"
                        onClick={() => genTable()}>
                        <HBlock 
                        num={2}
                        className={styles.Label2}>
                            자리 생성하기
                        </HBlock>
                    </Button2>
                </div>
            </section>

            <section 
                className={styles.TableSection}
                id={"TableSection"}>
                {genTable()}
            </section>
        </main>
    )
}

export default ChangeClass
