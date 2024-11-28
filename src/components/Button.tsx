import '../index.css'
import { Button } from '../@/components/ui/button'

interface btn {
    className: string;
    // size: string;  // small, medium, large
    type?: string; // submit, button, reset
    // variant: string; 
    // children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // loading?: boolean;
    // disabled?: boolean;   
}


function ButtonInput(className:btn) {
    return ( 
        <Button
          className="w-[350px] h-8 mt-2 bg-blue-500 hover:bg-blue-900 text-white"
         >
        Send
        </Button>
     );
}

export default ButtonInput;