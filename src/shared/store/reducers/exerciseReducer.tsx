// 🧪 UTILITY IMPORT
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { ExerciseCategoryType, ExerciseType } from '@/collection/data/exercise.types';
import { generateID, type IDBrand } from '@/shared/types/utilTypes';

/* ===================================================================== */

interface InitialState {
     totalMinutes: number;
     exerciseCategory: ExerciseCategoryType[];
     exerciseData: ExerciseType[];
}

const initialState: InitialState = {
     totalMinutes: 0,
     exerciseCategory: [],
     exerciseData: [],
};

const exerciseReducer = createSlice({
     name: 'exercise',
     initialState,
     reducers: {
          loadExerciseCategoryAction: (state, action: PayloadAction<ExerciseCategoryType[]>) => {
               state.exerciseCategory = action.payload;
          },
          loadExerciseAction: (state, action: PayloadAction<ExerciseType[]>) => {
               state.exerciseData = action.payload;
               state.totalMinutes = action.payload.reduce((acc, exerItem) => {
                    return exerItem.duration + acc;
               }, 0);
          },
          addExerciseAction: (state, action: PayloadAction<Omit<ExerciseType, 'id'>>) => {
               const newId = generateID();
               state.exerciseData.push({ ...action.payload, id: newId });
               state.totalMinutes += action.payload.duration;
          },
          removeExerciseAction: (state, action: PayloadAction<IDBrand>) => {
               const exerToRemove = state.exerciseData.find(
                    (exerItem) => exerItem.id === action.payload
               );
               if (exerToRemove) {
                    state.totalMinutes -= exerToRemove.duration;
               }
               state.exerciseData = state.exerciseData.filter(
                    (exerItem) => exerItem.id !== action.payload
               );
          },
     },
});

export const exerciseState = (state: RootState) => state.exercise;
export const {
     loadExerciseCategoryAction,
     loadExerciseAction,
     addExerciseAction,
     removeExerciseAction,
} = exerciseReducer.actions;
export default exerciseReducer.reducer;
