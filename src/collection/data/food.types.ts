// 🧪 UTILITY IMPORT
import type { IDBrand } from '@/shared/types/utilTypes';
/* ===================================================================== */

export type FoodType = {
     id: IDBrand;
     meal: string;
     foodList: FoodListType[];
};

export type FoodListType = {
     id: IDBrand;
     name: string;
     amount: string;
};
