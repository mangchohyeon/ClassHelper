import styled from 'styled-components';
import { ComponentsProps } from '@/types/ComponentsProps';

interface TableListsProps extends ComponentsProps {
    row : number;
    column : number;
    contentLists : any[][];
}

const TableLines = styled.ul`
    list-style : none;
    display : flexbox;
    flex-direction : column;
    width : 100%;
    height : auto;
`;

const TableLineWrapper = styled.li`
    display : block;
    flex-direction : row;
    width : 100%;
    height : auto;
`;

const TableLine = styled.ul`
    display : flex;
    flex-direction : row;
    width : 100%;
`;

const TableCell = styled.li`
    display : block;
    margin-left : 1%;
    margin-right : 1%;
`;

function TableLists(props : TableListsProps) {
    return (
        <TableLines 
        className={props.className}
        id={props.id}
        style={props.style}>
            {Array.from({length : props.row}).map((_, LineIndex) => (
            <TableLineWrapper>
                <TableLine key={`TableLine${LineIndex}`}>
                    {Array.from({length : props.column}).map((_2, CellIndex) => (
                    <TableCell key={`TableCell${LineIndex}-${CellIndex}`}>
                        {props.contentLists[LineIndex][CellIndex]}
                    </TableCell>
                    ))}
                </TableLine>
            </TableLineWrapper>
            ))}
        </TableLines>
    )
}

export default TableLists;
