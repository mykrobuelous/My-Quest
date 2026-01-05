// 🧪 UTILITY IMPORT
import { setLoginAction, setPageNavAction } from '@/shared/store/reducers/navReducer';
import { useAppDispatch } from '@/shared/store/store';
import type { PageNavType } from '@/shared/types/navTypes';

// ⚛️ REACT IMPORT
import { useCallback } from 'react';

/* ===================================================================== */
/* 🔗 USE PAGE NAV - Change navigation hook */

const usePageNav = () => {
     const dispatch = useAppDispatch();

     const setPageNav = useCallback(
          (page: PageNavType) => {
               dispatch(setPageNavAction(page));
          },
          [dispatch]
     );

     const setLogin = useCallback(
          (login: boolean) => {
               dispatch(setLoginAction(login));
          },
          [dispatch]
     );

     return { setPageNav, setLogin };
};

export default usePageNav;
