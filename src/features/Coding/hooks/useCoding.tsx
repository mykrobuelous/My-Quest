/* ===================================================================== */
/* 🔗 USE CODING - the hook for coding operations  */

import useLevel from '@/features/Level/hooks/useLevel';
import { addCodingEntryAction, removeCodingAction } from '@/shared/store/reducers/codingReducer';
import { useAppDispatch } from '@/shared/store/store';
import type { IDBrand } from '@/shared/types/utilTypes';
import { getCodingXP, getExerciseXP } from '@/shared/utils/functions/levelUtils';
import { useCallback } from 'react';

const useCoding = () => {
     const dispatch = useAppDispatch();
     const { addLevelLog } = useLevel();

     const addCoding = useCallback(
          (subject: string, duration: number) => {
               dispatch(addCodingEntryAction({ subject, duration }));
               const expGained = getCodingXP(duration);
               if (expGained > 0) addLevelLog(expGained, 'add');
          },
          [dispatch, addLevelLog]
     );

     const removeCoding = useCallback(
          (codingId: IDBrand, duration: number) => {
               dispatch(removeCodingAction(codingId));
               addLevelLog(getExerciseXP(duration), 'subtract');
          },
          [dispatch, addLevelLog]
     );

     return { addCoding, removeCoding };
};

export default useCoding;
