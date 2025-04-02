import { LetterProps } from 'types/KodleTypes'
import { ComponentsSettings } from 'utils/ComponentsSettings'
import styles from 'Letter.module.css'

function Letter(props : LetterProps) {
  return (
    <li {...ComponentsSettings({
      className : styles.Letter,
      id : props.id,
    })}>
      {props.children}
    </li>
  )
}

export default Letter