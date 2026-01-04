// 🧪 UTILITY IMPORT
import type { IDBrand } from '@/shared/types/utilTypes';
/* ===================================================================== */

export type LogType = {
     id: IDBrand;
     timestamp: number;
     value: number;
     operation: 'add' | 'subtract';
};

export type LevelInfoType = {
     level: number;
     currentExp: number;
     expNeeded: number;
     totalExp: number;
};
