// 🧪 UTILITY IMPORT
import { addLogsAction } from '@/shared/store/reducers/levelReducer';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

/* ===================================================================== */
/* 🔗 USE LEVEL - This the CRUD for levelling */

const useLevel = () => {
     const dispatch = useDispatch();

     const addLevelLog = useCallback(
          (value: number, operation: 'add' | 'subtract') => {
               dispatch(addLogsAction({ operation, value }));
          },
          [dispatch]
     );
     return { addLevelLog };
};

export default useLevel;
