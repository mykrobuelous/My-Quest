// 📦 LIBRARIES IMPORT
import PageTitle from '@/shared/components/PageTitle/PageTitle';
import { ChartNoAxesColumn } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import LEV_TotalsSection from './containers/LEV_TotalsSection';
import LEV_LogsSection from './containers/LEV_LogsSection';

/* ===================================================================== */
/*
🧩 LEVEL & PROGRESS PAGE - It contains the logs for the levels
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

const LevelLayout: React.FC<Props> = ({ className }) => {
     return (
          <div className={twMerge('view-full flex flex-col gap-4', 'px-4 py-6', className)}>
               <PageTitle page="Level & Progress" Icon={ChartNoAxesColumn} />
               <LEV_TotalsSection />
               <LEV_LogsSection />
          </div>
     );
};

export default LevelLayout;
