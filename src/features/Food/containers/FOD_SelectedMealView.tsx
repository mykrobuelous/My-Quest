// 📦 LIBRARIES IMPORT
import type { FoodType } from '@/collection/data/food.types';
import { Pencil, Soup } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import FOD_FoodItem from '../components/FOD_FoodItem';
import FOD_UpdateMealModal from '../modals/FOD_UpdateMealModal';
import { useModal } from '@/shared/context/useModal';

/* ===================================================================== */
/*
🧩 SELECTED MEAL VIEW - View for selected meal in the food view section
📶 INPUTS
    - 🔁 Meal - the whole selected meal with food type
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     mealItem: FoodType;
}

const FOD_SelectedMealView: React.FC<Props> = ({ className, mealItem }) => {
     const { meal, foodList } = mealItem;
     const { openModal } = useModal();
     return (
          <div className={twMerge('flex flex-1 flex-col gap-4', 'overflow-hidden', className)}>
               <div className="flex items-center justify-between gap-20">
                    <div className="flex min-w-0 items-end gap-2">
                         <p
                              className={twMerge(
                                   'min-w-0 flex-1 text-2xl leading-none font-bold',
                                   'overflow-hidden text-ellipsis whitespace-nowrap'
                              )}
                         >
                              {meal}
                         </p>
                         <Pencil
                              className="text-sec-text mb-0.5 h-4 w-4 cursor-pointer hover:text-white"
                              onClick={() =>
                                   openModal(<FOD_UpdateMealModal selectedMeal={mealItem} />)
                              }
                         />
                    </div>
                    <div className="flex gap-1">
                         <p className="text-xl font-semibold">{foodList.length}</p>
                         <Soup className="h-6 w-6" />
                    </div>
               </div>
               <div className="flex flex-col gap-1 overflow-hidden">
                    <div className="flex items-center px-4">
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Food</p>
                         </div>
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Amount</p>
                         </div>
                    </div>
                    <div className="flex w-full flex-1 flex-col gap-2 overflow-y-auto">
                         {foodList.map((foodItem) => (
                              <FOD_FoodItem key={foodItem.id} foodItem={foodItem} />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default FOD_SelectedMealView;
