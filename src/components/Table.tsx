import { ComponentsProps } from '@/types/ComponentsProps';
import { v4 as uuidv4 } from 'uuid';

interface TableProps extends ComponentsProps {
  row: number;
  column: number;
  width?: string;
  RowProps? : ComponentsProps;
  TdProps? : ComponentsProps;
  TdLists : React.ReactNode[][];
}

function Table(props : TableProps) {

  return (
    <table
    className={props.className}
    id={props.id}
    style={props.style}
    >
      {Array.from({length : props.row}).map((_1, RowIndex:number) => (
        <tr {...props.RowProps}>
          {Array.from({length : props.column}).map((_2, ColumnIndex : number) => (
            <td {...props.TdProps}>{props.TdLists[RowIndex][ColumnIndex]}</td>
          ))}
        </tr>
      ))}
    </table>
  )
}

