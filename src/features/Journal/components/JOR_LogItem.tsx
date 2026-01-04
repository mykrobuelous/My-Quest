// 📦 LIBRARIES IMPORT
import { Pencil, Trash2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 LOG ITEM - Single Log Item with Formatting
📶 INPUTS
    - 🔤 Subject - Type of Exercise.
    - 🔤 Date - Date text of the exercise.
    - 🔤 Duration - Duration of exercise
    - 🎯 Remove Handler - Trash Button Handler
    - 🎯 Edit Handler - Edit Journal Handler
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     subject: string;
     date: string;
     category: string;
     removeHandler?: () => void;
     editHandler?: () => void;
     onClick?: () => void;
}

const JOR_LogItem: React.FC<Props> = ({
     className,
     subject,
     date,
     category,
     removeHandler,
     editHandler,
     onClick,
}) => {
     return (
          <div
               className={twMerge(
                    'bg-gray-selected flex items-center rounded-sm px-4 py-1.5',
                    'cursor-pointer hover:bg-gray-600',
                    className
               )}
               onClick={onClick}
          >
               <div className="w-30">
                    <p className="text-xs text-white">{date}</p>
               </div>
               <div className="flex-1">
                    <p className="text-xs text-white">{subject}</p>
               </div>
               <div className="flex flex-1 items-center justify-between">
                    <p className="text-xs text-white capitalize">{category}</p>
                    <div className="flex items-center justify-end gap-2">
                         {removeHandler && (
                              <Trash2
                                   className="text-sec-text h-4 w-4 hover:text-white"
                                   onClick={removeHandler}
                              />
                         )}
                         {editHandler && (
                              <Pencil
                                   className="text-sec-text h-4 w-4 hover:text-white"
                                   onClick={editHandler}
                              />
                         )}
                    </div>
               </div>
          </div>
     );
};

export default JOR_LogItem;
