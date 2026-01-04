import type { JournalCategoryType, JournalType } from '@/collection/data/journal.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { generateID, type IDBrand } from '@/shared/types/utilTypes';
/* ===================================================================== */

interface InitialState {
     journalData: JournalType[];
     selectedJournalId: IDBrand | null;
     journalCategory: JournalCategoryType[];
}

const initialState: InitialState = {
     journalData: [],
     selectedJournalId: null,
     journalCategory: [],
};

const journalReducer = createSlice({
     name: 'journal',
     initialState,
     reducers: {
          loadJournalsAction: (state, action: PayloadAction<JournalType[]>) => {
               state.journalData = action.payload;
          },
          loadJournalCategoryAction: (state, action: PayloadAction<JournalCategoryType[]>) => {
               state.journalCategory = action.payload;
          },
          setSelectedJournalIdAction: (state, action: PayloadAction<IDBrand | null>) => {
               state.selectedJournalId = action.payload;
          },
          removeJournalAction: (state) => {
               state.journalData = state.journalData.filter(
                    (journal) => journal.id !== state.selectedJournalId
               );
               state.selectedJournalId = null;
          },
          updateJournalAction: (state, action: PayloadAction<JournalType>) => {
               const index = state.journalData.findIndex(
                    (journal) => journal.id === action.payload.id
               );
               if (index !== -1) {
                    state.journalData[index] = action.payload;
               }
          },
          addJournalAction: (state, action: PayloadAction<Omit<JournalType, 'id' | 'date'>>) => {
               state.journalData.push({ ...action.payload, id: generateID(), date: Date.now() });
          },
     },
});

export const journalState = (state: RootState) => state.journal;
export const {
     loadJournalsAction,
     setSelectedJournalIdAction,
     loadJournalCategoryAction,
     removeJournalAction,
     updateJournalAction,
     addJournalAction,
} = journalReducer.actions;
export default journalReducer.reducer;
