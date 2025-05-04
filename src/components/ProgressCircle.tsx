import { ProgressCircle as ChakraProgressCircle } from "@chakra-ui/react"
import React from "react";

interface ProgressCircleProps {
    color? : 'gray' | 'red' | 'orange' | 'yellow' 
    | 'green' | 'teal' | 'blue' 
    | 'cyan' | 'purple' | 'pink';
    size? : 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function TempProgressCircle(props : ProgressCircleProps) {
  return (
    <ChakraProgressCircle.Root value={null} size={props.size} 
    colorPalette={props.color}>
      <ChakraProgressCircle.Circle>
        <ChakraProgressCircle.Track />
        <ChakraProgressCircle.Range />
      </ChakraProgressCircle.Circle>
    </ChakraProgressCircle.Root>
  )
}

const ProgressCircle = React.memo(TempProgressCircle);
export default ProgressCircle;
export {ProgressCircle, ProgressCircleProps};
