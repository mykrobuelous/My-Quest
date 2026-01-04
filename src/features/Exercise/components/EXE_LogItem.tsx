// 📦 LIBRARIES IMPORT
import { Trash2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 LOG ITEM - Single Log Item with Formatting
📶 INPUTS
    - 🔤 Category - Type of Exercise.
    - 🔤 Date - Date text of the exercise.
    - 🔤 Duration - Duration of exercise
    - 🎯 Remove Handler - Trash Button Handler
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     category: string;
     date: string;
     duration: string;
     removeHandler?: () => void;
}

const EXE_LogItem: React.FC<Props> = ({
     className,
     category,
     date,
     duration,
     removeHandler = () => {},
}) => {
     return (
          <div
               className={twMerge(
                    'bg-gray-selected flex items-center rounded-sm px-4 py-1.5',
                    'cursor-pointer',
                    className
               )}
          >
               <div className="flex-1">
                    <p className="text-xs text-white">{category}</p>
               </div>
               <div className="flex-1 capitalize">
                    <p className="text-xs text-white">{date}</p>
               </div>
               <div className="flex flex-1 items-center justify-between">
                    <p className="text-xs text-white">{duration}</p>
                    <div className="flex items-center justify-end gap-2">
                         <Trash2
                              className="text-sec-text h-4 w-4 hover:text-white"
                              onClick={removeHandler}
                         />
                    </div>
               </div>
          </div>
     );
};

export default EXE_LogItem;
