// 📦 LIBRARIES IMPORT
import { Flame } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 APP LOGO - APPS Logo
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

const NAV_AppLogo: React.FC<Props> = ({ className }) => {
     return (
          <div
               className={twMerge(
                    'flex items-center gap-1',
                    'border-stroke border-b-2 px-3 py-2',
                    className
               )}
          >
               <Flame strokeWidth={4} />
               <p className="tracking-tight">My Quest</p>
          </div>
     );
};

export default NAV_AppLogo;
