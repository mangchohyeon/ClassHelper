import React, { useState } from 'react';
import { ComponentsProps } from '@/types/ComponentsProps';
import { HStack } from './HStack';

interface NavigationRowProps extends ComponentsProps {
  Home : React.ReactNode;
  Menu : React.ReactNode;
}

export function NavigationRow(props : NavigationRowProps) {
  return (
    <HStack
    className={props.className}
    id={props.id}
    style={props.style}>
      {props.Home}
      {props.Menu}
    </HStack>
  )
}