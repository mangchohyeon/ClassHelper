import { ComponentsProps, ComponentsSettings } from 'utils/ComponentsSettings'

interface TableProps extends ComponentsProps {
  row: number;
  column: number;
  width?: string;
  RowStyle?: Array<Record<string, string | number>>;
  DataStyle? : Array<Record<string, string | number>>;
}



function Table(props : TableProps) {
  return (
    <table
    className={props.className}
    id={props.id}
    style={props.style}
    width={props.width}
    >
      <tbody>
        
      </tbody>
    </table>
  )
}

export default Table;