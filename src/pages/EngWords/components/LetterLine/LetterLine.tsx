import { ComponentsProps, ComponentsSettings } from 'utils/ComponentsSettings'
import styles from './LetterLines.module.css';

interface LetterLineProps extends ComponentsProps {
  LineNum : number;
  word : string;
}

function LetterLine(props : LetterLineProps) {
  const LetterNum = props.word.length;
  const cn = styles.LetterLine + props.className; 
  return (
    <ul
      {...ComponentsSettings({
        className : cn,
        id: props.id,
      })}
    >
      {Array.from({ length: LetterNum }).map((_, Index) => (
        <li key={Index} className={styles.Letter} id={`Letter${props.LineNum}-${Index}`}></li>
      ))}
    </ul>
  );
}

export default LetterLine;