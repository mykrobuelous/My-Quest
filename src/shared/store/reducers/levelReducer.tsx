// 🧪 UTILITY IMPORT
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { LogType } from '@/collection/data/level.types';
import { generateID } from '@/shared/types/utilTypes';

/* ===================================================================== */

interface InitialState {
     totalExp: number;
     logsData: LogType[];
}

const initialState: InitialState = {
     totalExp: 0,
     logsData: [],
};

const levelReducer = createSlice({
     name: 'level',
     initialState,
     reducers: {
          loadLogsAction: (state, action: PayloadAction<LogType[]>) => {
               state.totalExp = action.payload.reduce((acc, log) => {
                    return log.operation === 'add' ? acc + log.value : acc - log.value;
               }, 0);
               state.logsData = action.payload;
          },
          addLogsAction: (
               state,
               action: PayloadAction<{ operation: 'add' | 'subtract'; value: number }>
          ) => {
               const newLog: LogType = {
                    id: generateID(),
                    timestamp: Date.now(),
                    operation: action.payload.operation,
                    value: action.payload.value,
               };
               state.logsData.push(newLog);
               state.totalExp +=
                    action.payload.operation === 'add'
                         ? action.payload.value
                         : -action.payload.value;
          },
     },
});

export const levelState = (state: RootState) => state.level;
export const { loadLogsAction, addLogsAction } = levelReducer.actions;
export default levelReducer.reducer;
