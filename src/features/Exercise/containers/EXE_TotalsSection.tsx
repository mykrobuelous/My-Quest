// 📦 LIBRARIES IMPORT
import LabelCard from '@/shared/components/LabelCard/LabelCard';
import { exerciseInfoSelector } from '@/shared/store/selectors';
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

const EXE_TotalsSection: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const exerciseInfo = useAppSelector(exerciseInfoSelector);
     return (
          <div className={twMerge('flex gap-3', 'w-fit rounded-sm', className)}>
               <LabelCard label="Exercise Time" value={exerciseInfo.fullText} />
               <LabelCard label="days" value={exerciseInfo.totalDays} />
               <LabelCard label="hours" value={exerciseInfo.totalHours} />
               <LabelCard label="minutes" value={exerciseInfo.totalMinutes} />
          </div>
     );
};

export default EXE_TotalsSection;
