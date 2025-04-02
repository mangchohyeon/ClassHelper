import styles from "./Keyboards.module.css";

interface KeyboardsProps {
  KeyboardsLists: string[][];
}

function Keyboards({ KeyboardsLists }: KeyboardsProps) {
  return (
    /**KeyboardsLinesLists */
    <ul className={styles.KeyboardsLinesLists}>
      {KeyboardsLists.map((KeyboardLists, LineIndex) => (
        /**KeyboardLineList */
        <li
          className={styles.KeyboardLineList}
          id={`KeyboardLineList${LineIndex}`}
          key={`KeyboardLineList${LineIndex}`}
        >
          {/**KeyboardLists */}
          <ul
            className={styles.KeyboardLists}
            id={`KeyboardLists${LineIndex}`}
            key={`KeyboardLisrs${LineIndex}`}
          >
            {KeyboardLists.map((Keyboard, KeyboardIndex) => (
              /**KeyboardList */
              <li
                className={styles.KeyboardList}
                id={`Keyboard${LineIndex}-${KeyboardIndex}`}
                key={`Keyboard${LineIndex}-${KeyboardIndex}`}
              >
                {Keyboard}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Keyboards;
