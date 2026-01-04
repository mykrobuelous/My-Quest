// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import { useAppSelector } from '@/shared/store/store';
import { levelSelector } from '@/shared/store/selectors';

// 🧩 COMPONENT IMPORT
import LabelCard from '@/shared/components/LabelCard/LabelCard';

/* ===================================================================== */
/*
🧩 TOTALS SECTION - The total level is displayed as levels
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

const LEV_TotalsSection: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const levelInfo = useAppSelector(levelSelector);
     return (
          <div className={twMerge('flex gap-3', 'w-fit rounded-sm', className)}>
               <LabelCard label="LVL" value={String(levelInfo.level)} />
               <LabelCard label="Total EXP" value={String(levelInfo.totalExp)} />
               <LabelCard
                    label="Current EXP / Total EXP"
                    value={String(`${levelInfo.currentExp} / ${levelInfo.expNeeded} `)}
               />
          </div>
     );
};

export default LEV_TotalsSection;
