import { useState } from 'react';
import styles from './ChangeClass.module.css';
import QuestionCircleIcon from '@components/QuestionCircleIcon';
import Slider from '@components/Slider';
import { Button } from "@/components/Button";
import { TableListsProps } from '@/components/TableLists/TableLists'
import { getArray, get2DArray, del } from '@/utils/Array';
import { v4 as uuidv4 } from 'uuid';
import { shuffle } from '@/utils/shuffle';
import { useEffect } from 'react';
import { FileUploadBtn, FileAcceptDetails  } from '@components/FileUploadBtn';
import UploadIconWhite from '@assets/UploadIconWhite.svg';
import Img from '@/components/Img';
import Text from '@components/Text';
import HStack from '@components/HStack';
import VStack from '@components/VStack';

function ChangeClass() {
    // 슬라이더 값을 위한 state
    const [tempRowNum, setTempRowNum] = useState(6);    // 분단당 학생수
    const [tempColumnNum, setTempColumnNum] = useState(5);  // 분단 수
    
    // 실제 테이블에 적용될 값을 위한 state
    const [tableRowNum, setTableRowNum] = useState(6);
    const [tableColumnNum, setTableColumnNum] = useState(5);
    
    //Td 크기
    const [Size, setSize] = useState(50/tableColumnNum);

    //Td 크기 조정하는 함수
    function handleTableDataSize() {
        setSize(50/tableColumnNum);
    }

    //학생 명단 파일
    const [file, setFile] = useState<File | null>(null);

    //파일 처리 완료되었는지 아닌지 나타내줄 state
    const [isFileLoading, setisFileLoading] = useState(false);

    //학생명단 리스트
    const [StudentsNames, setStudentsNames] = useState<(string | undefined | null)[]>([null]);
    
    //원본 학생 명단 리스트(수정되지 않은 값)
    const [OriginalStudentsNames, setOriginalStudentsNames] = useState<string[]>([]);

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

    //학생 명단 파일 가져오는 함수
    async function getFile(details: FileAcceptDetails) {
        setisFileLoading(true);
        const UploadedFiles = await details.files;
        console.log(`length of UploadedFiles : ${UploadedFiles.length}`);
        const UploadedFile = await UploadedFiles[0];
        console.log(`UploadedFile : ${UploadedFile}`);
        console.log(`type of file : ${typeof(UploadedFile)}`);
        console.log(`UploadedFile's File Name : ${UploadedFile.name}`);

        if(UploadedFile) {
            await setFile(UploadedFile);
        }

        const FileText = await UploadedFile.text();
        console.log("FileText");
        console.log(FileText);
        const TempNames = FileText.split('\r\n');
        for(let i = 0; i < TempNames.length; i++) {
            if(TempNames[i] == '') del(TempNames, i);
        }

        console.log("Names");
        console.log(TempNames);
        setOriginalStudentsNames(TempNames);
        setisFileLoading(false);
    }
  

    //isAssignable state업데이트 하는 함수
    function ChangeisAssignable(row: number, column: number) {
        const TempisAssignable = isAssignable.map(row => [...row]);
        TempisAssignable[row][column] = !TempisAssignable[row][column];
        setisAssignable(TempisAssignable);
        return TempisAssignable[row][column];
    } 
    
    //자리 생성하는 함수
    function handleGenerateTable() {
        setTableRowNum(tempRowNum);
        setTableColumnNum(tempColumnNum);
        setisAssignable(get2DArray<boolean>(tempColumnNum, tempRowNum, true)); // 이 줄 추가
        handleTableDataSize();
        // 리렌더링 될때는 ""
        setStudentsNames(getArray<string>(tableColumnNum * tableRowNum, ""));
    }

    //자리 배치해주는 함수
    function ShuffleSeats() {
        let TempStudentsNames = Array.from(OriginalStudentsNames);
        
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
                          backgroundColor: isAssignable[i][j] ? '#4ADE80' : '#EB0000'
                      }}
                      key={uuidv4()}
                      onClick={() => ChangeisAssignable(i, j)}>
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

    useEffect(() => {
        setStudentsNames(getArray<string>(tableColumnNum * tableRowNum, ""));
    }, [])

    return (
        <main className={styles.Main}>

            <header className={styles.Header}>
                <div
                className={styles.Title}>
                    자리바꾸기
                </div>
            </header>

            <section className={styles.QuestionSection}>
                <button
                className={styles.QuestionBtn}>
                    <QuestionCircleIcon className={styles.QuestionIcon} 
                    alt="자리 바꾸기 아이콘"
                    width="auto"
                    />
                </button>
            </section>

            {/**Slider들감싸주는 section*/}
            <VStack className={styles.InputWrapper}>
                <VStack className={styles.SliderWrapper}
                width="100%"
                gap="6">
                    {/**분단 개수 입력받기기*/}
                    <Slider
                    variant="outline"
                    defaultValue={[tempColumnNum]}
                    width="40%"
                    color="gray"
                    Label={<div
                    className={styles.Label}>
                        분단 수
                        </div>}
                        
                    ValueText={true}
                    min={1}
                    max={10}
                    id="SliderColumnNum"
                    className={styles.Slider}
                    getValue={(v : number) => handleColumnNumChange(v)}/>

                    {/**분단의 학생수 입력받기기 */}
                    <Slider
                    variant="outline"
                    defaultValue={[tempRowNum]}
                    width="40%"
                    color="gray"
                    min={1}
                    max={10}

                    Label= { <div 
                        className={styles.Label}>
                            행의 수
                        </div> }

                    ValueText={true}
                    id="SliderRowNum"
                    className={styles.Slider}
                    getValue={(v : number) => handleRowNumChange(v)}/>
                </VStack>
                
                <HStack className={styles.SubmitBtnSection}>                    
                    {/**자리 생성하기 버튼*/}
                    <div
                    className={styles.SubmitBtnWrapper}>
                        <Button
                        className={styles.SubmitBtn}
                        size="md"
                        variant="solid"
                        color="gray"
                        rounded="lg"
                        onClick={handleGenerateTable}
                        loading={isFileLoading}>
                            <Text className={styles.Label}> 자리 생성하기 </Text>
                        </Button>
                    </div>

                    <div
                    className={styles.SubmitBtnWrapper}>
                        {/**자리 배치하기 버튼 */}
                        <Button
                        className={styles.SubmitBtn}
                        size="md"
                        variant="solid"
                        color="gray"
                        rounded="lg"
                        onClick={ShuffleSeats}
                        loading={isFileLoading}
                        >
                            <Text className={styles.Label}>자리 배치하기</Text>
                        </Button>
                    </div>
                    
                    <div
                    className={styles.SubmitBtnWrapper}>
                        {/**파일 업로드하기 버튼 */}
                        <FileUploadBtn
                        className={styles.SubmitBtn}
                        id={styles.FileUploadBtn}
                        maxFiles={1}
                        accept={["xlsx", "csv"]}
                        onFileAccept={(details : FileAcceptDetails) => {
                            getFile(details);
                          }}
                        size="md"
                        color="gray"
                        rounded="lg"
                        loading={isFileLoading}
                        FileUploadLists={true}
                        >
                            <Img
                            className={styles.FileUploadIcon}
                            src={UploadIconWhite}
                            />
                        <Text className={styles.Label}>파일 업로드하기(csv)</Text>
                        </FileUploadBtn>
                    </div>
                </HStack>
            </VStack>

            <section 
            className={styles.StudentsTableSection}
            id={"TableSection"}>
                {/**칠판 */}
                <Button 
                className={styles.WhiteBoard} 
                bgColor="green.500"
                color="#000000">
                    칠판
                </Button>    

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
                        height: `${Size}vw`,

                    }
                }}
                TdProps={{
                    className: styles.StudentsTableData,
                    style: {
                        width: `${Size}vw`,
                        height: `${Size}vw`, // 정사각형 셀을 만들기 위해 width와 동일하게 설정
                        backgroundColor: '#4ADE80', // 초기 배경색 추가
                    }
                }}
                TdLists={StudentsNames as string[]}
                />
            </section>
        </main>
    )
}

export default ChangeClass
