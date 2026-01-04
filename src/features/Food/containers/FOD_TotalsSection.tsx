// 📦 LIBRARIES IMPORT
import LabelCard from '@/shared/components/LabelCard/LabelCard';
import { foodCountSelector } from '@/shared/store/selectors';
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 TOTALS SECTION - Where Meal totals are recorded
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

const FOD_TotalsSection: React.FC<Props> = ({ className }) => {
     const { foodCount, mealCount } = useAppSelector(foodCountSelector);
     return (
          <div className={twMerge('flex gap-3', 'w-fit rounded-sm', className)}>
               <LabelCard label="Meals" value={mealCount} />
               <LabelCard label="Food Count" value={foodCount} />
          </div>
     );
};

export default FOD_TotalsSection;
