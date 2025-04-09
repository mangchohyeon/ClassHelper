import { LetterProps } from 'types/KodleTypes'
import styles from 'Letter.module.css'

function Letter(props : LetterProps) {
  return (
    <li
    className={props.className}
    id={props.id}>
      {props.children}
    </li>
  )
}

export default Letter