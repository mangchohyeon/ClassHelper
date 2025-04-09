import { ComponentsProps } from '@/types/ComponentsProps';
import { v4 as uuidv4 } from 'uuid';
import styles from './TableLists.module.css';

interface TableListsProps extends ComponentsProps {
  row: number;
  column: number;
  width?: string;
  RowProps? : ComponentsProps;
  TdProps? : ComponentsProps;
  TdLists : React.ReactNode[];
}

function TableLists(props : TableListsProps) {
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
                style={props.TdProps?.style}
                key={uuidv4()}>
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

export { TableLists, TableListsProps };