import { ComponentsProps, ComponentsSettings } from 'utils/ComponentsSettings'

interface TableProps extends ComponentsProps {
  row : number;
  column : number;
}

function Table(props : TableProps) {
  return (
    
    <table {...ComponentsSettings({...props})}>
      <tbody>
        {Array.from({ length: props.row }).map((_, r) => (
          <tr key={r}>
            {Array.from({ length: props.column }).map((_, c) => (
              <td key={c}>({r}, {c})</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;