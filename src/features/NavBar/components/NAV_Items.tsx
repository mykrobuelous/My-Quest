// 📦 LIBRARIES IMPORT
import type { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 NAV ITEMS - Items for the navigation with selected.
📶 INPUTS
    - 🔤 Label - The label for the item
    - 🧩 Icon - The Icon for the item
    - 🎯 onClick - Clicking the component
💾 DATA
    - 
📊 STATES
    - ✅ Selected - The state of the item
*/

interface Props {
     className?: string;
     label: string;
     Icon: LucideIcon;
     selected?: boolean;
     onClick?: () => void;
}

const NAV_Items: React.FC<Props> = ({
     className,
     label,
     Icon,
     selected = false,
     onClick = () => {},
}) => {
     return (
          <div
               className={twMerge(
                    'group flex items-center gap-2',
                    'rounded-sm px-3 py-1',
                    'cursor-pointer',
                    'hover:bg-gray-selected',
                    selected && 'bg-gray-selected *:text-white',
                    className
               )}
               onClick={onClick}
          >
               <Icon className="text-sec-text h-4 w-4 group-hover:text-white" />
               <p className="text-sec-text text-sm font-semibold whitespace-nowrap group-hover:text-white">
                    {label}
               </p>
          </div>
     );
};

export default NAV_Items;
