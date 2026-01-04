// 📦 LIBRARIES IMPORT
import { mealSelector } from '@/shared/store/selectors';
import { useAppSelector } from '@/shared/store/store';
import { Salad } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import FOD_SelectedMealView from './FOD_SelectedMealView';

/* ===================================================================== */
/*
🧩 FOOD VIEW SECTION - Where the selected food is viewed.
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

const FOD_FoodViewSection: React.FC<Props> = ({ className }) => {
     const selectedMeal = useAppSelector(mealSelector);
     return (
          <div
               className={twMerge(
                    'flex flex-col gap-3',
                    'border-stroke bg-card w-120 overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <p className="text-sm">Food View</p>
               {selectedMeal ? (
                    <FOD_SelectedMealView mealItem={selectedMeal} />
               ) : (
                    <div className="view-full flex-center flex-col gap-2">
                         <Salad className="text-sec-text h-20 w-20" />
                         <p className="text-sec-text">No Meal Selected</p>
                    </div>
               )}
          </div>
     );
};

export default FOD_FoodViewSection;
