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
     login: false,
};

const navReducer = createSlice({
     name: 'nav',
     initialState,
     reducers: {
          setPageNavAction: (state, action: PayloadAction<PageNavType>) => {
               state.pageNav = action.payload;
          },
          setLoginAction: (state, action: PayloadAction<boolean>) => {
               state.login = action.payload;
          },
     },
});

export const navState = (state: RootState) => state.nav;
export const { setPageNavAction, setLoginAction } = navReducer.actions;
export default navReducer.reducer;
