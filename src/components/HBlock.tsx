import ComponentsProps from '@/types/ComponentsProps';
import React from "react";

interface HBlockProps extends ComponentsProps{
  num: number;
  onClick?: () => void;
  children: React.ReactNode;
}

const TempHBlock: React.FC<HBlockProps> = ({ num, id, style, onClick, children, className }) => {
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

const HBlock = React.memo(TempHBlock);
export default HBlock;
export {HBlock, HBlockProps};