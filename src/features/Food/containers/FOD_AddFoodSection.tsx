// 📦 LIBRARIES IMPORT
import GenButton from '@/shared/components/Button/GenButton';
import { foodState } from '@/shared/store/reducers/foodReducer';
import { useAppSelector } from '@/shared/store/store';
import { Delete, Salad } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import FOD_AddMealModal from '../modals/FOD_AddMealModal';
import useFood from '../hooks/useFood';
import toast from 'react-hot-toast';
import { useModal } from '@/shared/context/useModal';
import ConfirmModal from '@/shared/components/Modal/ConfirmModal';

/* ===================================================================== */
/*
🧩 ADD FOOD SECTION - Add food form
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

const FOD_AddFoodSection: React.FC<Props> = ({ className }) => {
     const { selectedMealId } = useAppSelector(foodState);
     const { openModal } = useModal();
     const { removeMeal } = useFood();

     const removeMealHandler = () => {
          if (selectedMealId) {
               removeMeal(selectedMealId);
               toast.success('Meal removed successfully!');
          }
     };

     return (
          <div
               className={twMerge(
                    'flex gap-3',
                    'border-stroke bg-card w-fit overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <GenButton
                    label="New Meal"
                    className="w-40"
                    Icon={Salad}
                    onClick={() => openModal(<FOD_AddMealModal />)}
               />
               <GenButton
                    label="Remove Meal"
                    className="w-40"
                    Icon={Delete}
                    disabled={selectedMealId ? false : true}
                    onClick={() =>
                         openModal(
                              <ConfirmModal
                                   message="Are you sure you want to delete meal data?"
                                   onConfirm={removeMealHandler}
                              />
                         )
                    }
               />
          </div>
     );
};

export default FOD_AddFoodSection;
