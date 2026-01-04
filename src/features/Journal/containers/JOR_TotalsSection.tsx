// 📦 LIBRARIES IMPORT
import LabelCard from '@/shared/components/LabelCard/LabelCard';
import { journalCountSelector } from '@/shared/store/selectors';
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

const JOR_TotalsSection: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const {
          totalJournals,
          appreciationJournalCount,
          feelingsJournalCount,
          freestyleJournalCount,
     } = useAppSelector(journalCountSelector);
     return (
          <div className={twMerge('flex gap-3', 'w-fit rounded-sm', className)}>
               <LabelCard label="Total" value={totalJournals} />
               <LabelCard label="Freestyle" value={freestyleJournalCount} />
               <LabelCard label="Appreciation" value={appreciationJournalCount} />
               <LabelCard label="Feelings" value={feelingsJournalCount} />
          </div>
     );
};

export default JOR_TotalsSection;
