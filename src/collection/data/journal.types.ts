/* ===================================================================== */

import type { IDBrand } from '@/shared/types/utilTypes';

export type JournalType = {
     id: IDBrand;
     date: number;
     subject: string;
     categoryId: IDBrand;
     content: string;
};

export type JournalCategoryType = {
     id: IDBrand;
     name: string;
     guideQuestion: string;
};

// 'freestyle' | 'appreciation' | 'feelings';
