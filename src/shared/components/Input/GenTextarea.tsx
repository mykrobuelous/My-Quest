// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 GEN TEXT AREA - Generic Text Area for the application
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
     className?: string;
}

const GenTextarea: React.FC<Props> = ({ className, ...props }) => {
     return (
          <textarea
               {...props}
               className={twMerge(
                    'bg-background w-full rounded-sm px-4 py-2',
                    'border-input-stroke bg-background rounded-sm border-2 px-2 py-1 text-sm text-white',
                    'outline-none',
                    className
               )}
          />
     );
};

export default GenTextarea;
