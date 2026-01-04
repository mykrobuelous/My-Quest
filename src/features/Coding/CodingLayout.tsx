// 📦 LIBRARIES IMPORT
import PageTitle from '@/shared/components/PageTitle/PageTitle';
import { SquareTerminal } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import COD_TotalsSection from './containers/COD_TotalsSection';
import COD_LogsSection from './containers/COD_LogsSection';
import COD_AddExeSection from './containers/COD_AddSection';

/* ===================================================================== */
/*
🧩 CODING LAYOUT - Coding Feature Layout
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

const CodingLayout: React.FC<Props> = ({ className }) => {
     return (
          <div
               className={twMerge(
                    'view-full flex flex-1 flex-col gap-4 overflow-hidden',
                    'px-4 py-6',
                    className
               )}
          >
               <PageTitle page="Coding" Icon={SquareTerminal} />
               <COD_TotalsSection />
               <COD_AddExeSection />
               <COD_LogsSection />
          </div>
     );
};

export default CodingLayout;
