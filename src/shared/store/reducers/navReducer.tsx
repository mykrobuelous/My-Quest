// 🧪 UTILITY IMPORT
import type { PageNavType } from '@/shared/types/navTypes';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

/* ===================================================================== */

interface InitialState {
     pageNav: PageNavType;
     login: boolean;
}

const initialState: InitialState = {
     pageNav: 'home',
     login: true,
};

const navReducer = createSlice({
     name: 'nav',
     initialState,
     reducers: {
          setPageNavAction: (state, action: PayloadAction<PageNavType>) => {
               state.pageNav = action.payload;
          },
     },
});

export const navState = (state: RootState) => state.nav;
export const { setPageNavAction } = navReducer.actions;
export default navReducer.reducer;
