// 📦 LIBRARIES IMPORT
import GenButton from '@/shared/components/Button/GenButton';
import { BookText } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 ADD FOOD SECTION - Add food form
📶 INPUTS
    - 🎯 Add Journal Handler - Handler of Add Journal Button
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     addJournalHandler?: () => void;
}

const JOR_AddJournalSection: React.FC<Props> = ({ className, addJournalHandler }) => {
     return (
          <div
               className={twMerge(
                    'flex gap-3',
                    'border-stroke bg-card w-fit overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <GenButton
                    label="New Journal"
                    className="w-40"
                    Icon={BookText}
                    onClick={addJournalHandler}
               />
          </div>
     );
};

export default JOR_AddJournalSection;
