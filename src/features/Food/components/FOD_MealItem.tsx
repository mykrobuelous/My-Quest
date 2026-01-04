// 📦 LIBRARIES IMPORT
import { Soup } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 MEAL ITEM - Meal item to show in food logs
📶 INPUTS
    - 🔤 Meal - Meal time label duration
    - 🔢 Meal Count - Meal count for that meal
    - 🎯 On Select - Function triggered or passed in.
    - ✅ Selected - if the food is selected.
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     meal: string;
     mealCount: number;
     onSelect?: () => void;
     selected?: boolean;
}

const FOD_MealItem: React.FC<Props> = ({
     className,
     meal,
     mealCount,
     onSelect = () => {},
     selected = false,
}) => {
     return (
          <div
               className={twMerge(
                    'flex items-center justify-between gap-10',
                    'bg-gray-selected rounded-sm px-4 py-1.5',
                    'cursor-pointer hover:bg-gray-600',
                    selected && 'bg-gray-700',
                    className
               )}
               onClick={onSelect}
          >
               <p className="min-w-0 flex-1 overflow-hidden text-sm text-ellipsis whitespace-nowrap">
                    {meal}
               </p>
               <div className="flex items-center gap-1">
                    <p className="text-sm">{mealCount}</p>
                    <Soup className="h-4 w-4" />
               </div>
          </div>
     );
};

export default FOD_MealItem;
