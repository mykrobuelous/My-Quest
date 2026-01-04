import type { IDBrand } from '@/shared/types/utilTypes';
/* ===================================================================== */

export type ExerciseType = {
     id: IDBrand;
     duration: number; // in minutes
     categoryId: IDBrand;
     timestamp: number;
};

export type ExerciseCategoryType = {
     id: IDBrand;
     name: string;
};
