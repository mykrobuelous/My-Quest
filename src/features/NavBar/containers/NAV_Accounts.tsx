// 📦 LIBRARIES IMPORT
import { SquareUserRound } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 ACCOUNT - The account and minimize button is stored.
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

const NAV_Accounts: React.FC<Props> = ({ className }) => {
     return (
          <div
               className={twMerge(
                    'flex items-center gap-1',
                    'border-stroke border-t-2 px-3 py-2',
                    className
               )}
          >
               <SquareUserRound className="text-sec-text h-6 w-6" />
               <p className="text-sec-text text-sm tracking-tight">Meg Franco Bacal</p>
          </div>
     );
};

export default NAV_Accounts;
