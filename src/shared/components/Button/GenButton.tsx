// 📦 LIBRARIES IMPORT
import type { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 GEN BUTTON - Generic button
📶 INPUTS
    - 🔤 Label - Label of the button
    - 🧩 Icon - Icon of the button
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     className?: string;
     label: string;
     Icon?: LucideIcon;
}

const GenButton: React.FC<Props> = ({ className, label, Icon, ...props }) => {
     const { disabled } = props;
     return (
          <button
               className={twMerge(
                    'bg-gray-selected cursor-pointer rounded-sm px-4 py-1 text-sm whitespace-nowrap text-white',
                    'hover:bg-gray-selected/60 hover:text-white',
                    disabled && 'cursor-not-allowed opacity-30',
                    className
               )}
               {...props}
          >
               {Icon && <Icon className="mr-2 mb-0.5 inline-block h-4 w-4" />}
               {label}
          </button>
     );
};

export default GenButton;
