// 📦 LIBRARIES IMPORT
import { exerciseSelector } from '@/shared/store/selectors';
import { useAppSelector } from '@/shared/store/store';
import { twMerge } from 'tailwind-merge';
import EXE_LogItem from '../components/EXE_LogItem';
import { getTimeInfo } from '@/shared/utils/functions/timeUtils';
import useExercise from '../hooks/useExercise';
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

const EXE_LogsSection: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const exerciseData = useAppSelector(exerciseSelector);
     const { openModal } = useModal();

     const { removeExercise } = useExercise();

     const removeExerciseHandler = (id: IDBrand, duration: number) => {
          removeExercise(id, duration);
          toast.success('Exercise log removed successfully!');
     };

     return (
          <div
               className={twMerge(
                    'flex flex-col gap-3',
                    'border-stroke bg-card w-200 flex-1 overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <p className="text-sm">Exerecise Logs</p>
               <div className="flex flex-col gap-1 overflow-hidden">
                    <div className="flex items-center px-4">
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Category</p>
                         </div>
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Date</p>
                         </div>
                         <div className="flex-1">
                              <p className="text-sec-text text-xs">Duration</p>
                         </div>
                    </div>
                    <div className="flex flex-col gap-1 overflow-y-auto">
                         {[...exerciseData].reverse().map((exerItem) => (
                              <EXE_LogItem
                                   key={exerItem.id}
                                   category={exerItem.categoryInfo.name}
                                   date={exerItem.date}
                                   duration={getTimeInfo(exerItem.duration).fullText}
                                   removeHandler={() =>
                                        openModal(
                                             <ConfirmModal
                                                  message="Are you sure you want to delete exercise data?"
                                                  onConfirm={() => {
                                                       removeExerciseHandler(
                                                            exerItem.id,
                                                            exerItem.duration
                                                       );
                                                  }}
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

export default EXE_LogsSection;
