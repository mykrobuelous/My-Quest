// 🧪 UTILITY IMPORT
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { FoodType } from '@/collection/data/food.types';
import { generateID, type IDBrand } from '@/shared/types/utilTypes';

/* ===================================================================== */

interface InitialState {
     mealData: FoodType[];
     selectedMealId: IDBrand | null;
}

const initialState: InitialState = {
     mealData: [],
     selectedMealId: null,
};

const foodReducer = createSlice({
     name: 'food',
     initialState,
     reducers: {
          loadMealsAction: (state, action: PayloadAction<FoodType[]>) => {
               state.mealData = action.payload;
          },
          setSelectedMealAction: (state, action: PayloadAction<IDBrand | null>) => {
               state.selectedMealId = action.payload;
          },
          addMealAction: (state, action: PayloadAction<Omit<FoodType, 'id'>>) => {
               const newMeal: FoodType = {
                    ...action.payload,
                    id: generateID(),
               };
               state.mealData.push(newMeal);
          },
          removeMealAction: (state, action: PayloadAction<IDBrand>) => {
               state.mealData = state.mealData.filter((mealItem) => mealItem.id !== action.payload);
          },
          updateMealAction: (state, action: PayloadAction<FoodType>) => {
               const index = state.mealData.findIndex((meal) => meal.id === action.payload.id);
               if (index !== -1) {
                    state.mealData[index] = action.payload;
               }
          },
     },
});

export const foodState = (state: RootState) => state.food;
export const {
     loadMealsAction,
     setSelectedMealAction,
     addMealAction,
     removeMealAction,
     updateMealAction,
} = foodReducer.actions;
export default foodReducer.reducer;
