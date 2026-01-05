import type { IDBrand } from '@/shared/types/utilTypes';
import type { ExerciseCategoryType, ExerciseType } from './exercise.types';

/* ===================================================================== */

export const exerciseCategoryData: ExerciseCategoryType[] = [
     {
          id: 'EXER001' as IDBrand,
          name: 'Obitrack',
     },
     {
          id: 'EXER002' as IDBrand,
          name: 'Walk',
     },
     {
          id: 'EXER003' as IDBrand,
          name: 'Treadmill',
     },
     {
          id: 'EXER004' as IDBrand,
          name: 'Step Up',
     },
];

export const exerciseData: ExerciseType[] = [
     {
          id: 'EXE001' as IDBrand,
          duration: 30,
          categoryId: 'EXER002' as IDBrand,
          timestamp: 1625155200000,
     },
     {
          id: 'EXE002' as IDBrand,
          duration: 30,
          categoryId: 'EXER003' as IDBrand,
          timestamp: 1625241600000,
     },
     {
          id: 'EXE003' as IDBrand,
          duration: 45,
          categoryId: 'EXER001' as IDBrand,
          timestamp: 1625328000000,
     },
     {
          id: 'EXE004' as IDBrand,
          duration: 20,
          categoryId: 'EXER002' as IDBrand,
          timestamp: 1625414400000,
     },
     {
          id: 'EXE005' as IDBrand,
          duration: 60,
          categoryId: 'EXER003' as IDBrand,
          timestamp: 1625500800000,
     },
     {
          id: 'EXE006' as IDBrand,
          duration: 15,
          categoryId: 'EXER001' as IDBrand,
          timestamp: 1625587200000,
     },
     {
          id: 'EXE007' as IDBrand,
          duration: 90,
          categoryId: 'EXER002' as IDBrand,
          timestamp: 1625673600000,
     },
     {
          id: 'EXE008' as IDBrand,
          duration: 30,
          categoryId: 'EXER003' as IDBrand,
          timestamp: 1625760000000,
     },
     {
          id: 'EXE009' as IDBrand,
          duration: 25,
          categoryId: 'EXER001' as IDBrand,
          timestamp: 1625846400000,
     },
     {
          id: 'EXE010' as IDBrand,
          duration: 50,
          categoryId: 'EXER002' as IDBrand,
          timestamp: 1625932800000,
     },
     {
          id: 'EXE011' as IDBrand,
          duration: 40,
          categoryId: 'EXER003' as IDBrand,
          timestamp: 1626019200000,
     },
     {
          id: 'EXE012' as IDBrand,
          duration: 35,
          categoryId: 'EXER001' as IDBrand,
          timestamp: 1626105600000,
     },
];
