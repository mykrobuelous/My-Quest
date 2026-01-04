import type { JournalType } from '@/collection/data/journal.types';
import useLevel from '@/features/Level/hooks/useLevel';
import {
     addJournalAction,
     removeJournalAction,
     setSelectedJournalIdAction,
     updateJournalAction,
} from '@/shared/store/reducers/journalReducer';
import { useAppDispatch } from '@/shared/store/store';
import type { IDBrand } from '@/shared/types/utilTypes';
import { useCallback } from 'react';
/* ===================================================================== */
/* 🔗 USE JOURNAL - Journal Operations for journalling */

const useJournal = () => {
     const dispatch = useAppDispatch();
     const { addLevelLog } = useLevel();

     const setSelectedJournalId = useCallback(
          (id: IDBrand | null) => {
               dispatch(setSelectedJournalIdAction(id));
          },
          [dispatch]
     );

     const removeJournal = useCallback(() => {
          dispatch(removeJournalAction());
          addLevelLog(2, 'subtract');
     }, [dispatch, addLevelLog]);

     const updateJournal = useCallback(
          (journalItem: JournalType) => {
               dispatch(updateJournalAction(journalItem));
               dispatch(setSelectedJournalIdAction(null));
          },
          [dispatch]
     );

     const addJournal = useCallback(
          (journalItem: Omit<JournalType, 'id' | 'date'>) => {
               dispatch(addJournalAction(journalItem));
               addLevelLog(2, 'add');
          },
          [dispatch, addLevelLog]
     );

     return { setSelectedJournalId, removeJournal, updateJournal, addJournal };
};

export default useJournal;
