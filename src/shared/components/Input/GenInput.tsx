// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 GENERIC INPUT - Generic input for component
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
     className?: string;
}

const GenInput: React.FC<Props> = ({ className, ...props }) => {
     return (
          <input
               className={twMerge(
                    'border-input-stroke bg-background rounded-sm border-2 px-2 py-1 text-sm',
                    'outline-none',
                    className
               )}
               {...props}
          />
     );
};

export default GenInput;
