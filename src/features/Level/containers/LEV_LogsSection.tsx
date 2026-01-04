// 📦 LIBRARIES IMPORT
import { logsSelector } from '@/shared/store/selectors';
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';
import LEV_LogItem from '../components/LEV_LogItem';

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

const LEV_LogsSection: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const logData = useAppSelector(logsSelector);

     return (
          <div
               className={twMerge(
                    'flex flex-col gap-3',
                    'border-stroke bg-card w-150 flex-1 overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <p className="text-sm">Level & Progress Logs</p>
               <div className="flex flex-col gap-1 overflow-hidden">
                    <div className="flex items-center px-4">
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Date</p>
                         </div>
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Value</p>
                         </div>
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Operation</p>
                         </div>
                    </div>
                    <div className="flex flex-col gap-1 overflow-y-auto">
                         {[...logData].reverse().map((logItem) => (
                              <LEV_LogItem
                                   key={logItem.id}
                                   date={logItem.date}
                                   value={logItem.value}
                                   operation={logItem.operation}
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default LEV_LogsSection;
