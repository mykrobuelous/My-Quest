// 📦 LIBRARIES IMPORT
import { codingState } from '@/shared/store/reducers/codingReducer';
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';
import COD_LogItem from '../components/COD_LogItem';
import { getTimeInfo } from '@/shared/utils/functions/timeUtils';
import useCoding from '../hooks/useCoding';
import type { IDBrand } from '@/shared/types/utilTypes';
import toast from 'react-hot-toast';
import { useModal } from '@/shared/context/useModal';
import ConfirmModal from '@/shared/components/Modal/ConfirmModal';

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

const COD_LogsSection: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const { codingData } = useAppSelector(codingState);

     const { removeCoding } = useCoding();
     const { openModal } = useModal();

     const removeCodingHandler = (id: IDBrand, duration: number) => {
          removeCoding(id, duration);
          toast.success('Coding entry removed successfully!');
     };

     return (
          <div
               className={twMerge(
                    'flex flex-col gap-3',
                    'border-stroke bg-card w-200 flex-1 overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <p className="text-sm">Coding Logs</p>
               <div className="flex flex-col gap-1 overflow-hidden">
                    <div className="flex items-center px-4">
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Subject</p>
                         </div>
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Duration</p>
                         </div>
                    </div>
                    <div className="flex flex-col gap-1 overflow-y-auto">
                         {[...codingData].reverse().map((logItem) => (
                              <COD_LogItem
                                   key={logItem.id}
                                   duration={getTimeInfo(logItem.duration).fullText}
                                   subject={logItem.subject}
                                   removeHandler={() =>
                                        openModal(
                                             <ConfirmModal
                                                  onConfirm={() =>
                                                       removeCodingHandler(
                                                            logItem.id,
                                                            logItem.duration
                                                       )
                                                  }
                                             />
                                        )
                                   }
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default COD_LogsSection;
