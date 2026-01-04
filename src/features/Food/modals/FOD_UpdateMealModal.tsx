// 📦 LIBRARIES IMPORT
import type { FoodListType, FoodType } from '@/collection/data/food.types';
import GenInput from '@/shared/components/Input/GenInput';
import { generateID, type IDBrand } from '@/shared/types/utilTypes';
import { Salad, Soup, StopCircle } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import useFood from '../hooks/useFood';
import GenButton from '@/shared/components/Button/GenButton';
import FOD_FoodItem from '../components/FOD_FoodItem';
import { useModal } from '@/shared/context/useModal';

/* ===================================================================== */
/*
🧩 UPDATE MEAL MODAL - Updating modal for fixing food.
📶 INPUTS
    - 🗂️ Selected Meal - Selected Meal Modal
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     selectedMeal: FoodType;
}

const FOD_UpdateMealModal: React.FC<Props> = ({ className, selectedMeal }) => {
     // === 🔄 FUNCTION HOOKS ===
     const { closeModal } = useModal();
     const { updateMeal } = useFood();

     // === 🖥️ REACT HOOKS ===
     const [foodList, setFoodList] = useState<FoodListType[]>(selectedMeal.foodList);
     const [mealName, setMealName] = useState<string>(selectedMeal.meal);
     const [foodName, setFoodName] = useState<string>('');
     const [foodAmount, setFoodAmount] = useState<string>('');

     // === 📊 HANDLERS ===

     const addFoodItemHandler = () => {
          if (foodName.trim() === '' || foodAmount.trim() === '') {
               toast.error('Please enter valid food name and amount.');
               return;
          }

          const foodItem: FoodListType = {
               id: generateID(),
               name: foodName,
               amount: foodAmount,
          };
          setFoodList((prevList) => [...prevList, foodItem]);
          clearFoodInputs();
     };

     const clearFoodInputs = () => {
          setFoodName('');
          setFoodAmount('');
     };

     const deleteFoodItemHandler = (id: IDBrand) => {
          setFoodList((prevList) => prevList.filter((item) => item.id !== id));
     };

     const updateFoodHandler = () => {
          if (mealName.trim() === '' || foodList.length === 0) {
               toast.error('Please enter a meal name and add at least one food item.');
               return;
          }
          updateMeal({ id: selectedMeal.id, meal: mealName, foodList });
          toast.success('Meal updated successfully!');
          closeModal();
     };
     return (
          <div className={twMerge('flex flex-col gap-2', 'p-4', className)}>
               <div className="item-end flex justify-between gap-2">
                    <div className="flex items-center gap-2">
                         <Salad className="h-7 w-7" />
                         <p className="text-2xl leading-none font-bold">Update Meal</p>
                    </div>
                    <div className="flex items-center gap-2">
                         <p>{foodList.length}</p>
                         <Soup className="h-6 w-6" />
                    </div>
               </div>
               <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                         <p className="text-xs font-semibold uppercase">Meal</p>
                         <GenInput
                              className="w-full"
                              placeholder="e.g. Breakfast, Lunch, Dinner"
                              value={mealName}
                              onChange={(e) => setMealName(e.target.value)}
                         />
                    </div>
                    <div className="flex flex-col">
                         <p className="text-xs font-semibold uppercase">Food</p>
                         <div className="flex gap-2">
                              <GenInput
                                   className="w-full"
                                   placeholder="e.g. Chicken"
                                   onChange={(e) => setFoodName(e.target.value)}
                                   value={foodName}
                              />
                              <GenInput
                                   className="w-full"
                                   placeholder="Amount"
                                   onChange={(e) => setFoodAmount(e.target.value)}
                                   value={foodAmount}
                              />
                              <GenButton
                                   label="Add New Meal"
                                   Icon={Soup}
                                   onClick={addFoodItemHandler}
                              />
                         </div>
                    </div>
                    <div className="flex flex-col gap-2">
                         <p className="text-xs font-semibold uppercase">Food Items</p>
                         {foodList.length !== 0 ? (
                              <div className="flex h-40 flex-col gap-2 overflow-y-auto">
                                   {foodList.map((foodItem) => (
                                        <FOD_FoodItem
                                             key={foodItem.id}
                                             foodItem={foodItem}
                                             onDeleteHandler={() =>
                                                  deleteFoodItemHandler(foodItem.id)
                                             }
                                        />
                                   ))}
                              </div>
                         ) : (
                              <p className="text-sec-text h-40 text-sm">No food items added yet.</p>
                         )}
                    </div>
                    <div className="flex items-center justify-between gap-20">
                         <GenButton
                              label="Cancel"
                              className="w-full"
                              Icon={StopCircle}
                              onClick={closeModal}
                         />
                         <GenButton
                              label="Update Meal"
                              className="w-full"
                              Icon={Salad}
                              onClick={updateFoodHandler}
                         />
                    </div>
               </div>
          </div>
     );
};

export default FOD_UpdateMealModal;
