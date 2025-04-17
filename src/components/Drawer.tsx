"use client"
import { useState } from 'react';
import { CloseButton, DrawerOpenChangeDetails, Drawer as DrawerTemp, Portal } from "@chakra-ui/react"
import { ComponentsProps } from '@/types/ComponentsProps';
import { useEffect } from 'react';

type DrawerOpenChangeEvent = {
  open: boolean
}

interface DrawerProps extends ComponentsProps {
    placement?: "start" | "end" | "top" | "bottom";
    Title?: React.ReactNode;
    Body?: React.ReactNode;
    Footer?: React.ReactNode;
    BtnChildren? : React.ReactNode;
}

export function Drawer(props: DrawerProps) {
  const [isOpen, setIsOpen] = useState<undefined | null | boolean>();

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <DrawerTemp.Root
      open={isOpen}
      onOpenChange={(e : DrawerOpenChangeEvent) => setIsOpen(e.open)}
      placement={props.placement != undefined ? props.placement : "end"}>
      <DrawerTemp.Trigger>
        <button
        className={props.className}
        id={props.id}
        onClick={() => setIsOpen(true)}>
            {props.BtnChildren}
        </button>
      </DrawerTemp.Trigger>
      <Portal>
        <DrawerTemp.Backdrop />
        <DrawerTemp.Positioner>
          <DrawerTemp.Content>
            <DrawerTemp.Header>
              <DrawerTemp.Title>{props.Title}</DrawerTemp.Title>
            </DrawerTemp.Header>
            <DrawerTemp.Body>
              {props.Body}
            </DrawerTemp.Body>
            <DrawerTemp.Footer>
              {props.Footer}
            </DrawerTemp.Footer>
            <DrawerTemp.CloseTrigger>
              <CloseButton 
              size="md"
              onClick={() => setIsOpen(false)}
              className="DrawerCloseBtn"/>
            </DrawerTemp.CloseTrigger>
          </DrawerTemp.Content>
        </DrawerTemp.Positioner>
      </Portal>
    </DrawerTemp.Root>
  )
}