import { ComponentsProps } from '@/types/ComponentsProps';

interface HBlockProps extends ComponentsProps{
  num: number;
  onClick?: () => void;
  children: React.ReactNode;
}

const HBlock: React.FC<HBlockProps> = ({ num, id, style, onClick, children, className }) => {
  return (
    <div 
      className={`${className || ''} hblock-${num}`}
      id={id}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default HBlock;