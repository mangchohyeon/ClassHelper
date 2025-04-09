import { ComponentsProps } from '@/types/ComponentsProps';
import { v4 as uuidv4 } from 'uuid';
import styles from './TableList.module.css';

interface TableListProps extends ComponentsProps {
    DataLists : React.ReactNode;
}

