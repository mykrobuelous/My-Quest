// 📦 LIBRARIES IMPORT
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

// 🧪 UTILITY IMPORT
import navReducer from './reducers/navReducer';
import leveLReducer, { loadLogsAction } from './reducers/levelReducer';
import exerciseReducer, { loadExerciseCategoryAction } from './reducers/exerciseReducer';
import { logsData } from '@/collection/data/levelLogsData';
import { exerciseCategoryData } from '@/collection/data/exerciseData';
import foodReducer from './reducers/foodReducer';
import {} from '@/collection/data/foodData';
import codingReducer from './reducers/codingReducer';
import {} from '@/collection/data/codingData';
import journalReducer, { loadJournalCategoryAction } from './reducers/journalReducer';
import { JournalCategoryData } from '@/collection/data/journalData';

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
store.dispatch(loadJournalCategoryAction(JournalCategoryData));

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
