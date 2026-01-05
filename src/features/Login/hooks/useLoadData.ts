import type { CodingType } from '@/collection/data/coding.types';
import type { ExerciseType } from '@/collection/data/exercise.types';
import type { FoodType } from '@/collection/data/food.types';
import type { JournalType } from '@/collection/data/journal.types';
import type { LogType } from '@/collection/data/level.types';
import { loadCodingAction } from '@/shared/store/reducers/codingReducer';
import { loadExerciseAction } from '@/shared/store/reducers/exerciseReducer';
import { loadMealsAction } from '@/shared/store/reducers/foodReducer';
import { loadJournalsAction } from '@/shared/store/reducers/journalReducer';
import { loadLogsAction } from '@/shared/store/reducers/levelReducer';
import { useAppDispatch } from '@/shared/store/store';
/* ===================================================================== */
/* 🔗 USE LOAD DATA - Load data into the project */

const useLoadData = () => {
     const dispatch = useAppDispatch();

     const loadExerciseData = (data: ExerciseType[]) => {
          dispatch(loadExerciseAction(data));
     };
     const loadFoodData = (data: FoodType[]) => {
          dispatch(loadMealsAction(data));
     };

     const loadCodingData = (data: CodingType[]) => {
          dispatch(loadCodingAction(data));
     };
     const loadJournalData = (data: JournalType[]) => {
          dispatch(loadJournalsAction(data));
     };
     const loadLevelData = (data: LogType[]) => {
          dispatch(loadLogsAction(data));
     };
     return { loadExerciseData, loadFoodData, loadCodingData, loadJournalData, loadLevelData };
};

export default useLoadData;
