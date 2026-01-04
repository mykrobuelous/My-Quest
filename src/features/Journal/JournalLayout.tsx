// 📦 LIBRARIES IMPORT
import PageTitle from '@/shared/components/PageTitle/PageTitle';
import { BookText } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import JOR_TotalsSection from './containers/JOR_TotalsSection';
import JOR_LogsSection from './containers/JOR_LogsSection';
import JOR_AddJournalSection from './containers/JOR_AddJournalSection';
import { useAppSelector } from '@/shared/store/store';
import { journalState } from '@/shared/store/reducers/journalReducer';
import JOR_UpdateJournalView from './containers/JOR_UpdateJournalView';
import { useState } from 'react';
import JOR_AddJournalView from './containers/JOR_AddJournalView';

/* ===================================================================== */
/*
🧩 JOURNAL LAYOUT - The features for journals
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
}

const JournalLayout: React.FC<Props> = ({ className }) => {
     const { selectedJournalId } = useAppSelector(journalState);
     const [addJournalMode, setAddJournalMode] = useState(false);
     return (
          <div
               className={twMerge(
                    'view-full flex flex-1 flex-col gap-4 overflow-hidden',
                    'px-4 py-6',
                    className
               )}
          >
               <PageTitle page="Journals" Icon={BookText} />
               {selectedJournalId ? (
                    <JOR_UpdateJournalView />
               ) : addJournalMode ? (
                    <JOR_AddJournalView backHandler={() => setAddJournalMode(false)} />
               ) : (
                    <>
                         <JOR_TotalsSection />
                         <JOR_LogsSection />
                         <JOR_AddJournalSection addJournalHandler={() => setAddJournalMode(true)} />
                    </>
               )}
          </div>
     );
};

export default JournalLayout;
