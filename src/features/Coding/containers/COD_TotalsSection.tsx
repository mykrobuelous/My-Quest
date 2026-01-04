// 📦 LIBRARIES IMPORT
import LabelCard from '@/shared/components/LabelCard/LabelCard';
import { codingInfoSelector } from '@/shared/store/selectors';
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 TOTAL SECTION - Totals of exercise.
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

const COD_TotalsSection: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const { fullText, totalHours, totalMinutes } = useAppSelector(codingInfoSelector);
     return (
          <div className={twMerge('flex gap-3', 'w-fit rounded-sm', className)}>
               <LabelCard label="Coding Time" value={fullText} />
               <LabelCard label="hours" value={totalHours} />
               <LabelCard label="minutes" value={totalMinutes} />
          </div>
     );
};

export default COD_TotalsSection;
