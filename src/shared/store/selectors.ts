// 🧪 UTILITY IMPORT
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { convertTimestampDate, getLevelInfo } from '../utils/functions/levelUtils';
import { getTimeInfo } from '../utils/functions/timeUtils';
import type { IDBrand } from '../types/utilTypes';
/* ===================================================================== */
/*
🗂️ SELECTORS - Selectors for the application
📚 CONTENT
    1. 
*/

const selectLogs = (state: RootState) => state.level.logsData;
const selectTotalExp = (state: RootState) => state.level.totalExp;
const selectMinutes = (state: RootState) => state.exercise.totalMinutes;
const selectExerciseCategory = (state: RootState) => state.exercise.exerciseCategory;
const selectExercise = (state: RootState) => state.exercise.exerciseData;
const selectFoodMeals = (state: RootState) => state.food.mealData;
const selectFoodSelectedMealId = (state: RootState) => state.food.selectedMealId;
const selectCodingMinutes = (state: RootState) => state.coding.totalMinutes;
const selectJournals = (state: RootState) => state.journal.journalData;
const selectSelectedJournalId = (state: RootState) => state.journal.selectedJournalId;
const selectJournalCategory = (state: RootState) => state.journal.journalCategory;
const selectCoding = (state: RootState) => state.coding.codingData;

export const logsSelector = createSelector([selectLogs], (logs) => {
     return logs.map((logItem) => ({ ...logItem, date: convertTimestampDate(logItem.timestamp) }));
});

export const levelSelector = createSelector([selectTotalExp], (totalExp) => getLevelInfo(totalExp));

export const exerciseInfoSelector = createSelector([selectMinutes], (minutes) => {
     return getTimeInfo(minutes);
});

export const exerciseSelector = createSelector(
     [selectExercise, selectExerciseCategory],
     (exerciseData, exerciseCategory) => {
          return exerciseData.map((exerItem) => {
               return {
                    ...exerItem,
                    categoryInfo: exerciseCategory.find(
                         (exCatItem) => exerItem.categoryId === exCatItem.id
                    ) ?? { id: '0000' as IDBrand, name: 'Default' },
                    date: convertTimestampDate(exerItem.timestamp),
               };
          });
     }
);

export const foodCountSelector = createSelector([selectFoodMeals], (mealData) => {
     const foodCount = mealData.reduce((acc, mealItem) => {
          return acc + mealItem.foodList.length;
     }, 0);
     return { mealCount: mealData.length, foodCount };
});

export const mealSelector = createSelector(
     [selectFoodMeals, selectFoodSelectedMealId],
     (mealData, selectedId) => {
          return mealData.find((mealItem) => mealItem.id === selectedId) || null;
     }
);

export const codingInfoSelector = createSelector([selectCodingMinutes], (minutes) => {
     return getTimeInfo(minutes);
});

export const journalCountSelector = createSelector(
     [selectJournals, selectJournalCategory],
     (journalData, journalCategoryData) => {
          const journals = journalData ?? [];
          const categories = journalCategoryData ?? [];

          const counts = categories.reduce<Record<string, number>>((acc, cat) => {
               acc[cat.name] = journals.filter((j) => j.categoryId === cat.id).length;
               return acc;
          }, {});

          return {
               totalJournals: journals.length,
               feelingsJournalCount: counts['feelings'] ?? 0,
               appreciationJournalCount: counts['appreciation'] ?? 0,
               freestyleJournalCount: counts['freestyle'] ?? 0,
          };
     }
);

export const journalSelector = createSelector(
     [selectJournals, selectJournalCategory],
     (journalData, journalCategoryData) => {
          return journalData.map((journalItem) => ({
               ...journalItem,
               categoryInfo: journalCategoryData.find(
                    (catItem) => journalItem.categoryId === catItem.id
               ) ?? { id: '0000' as IDBrand, name: 'Default', guideQuestion: '' },
               date: convertTimestampDate(journalItem.date),
          }));
     }
);

export const selectedJournalSelector = createSelector(
     [selectJournals, selectSelectedJournalId, selectJournalCategory],
     (journalData, selectedJournalId, journalCategoryData) => {
          const newJournalData = journalData.find(
               (journalItem) => journalItem.id === selectedJournalId
          );
          return {
               ...newJournalData,
               categoryInfo: journalCategoryData.find(
                    (catItem) => newJournalData?.categoryId === catItem.id
               ),
          };
     }
);

export const allDataSelector = createSelector(
     [selectLogs, selectExercise, selectFoodMeals, selectCoding, selectJournals],
     (level, exercise, food, coding, journal) => {
          return { level, exercise, food, coding, journal };
     }
);
