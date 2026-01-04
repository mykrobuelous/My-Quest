import type { CodingType } from '@/collection/data/coding.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { generateID, type IDBrand } from '@/shared/types/utilTypes';
/* ===================================================================== */

interface InitialState {
     totalMinutes: number;
     codingData: CodingType[];
}

const initialState: InitialState = {
     totalMinutes: 0,
     codingData: [],
};

const codingReducer = createSlice({
     name: 'coding',
     initialState,
     reducers: {
          loadCodingAction: (state, action: PayloadAction<CodingType[]>) => {
               state.codingData = action.payload;
               state.totalMinutes = action.payload.reduce((acc, codingItem) => {
                    return codingItem.duration + acc;
               }, 0);
          },
          addCodingEntryAction: (state, action: PayloadAction<Omit<CodingType, 'id'>>) => {
               const newId = generateID();
               state.codingData.push({ ...action.payload, id: newId });
               state.totalMinutes += action.payload.duration;
          },
          removeCodingAction: (state, action: PayloadAction<IDBrand>) => {
               const exerToRemove = state.codingData.find(
                    (exerItem) => exerItem.id === action.payload
               );
               if (exerToRemove) {
                    state.totalMinutes -= exerToRemove.duration;
               }
               state.codingData = state.codingData.filter(
                    (exerItem) => exerItem.id !== action.payload
               );
          },
     },
});

export const codingState = (state: RootState) => state.coding;
export const { loadCodingAction, addCodingEntryAction, removeCodingAction } = codingReducer.actions;
export default codingReducer.reducer;
