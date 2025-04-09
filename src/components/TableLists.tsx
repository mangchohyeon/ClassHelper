import { ComponentsProps } from '@/types/ComponentsProps';
import { v4 as uuidv4 } from 'uuid';
import styles from './TableLists.module.css';

interface TableListsProps extends ComponentsProps {
  row: number;
  column: number;
  width?: string;
  RowProps? : ComponentsProps;
  TdProps? : ComponentsProps;
  TdLists : React.ReactNode[][];
}

function TableLists(props : TableListsProps) {
  const TableListsClass = `${props.className || styles.TableLists}`;


  const RowClass = (props.RowProps?.className || '') + (props.RowProps?.style != undefined 
  ? ''
  : styles.TableListsRow);

  const TdClass = (props.TdProps?.className || '') + (props.TdProps?.style != undefined
  ? ''
  : styles.TableListsData);

  return (
    <div 
    className={TableListsClass}
    id={props.id}
    style={props.style}>
        {Array.from({length : props.row}).map((_1, RowIndex) => (
            <ul
            className={RowClass}
            id={`TableListsRow${RowIndex}`}
            style={props.RowProps?.style}
            key={uuidv4()}>
                {Array.from({length : props.column}).map((_2, ColumnIndex) => (
                    <li
                    className={TdClass}
                    id={`TableListsData${RowIndex}-${ColumnIndex}`}
                    style={props.TdProps?.style}
                    key={uuidv4()}>
                        {props.TdLists[RowIndex][ColumnIndex]}
                    </li>

                ))}
            </ul>
            

        ))}
    </div>
  )
}

export { TableLists, TableListsProps };