// 📦 LIBRARIES IMPORT
import PageTitle from '@/shared/components/PageTitle/PageTitle';
import { House } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import LEV_TotalsSection from '../Level/containers/LEV_TotalsSection';
import EXE_TotalsSection from '../Exercise/containers/EXE_TotalsSection';
import FOD_TotalsSection from '../Food/containers/FOD_TotalsSection';
import COD_TotalsSection from '../Coding/containers/COD_TotalsSection';
import JOR_TotalsSection from '../Journal/containers/JOR_TotalsSection';

/* ===================================================================== */
/*
🧩 HOME LAYOUT - Home layout where all the stats are entered
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

const HomeLayout: React.FC<Props> = ({ className }) => {
     return (
          <div
               className={twMerge(
                    'view-full flex flex-1 flex-col gap-4 overflow-hidden',
                    'px-4 py-6',
                    className
               )}
          >
               <PageTitle page="Home" Icon={House} />
               <div className="flex flex-1 flex-col justify-between">
                    <div className="flex flex-col gap-2">
                         <p className="text-sec-text text-xs font-bold tracking-tight uppercase">
                              Overall Levels
                         </p>
                         <LEV_TotalsSection />
                    </div>
                    <div className="flex flex-col gap-2">
                         <p className="text-sec-text text-xs font-bold tracking-tight uppercase">
                              Exercise
                         </p>
                         <EXE_TotalsSection />
                    </div>
                    <div className="flex flex-col gap-2">
                         <p className="text-sec-text text-xs font-bold tracking-tight uppercase">
                              Food Journals
                         </p>
                         <FOD_TotalsSection />
                    </div>
                    <div className="flex flex-col gap-2">
                         <p className="text-sec-text text-xs font-bold tracking-tight uppercase">
                              Coding
                         </p>
                         <COD_TotalsSection />
                    </div>
                    <div className="flex flex-col gap-2">
                         <p className="text-sec-text text-xs font-bold tracking-tight uppercase">
                              Journals
                         </p>
                         <JOR_TotalsSection />
                    </div>
               </div>
          </div>
     );
};

export default HomeLayout;
