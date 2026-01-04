// 📦 LIBRARIES IMPORT
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';
import JOR_LogItem from '../components/JOR_LogItem';
import { journalSelector } from '@/shared/store/selectors';
import useJournal from '../hooks/useJournal';
/* ===================================================================== */
/*
🧩 LOGS SECTION - It shows the logs for the component.
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

const JOR_LogsSection: React.FC<Props> = ({ className }) => {
     const journalData = useAppSelector(journalSelector);
     const { setSelectedJournalId } = useJournal();
     return (
          <div
               className={twMerge(
                    'flex flex-col gap-3',
                    'border-stroke bg-card w-200 flex-1 overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <p className="text-sm">Journal Logs</p>
               <div className="flex flex-col gap-1 overflow-hidden">
                    <div className="flex items-center px-4">
                         <div className="w-30">
                              <p className="text-sec-text text-xs">Date</p>
                         </div>
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Subject</p>
                         </div>
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Category</p>
                         </div>
                    </div>
                    <div className="flex flex-col gap-1 overflow-y-auto">
                         {[...journalData].reverse().map((journalItem) => (
                              <JOR_LogItem
                                   key={journalItem.id}
                                   subject={journalItem.subject}
                                   category={journalItem.categoryInfo.name}
                                   date={journalItem.date}
                                   onClick={() => setSelectedJournalId(journalItem.id)}
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default JOR_LogsSection;
