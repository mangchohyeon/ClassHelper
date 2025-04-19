import { Tooltip as ArkTooltip } from '@ark-ui/react';
import ComponentsProps from '@/types/ComponentsProps';
import './Tooltip.css';

interface TooltipProps extends ComponentsProps {
  children?: React.ReactNode; // 자식 요소
  content?: React.ReactNode; // 툴팁에 표시할 메시지
  arrow?: boolean; // 화살표 표시 여부
  openDelay?: number; // hover 후 툴팁이 나타날 때까지의 지연 시간 (ms)
  closeDelay?: number; // hover가 끝난 후 툴팁이 사라질 때까지의 지연 시간 (ms)
  placement?: 'top' | 'top-start'| 'top-end'
  | 'bottom' | 'bottom-start'| 'bottom-end' 
  | 'right' | 'right-start' | 'right-end'
  | 'left' | 'left-start'| 'left-end';
}

export function Tooltip(props : TooltipProps) {
    const OpenDelay : number = props.openDelay || 0;
    const CloseDelay : number = props.closeDelay || 0;
    const Arrow = props.arrow || false;
    const Placement = props.placement || 'bottom';
    
    return (
    <ArkTooltip.Root
    openDelay={OpenDelay}
    closeDelay={CloseDelay}
    positioning={{
    placement: Placement,
    }}
    >
        {/* 자식 요소를 트리거로 사용 */}
        <ArkTooltip.Trigger
        className={props.className}
        id={props.id}>
            {props.children}
        </ArkTooltip.Trigger>
        {/* 툴팁의 위치와 내용을 정의 */}
        <ArkTooltip.Positioner>
            <ArkTooltip.Content>
                {/* arrow가 true일 때만 화살표 렌더링 */}
                {Arrow && <ArkTooltip.Arrow />}
                {props.content}
            </ArkTooltip.Content>
        </ArkTooltip.Positioner>
    </ArkTooltip.Root>
  );
};

export default Tooltip;