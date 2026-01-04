import { v4 as uuidV4 } from 'uuid';

/* ===================================================================== */
/*
🧾 UTIL TYPES - Type Helpers for utility type functions and brands
📚 CONTENT
    1. Brand - A utility type to create branded types for better type safety.
    2. IDBrand - A branded type for string IDs to ensure type safety in identifiers.
*/

// 🧾 ID BRAND - Creates a new ID Brand for ID values.
declare const brand: unique symbol;

type Brand<T, TBrand> = T & { [brand]: TBrand };

export type IDBrand = Brand<string, 'Brand'>;

export const generateID = (): IDBrand => {
     return uuidV4() as IDBrand;
};
