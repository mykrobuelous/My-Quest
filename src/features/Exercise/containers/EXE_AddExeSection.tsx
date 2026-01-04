// 📦 LIBRARIES IMPORT
import GenButton from '@/shared/components/Button/GenButton';
import GenInput from '@/shared/components/Input/GenInput';
import GenSelect from '@/shared/components/Input/GenSelect';
import { exerciseState } from '@/shared/store/reducers/exerciseReducer';
import { useAppSelector } from '@/shared/store/store';
import type { IDBrand } from '@/shared/types/utilTypes';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import useExercise from '../hooks/useExercise';
import toast from 'react-hot-toast';

/* ===================================================================== */
/*
🧩 ADD SECTION - Exercise Add Operation
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

const EXE_AddExeSection: React.FC<Props> = ({ className }) => {
     const { exerciseCategory } = useAppSelector(exerciseState);

     const [duration, setDuration] = useState(0);
     const [category, setCategory] = useState(exerciseCategory[0].id);

     const { addExercise } = useExercise();

     const clearInputsHandler = () => {
          setDuration(0);
          setCategory(exerciseCategory[0].id);
     };

     const addEntryHandler = () => {
          if (duration > 0) {
               addExercise(duration, category);
               clearInputsHandler();
               toast.success('Exercise entry added successfully!');
          } else toast.error('Please enter a valid duration.');
     };

     return (
          <div
               className={twMerge(
                    'flex items-center gap-4',
                    'border-stroke bg-card w-fit overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <GenInput
                    className="w-20"
                    placeholder="Duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
               />
               <GenSelect
                    items={exerciseCategory.map((exerItem) => {
                         return { label: exerItem.name, value: exerItem.id };
                    })}
                    value={category}
                    onChange={(e) => setCategory(e.target.value as IDBrand)}
               />
               <GenButton label="Add Entry" onClick={addEntryHandler} />
          </div>
     );
};

export default EXE_AddExeSection;
