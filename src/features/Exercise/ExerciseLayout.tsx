// 📦 LIBRARIES IMPORT
import PageTitle from '@/shared/components/PageTitle/PageTitle';
import { Footprints } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import EXE_TotalsSection from './containers/EXE_TotalsSection';
import EXE_LogsSection from './containers/EXE_LogsSection';
import EXE_AddExeSection from './containers/EXE_AddExeSection';

/* ===================================================================== */
/*
🧩 EXERCISE LAYOUT - Exercise layout for the 
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

const ExerciseLayout: React.FC<Props> = ({ className }) => {
     return (
          <div
               className={twMerge(
                    'view-full flex flex-1 flex-col gap-4 overflow-hidden',
                    'px-4 py-6',
                    className
               )}
          >
               <PageTitle page="Exercise" Icon={Footprints} />
               <EXE_TotalsSection />
               <EXE_AddExeSection />
               <EXE_LogsSection />
          </div>
     );
};

export default ExerciseLayout;
