// 📦 LIBRARIES IMPORT
import type { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 PAGE TITLE - Page Title Format for every page
📶 INPUTS
    - 🔤 Page - Page title
    - 🧩 Icon - Page Icon for the page
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     page: string;
     Icon: LucideIcon;
}

const PageTitle: React.FC<Props> = ({ className, page, Icon }) => {
     return (
          <div className={twMerge('flex items-center gap-2', className)}>
               <Icon strokeWidth={3} />
               <p className="text-2xl">{page}</p>
          </div>
     );
};

export default PageTitle;
