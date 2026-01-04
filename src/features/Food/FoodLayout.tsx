// 📦 LIBRARIES IMPORT
import PageTitle from '@/shared/components/PageTitle/PageTitle';
import { Salad } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import FOD_TotalsSection from './containers/FOD_TotalsSection';
import FOD_FoodLogSection from './containers/FOD_FoodLogSection';
import FOD_FoodViewSection from './containers/FOD_FoodViewSection';
import FOD_AddFoodSection from './containers/FOD_AddFoodSection';

/* ===================================================================== */
/*
🧩 FOOD LAYOUT - Food journals feature of the application.
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

const FoodLayout: React.FC<Props> = ({ className }) => {
     return (
          <div
               className={twMerge(
                    'view-full flex flex-1 flex-col gap-4 overflow-hidden',
                    'px-4 py-6',
                    className
               )}
          >
               <PageTitle page="Food Journals" Icon={Salad} />
               <FOD_TotalsSection />
               <div className="flex w-fit flex-1 gap-4 overflow-hidden">
                    <FOD_FoodLogSection />
                    <FOD_FoodViewSection />
               </div>
               <FOD_AddFoodSection />
          </div>
     );
};

export default FoodLayout;
