// 📦 LIBRARIES IMPORT
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

// 🧪 UTILITY IMPORT
import navReducer from './reducers/navReducer';
import leveLReducer, { loadLogsAction } from './reducers/levelReducer';
import exerciseReducer, {
     loadExerciseAction,
     loadExerciseCategoryAction,
} from './reducers/exerciseReducer';
import { logsData } from '@/collection/data/levelLogsData';
import { exerciseCategoryData, exerciseData } from '@/collection/data/exerciseData';
import foodReducer, { loadMealsAction } from './reducers/foodReducer';
import { foodData } from '@/collection/data/foodData';
import codingReducer, { loadCodingAction } from './reducers/codingReducer';
import { codingData } from '@/collection/data/codingData';
import journalReducer, {
     loadJournalCategoryAction,
     loadJournalsAction,
} from './reducers/journalReducer';
import { JournalCategoryData, journalData } from '@/collection/data/journalData';

/* ===================================================================== */
/*
🗂️ STORE - Redux store
📚 CONTENT
    1. 
*/

const store = configureStore({
     reducer: {
          nav: navReducer,
          level: leveLReducer,
          exercise: exerciseReducer,
          food: foodReducer,
          coding: codingReducer,
          journal: journalReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

store.dispatch(loadLogsAction(logsData));
store.dispatch(loadExerciseCategoryAction(exerciseCategoryData));
store.dispatch(loadExerciseAction(exerciseData));
store.dispatch(loadMealsAction(foodData));
store.dispatch(loadCodingAction(codingData));
store.dispatch(loadJournalCategoryAction(JournalCategoryData));
store.dispatch(loadJournalsAction(journalData));

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
