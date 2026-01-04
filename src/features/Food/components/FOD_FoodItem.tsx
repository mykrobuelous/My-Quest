// 📦 LIBRARIES IMPORT
import type { FoodListType } from '@/collection/data/food.types';
import { Pencil, Trash2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 FOOD ITEM - a single food item for the meal view.
📶 INPUTS
    - 🗂️ Food Item - food details
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     foodItem: FoodListType;
     onDeleteHandler?: () => void;
     onEditHandler?: () => void;
}

const FOD_FoodItem: React.FC<Props> = ({ className, foodItem, onDeleteHandler, onEditHandler }) => {
     // === 🧩 DECONSTRUCTION ===
     const { name, amount } = foodItem;
     return (
          <div
               className={twMerge(
                    'bg-gray-selected flex items-center rounded-sm px-4 py-1.5',
                    'cursor-pointer hover:bg-gray-600',
                    className
               )}
          >
               <div className="flex-1">
                    <p className="text-lg text-white">{name}</p>
               </div>
               <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-white">{amount}</p>
                    <div className="flex items-center gap-2">
                         {onEditHandler && (
                              <Pencil
                                   className="text-sec-text h-4 w-4 hover:text-white"
                                   onClick={onEditHandler}
                              />
                         )}
                         {onDeleteHandler && (
                              <Trash2
                                   className="text-sec-text h-4 w-4 hover:text-white"
                                   onClick={onDeleteHandler}
                              />
                         )}
                    </div>
               </div>
          </div>
     );
};

export default FOD_FoodItem;
