// 🧪 UTILITY IMPORT
import type { FoodType } from '@/collection/data/food.types';
import useLevel from '@/features/Level/hooks/useLevel';
import {
     addMealAction,
     removeMealAction,
     setSelectedMealAction,
     updateMealAction,
} from '@/shared/store/reducers/foodReducer';
import { useAppDispatch } from '@/shared/store/store';
import type { IDBrand } from '@/shared/types/utilTypes';
import { useCallback } from 'react';

/* ===================================================================== */
/* 🔗 USE FOOD - All food operations are in this place */

const useFood = () => {
     const dispatch = useAppDispatch();
     const { addLevelLog } = useLevel();

     const setSelectedMeal = useCallback(
          (mealId: IDBrand | null) => {
               dispatch(setSelectedMealAction(mealId));
          },
          [dispatch]
     );

     const addMeal = useCallback(
          (mealData: Omit<FoodType, 'id'>) => {
               dispatch(addMealAction(mealData));
               addLevelLog(1, 'add');
          },
          [dispatch, addLevelLog]
     );

     const removeMeal = useCallback(
          (mealId: IDBrand) => {
               dispatch(removeMealAction(mealId));
               addLevelLog(1, 'subtract');
          },
          [dispatch, addLevelLog]
     );

     const updateMeal = useCallback(
          (mealData: FoodType) => {
               dispatch(updateMealAction(mealData));
          },
          [dispatch]
     );
     return { setSelectedMeal, addMeal, removeMeal, updateMeal };
};

export default useFood;
