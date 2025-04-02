import { useState } from 'react'
import { getArray } from 'utils/getArray';
import { removeChar } from 'utils/removeChar'
import { ComponentsProps, ComponentsSettings } from 'utils/ComponentsSettings';
import LetterLine from '../LetterLine/LetterLine'
import styles from './LetterLines.module.css';

interface LetterLinesProps extends ComponentsProps {
  LineNum : number;
  word : string;
}

function LetterLines(props : LetterLinesProps) {
  const LetterNum = props.word.length;
  const [Letter, setLetter] = useState(getArray<string>(LetterNum, ""));
  const [LetterActive, setLetterActive] = useState(getArray<boolean>(LetterNum));
  const [LineActive, setLineActive] = useState(getArray<boolean>(LetterNum, false));
  //0 : 없음, 1 : 현재 위치에 있음, 2: 다른 위치에 있음
  const [Correct, setCorrect] = useState(getArray<number>(LetterNum, 0));

  function changeLetter(index : number, letter : string) {
    let LetterTemp = [...Letter];
    LetterTemp[index] = letter;
    setLetter(LetterTemp);
  }

  function changeLineActive(index : number) {
    let LineActiveTemp = [...LineActive];
    LineActiveTemp[index] = !LineActive[index];
    setLineActive(LineActiveTemp);
  }

  function changeLetterActive(index : number) {
    let LetterActiveTemp = [...LetterActive];
    LetterActiveTemp[index] = !LetterActive[index];
    setLetterActive(LetterActiveTemp);
  }

  function changeCorrect() {
    const Word = props.word;
    let CorrectTemp = [...Correct];
    for(let i = 0; i < LetterNum; i++) {
      for(let j = 0; j < LetterNum; j++) {
        if(Word[j] == Letter[i]) {
          if(i === j) {
            CorrectTemp[i] = 1;
            removeChar(Word, j);
            break;
          }
          else {
            CorrectTemp[i] = 2;
            removeChar(Word, j);
            break;
          }
        }
      }
    }

    setCorrect(CorrectTemp);
  }
  
  return (
    <ul {...ComponentsSettings({
      className : props.className + styles.LetterLine,
      id : props.id
    })}>
      {Array.from({length : props.LineNum}).map((_, LineIndex) => (
      <LetterLine id={`LetterLine${LineIndex}`} 
        LineNum = {props.LineNum} word = {props.word} />
      ))}
    </ul>
    
  )
}

export default LetterLines