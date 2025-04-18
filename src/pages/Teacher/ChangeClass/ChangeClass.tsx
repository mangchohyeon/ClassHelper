import { useState } from 'react';
import styles from './ChangeClass.module.css';
import HBlock from '@components/HBlock';
import QuestionCircleIcon from '@components/QuestionCircleIcon';
import MySlider from '@components/MySlider';
import { Button, ButtonProps} from "@/components/Button";
import { Stack } from '@chakra-ui/react';
import { TableListsProps } from '@/components/TableLists/TableLists'
import { getArray, get2DArray } from '@utils/getArray';
import { v4 as uuidv4 } from 'uuid';
import { shuffle } from '@/utils/shuffle';


interface Button2Props extends ButtonProps {
    onClick? : () => void;
}

function Button2(props : Button2Props) {
    return (
        <Button
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
        </Button>
      )
}

function ChangeClass() {
    // 슬라이더 값을 위한 state
    const [tempRowNum, setTempRowNum] = useState(6);    // 분단당 학생수
    const [tempColumnNum, setTempColumnNum] = useState(5);  // 분단 수
    
    // 실제 테이블에 적용될 값을 위한 state
    const [tableRowNum, setTableRowNum] = useState(6);
    const [tableColumnNum, setTableColumnNum] = useState(5);
    
    //학생명단 리스트
    const [StudentsNames, setStudentsNames] = useState(["구도회", "권효섭", 
        "김기용", "김범서", "김용환", "김재민", "김형민", "맹기현", "박건", "박건우", 
        "변주용", "석진우", "성혁준", "윤시운", "윤정탁", "윤지민", "이세현", "이용재", 
        "이찬현", "이채훈", "장현빈", "전재혁", "최정욱", "뇌종무", "편승우", "허태양", 
        "홍석현", "장재형"]);
    
    const StudentsName2 = ["구도회", "권효섭", 
        "김기용", "김범서", "김용환", "김재민", "김형민", "맹기현", "박건", "박건우", 
        "변주용", "석진우", "성혁준", "윤시운", "윤정탁", "윤지민", "이세현", "이용재", 
        "이찬현", "이채훈", "장현빈", "전재혁", "최정욱", "뇌종무", "편승우", "허태양", 
        "홍석현", "장재형"];

    //배치될지 말지 정하는 state
    const [isAssignable, setisAssignable] = useState(() => 
        get2DArray<boolean>(tableColumnNum, tableRowNum, true));

    //슬라이더 state변경하는 함수
    function handleRowNumChange(RN: number) {
        setTempRowNum(RN);
    }

    function handleColumnNumChange(CN: number) {
        setTempColumnNum(CN);
    }

    //isAssignable state업데이트 하는 함수
    function ChangeisAssignable(row: number, column: number) {
        const TempisAssignable = isAssignable.map(row => [...row]);
        TempisAssignable[row][column] = !TempisAssignable[row][column];
        setisAssignable(TempisAssignable);
        return TempisAssignable[row][column];
    }

    //색깔 바꾸는 함수
    function ChangeBackgoundColor(e : React.MouseEvent<HTMLLIElement>,
        Row : number, Column : number) {
        const Flag = ChangeisAssignable(Row, Column);
        if(Flag) {
            e.currentTarget.style.backgroundColor = "#1ecf0e";
        }
        else {
            e.currentTarget.style.backgroundColor = "#EB0000";
        }
    }    
    
    //자리 생성하는 함수
    function handleGenerateTable() {
        setTableRowNum(tempRowNum);
        setTableColumnNum(tempColumnNum);
        setisAssignable(get2DArray<boolean>(tempColumnNum, tempRowNum, true)); // 이 줄 추가
    }

    //자리 배치해주는 함수
    function ShuffleSeats() {
        let TempStudentsNames = Array.from(StudentsName2);
        
        shuffle(TempStudentsNames);
        let count = 0;
        for(let i = 0; i < tableRowNum; i++) {
            for(let j = 0; j < tableColumnNum; j++) {
                if(!isAssignable[i][j]) {
                    TempStudentsNames.splice(count, 0, "");
                }
                count ++;
            }
        }

        setStudentsNames(TempStudentsNames);
    }

    

    //TableLists2
    function TableLists2(props : TableListsProps) {
        const TableListsClass = `${props.className || styles.TableLists}`;
        const RowClass = (props.RowProps?.className || '') + (props.RowProps?.style != undefined 
        ? ''
        : styles.TableListsRow);
        const TdClass = (props.TdProps?.className || '') + (props.TdProps?.style != undefined
        ? ''
        : styles.TableListsData);
      
        function getRows() {
          const rows = [];
          let count = 0;
          for(let i = 0; i < props.row; i++) {
              const columns = [];
              for(let j = 0; j < props.column; j++) {
                  columns.push(
                      <li
                      className={TdClass}
                      id={`TableListsData${i}-${j}`}
                      style={{
                          ...props.TdProps?.style,
                          backgroundColor: isAssignable[i][j] ? '#1ecf0e' : '#EB0000'
                      }}
                      key={uuidv4()}
                      onClick={(e) => ChangeBackgoundColor(e, i, j)}>
                          {props.TdLists[count]}
                      </li>
                  );
                  count ++;
              }
              
              rows.push(
                  <ul
                  className={RowClass}
                  id={`TableListsRow${i}`}
                  style={props.RowProps?.style}
                  key={uuidv4()}>
                      {columns}
                  </ul>
              );
          }
          return rows;
        }
      
        return (
          <div 
          className={TableListsClass}
          id={props.id}
          style={props.style}>
              {getRows()}
          </div>
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
                    {/**자리 생성하기 버튼*/}
                    <Button2
                    className={styles.SubmitBtn}
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
                    
                    {/**자리 배치하기 버튼 */}
                    <Button2
                    className={styles.SubmitBtn}
                    size="md"
                    variant="solid"
                    color="gray"
                    rounded="lg"
                    onClick={ShuffleSeats}>
                        <HBlock 
                        num={2}
                        className={styles.Label2}>
                            자리 배치하기
                        </HBlock>
                    </Button2>
                </div>
            </section>

            <section 
                className={styles.StudentsTableSection}
                id={"TableSection"}>
                {/**StudentsTable */}
               <TableLists2
                    className={styles.StudentsTable}
                    id="StudentsTable"
                    style={{
                        padding : "1%",
                    }}
                    row={tableRowNum}
                    column={tableColumnNum}
                    RowProps={{
                        className: styles.StudentsTableRow,
                        style : {
                            flexDirection : 'row',
                            height: `${35/(tableColumnNum +2)}vw`,

                        }
                    }}
                    TdProps={{
                        className: styles.StudentsTableData,
                        style: {
                            width: `${35/(tableColumnNum +2)}vw`,
                            height: `${35/(tableColumnNum +2)}vw`, // 정사각형 셀을 만들기 위해 width와 동일하게 설정
                            backgroundColor: '#1ecf0e', // 초기 배경색 추가
                        }
                    }}
                    TdLists={StudentsNames}
                />
            </section>
        </main>
    )
}

export default ChangeClass
