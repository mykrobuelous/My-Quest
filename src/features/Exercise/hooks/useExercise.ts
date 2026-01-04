import useLevel from '@/features/Level/hooks/useLevel';
import { addExerciseAction, removeExerciseAction } from '@/shared/store/reducers/exerciseReducer';
import { useAppDispatch } from '@/shared/store/store';
import type { IDBrand } from '@/shared/types/utilTypes';
import { getExerciseXP } from '@/shared/utils/functions/levelUtils';
import { useCallback } from 'react';
/* ===================================================================== */
/* 🔗 USE EXERCISE - Have the operations for exercise */

const useExercise = () => {
     const dispatch = useAppDispatch();
     const { addLevelLog } = useLevel();

     const addExercise = useCallback(
          (duration: number, categoryId: IDBrand) => {
               dispatch(
                    addExerciseAction({
                         categoryId: categoryId,
                         duration,
                         timestamp: Date.now(),
                    })
               );
               const expGained = getExerciseXP(duration);
               if (expGained > 0) addLevelLog(expGained, 'add');
          },
          [dispatch, addLevelLog]
     );

     const removeExercise = useCallback(
          (exerciseId: IDBrand, duration: number) => {
               dispatch(removeExerciseAction(exerciseId));
               addLevelLog(getExerciseXP(duration), 'subtract');
          },
          [dispatch, addLevelLog]
     );

     return { addExercise, removeExercise };
};

export default useExercise;
