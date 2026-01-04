// 📦 LIBRARIES IMPORT
import type { SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 SELECT - Custom select for the application
📶 INPUTS
    - 🔤 Label - Label of the component
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
     className?: string;
     items: { value: string; label: string }[];
}

const GenSelect: React.FC<Props> = ({ className, items, ...props }) => {
     return (
          <select
               {...props}
               className={twMerge(
                    'bg-background w-full rounded-sm px-4 py-2',
                    'border-input-stroke bg-background rounded-sm border-2 px-2 py-1 text-sm text-white',
                    'outline-none',
                    className
               )}
          >
               {items.map((item) => (
                    <option key={item.value} value={item.value}>
                         {item.label}
                    </option>
               ))}
          </select>
     );
};

export default GenSelect;
