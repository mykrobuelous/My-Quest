// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 LOG ITEM - Single Log Item with Formatting
📶 INPUTS
    - 🔤 Date - Date of the item
    - 🔢 Value - Value of the log
    - 🔁 Operation - Shows the operation of the log value.
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     date: string;
     value: number;
     operation: 'add' | 'subtract';
}

const LEV_LogItem: React.FC<Props> = ({ className, date, value, operation }) => {
     return (
          <div
               className={twMerge(
                    'bg-gray-selected flex items-center rounded-sm px-4 py-1.5',
                    'cursor-pointer',
                    className
               )}
          >
               <div className="flex-1">
                    <p className="text-xs text-white">{date}</p>
               </div>
               <div className="flex-1 capitalize">
                    <p className="text-xs text-white">{operation}</p>
               </div>
               <div className="flex-1">
                    <p className="text-xs text-white">{value}</p>
               </div>
          </div>
     );
};

export default LEV_LogItem;
