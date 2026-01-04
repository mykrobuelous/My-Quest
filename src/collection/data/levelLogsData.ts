// 🧪 UTILITY IMPORT
import type { IDBrand } from '@/shared/types/utilTypes';
import type { LogType } from './level.types';
/* ===================================================================== */

export const logsData: LogType[] = [
     {
          id: 'log-1' as IDBrand,
          timestamp: 1625155200000,
          value: 100,
          operation: 'add',
     },
     {
          id: 'log-2' as IDBrand,
          timestamp: 1625241600000,
          value: 50,
          operation: 'subtract',
     },
     {
          id: 'log-3' as IDBrand,
          timestamp: 1625328000000,
          value: 200,
          operation: 'add',
     },
     {
          id: 'log-4' as IDBrand,
          timestamp: 1625414400000,
          value: 75,
          operation: 'add',
     },
];
