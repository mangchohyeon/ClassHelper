import ComponentsProps from '@/types/ComponentsProps';
import { v4 as uuidv4 } from 'uuid';
import styles from './Table.module.css';
import React from "react";

interface TableProps extends ComponentsProps {
  row: number;
  column: number;
  width?: string;
  TBodyProps? : ComponentsProps;
  RowProps? : ComponentsProps;
  TdProps? : ComponentsProps;
  TdLists : React.ReactNode[][];
}

function TempTable(props : TableProps) {
  const TableClass = `${props.className || styles.Table}`;

  const TBodyClass = (props.TBodyProps?.className || '') + (props.TBodyProps?.style != undefined
  ? ''
  : styles.TBody);

  const RowClass = (props.RowProps?.className || '') + (props.RowProps?.style != undefined 
  ? ''
  : styles.TableRow);

  const TdClass = (props.TdProps?.className || '') + (props.TdProps?.style != undefined
  ? ''
  : styles.TableData);

  return (
    <table
      className={TableClass}
      id={props.id}
      style={{
        ...props.style,
        width: props.width || '100%',
        '--row-count': props.row, // CSS 변수로 row 수 전달
      } as React.CSSProperties}
    >
      <tbody 
        className={TBodyClass}
        id={props.TBodyProps?.id}
        key={uuidv4()}
        style={props.TBodyProps?.style}
      >
        {Array.from({length : props.row}).map((_1, RowIndex:number) => (
          <tr
          className={RowClass}
          id={props.RowProps?.id}
          key={uuidv4()}
          style={props.RowProps?.style}>
            {Array.from({length : props.column}).map((_2, ColumnIndex : number) => (
              <td 
              className={TdClass} 
              id={props.TdProps?.id}
              style={props.TdProps?.style}
              key={uuidv4()}>
                {props.TdLists[RowIndex][ColumnIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Table = React.memo(TempTable);
export default Table;
export { TableProps, Table };