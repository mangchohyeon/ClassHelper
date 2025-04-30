import { ProgressCircle as ChakraProgressCircle } from "@chakra-ui/react"

interface ProgressCircleProps {
    color? : 'gray' | 'red' | 'orange' | 'yellow' 
    | 'green' | 'teal' | 'blue' 
    | 'cyan' | 'purple' | 'pink';
    size? : 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function ProgressCircle(props : ProgressCircleProps) {
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

export default ProgressCircle;

export { ProgressCircle };
