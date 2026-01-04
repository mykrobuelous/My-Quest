// 📦 LIBRARIES IMPORT
import { foodState } from '@/shared/store/reducers/foodReducer';
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';
import FOD_MealItem from '../components/FOD_MealItem';
import useFood from '../hooks/useFood';

/* ===================================================================== */
/*
🧩 FOOD LOGS SECTION - The food list is located without selected.
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
}

const FOD_FoodLogSection: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const { mealData, selectedMealId } = useAppSelector(foodState);
     const { setSelectedMeal } = useFood();

     return (
          <div
               className={twMerge(
                    'flex flex-col gap-3',
                    'border-stroke bg-card w-60 overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <p className="text-sm">Food Logs</p>
               <div className="flex flex-col gap-2 overflow-y-auto">
                    {[...mealData].reverse().map((mealItem) => (
                         <FOD_MealItem
                              key={mealItem.id}
                              meal={mealItem.meal}
                              mealCount={mealItem.foodList.length}
                              selected={selectedMealId === mealItem.id}
                              onSelect={() => setSelectedMeal(mealItem.id)}
                         />
                    ))}
               </div>
          </div>
     );
};

export default FOD_FoodLogSection;
