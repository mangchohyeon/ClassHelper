import React, { useState } from 'react';
import ComponentsProps from '@/types/ComponentsProps';
import HStack from './HStack';

interface NavigationRowProps extends ComponentsProps {
  Home : React.ReactNode;
  Menu : React.ReactNode;
}

function TempNavigationRow(props : NavigationRowProps) {
  return (
    <HStack
    className={props.className}
    id={props.id}
    style={props.style}>
      {props.Home}
      {props.Menu}
    </HStack>
  )
};

const NavigationRow = React.memo(TempNavigationRow);
export default NavigationRow;
export {NavigationRow, NavigationRowProps};