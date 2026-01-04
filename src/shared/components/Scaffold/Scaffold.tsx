// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 SCAFFOLD - Component Imports for scaffolding
📶 INPUTS
    - 🔤 Label - Page title of the scaffold
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     label?: string;
}

const Scaffold: React.FC<Props> = ({ className, label }) => {
     return (
          <div className={twMerge('view-full flex-center flex-col', className)}>
               {label && <p className="text-sec-text text-2xl font-bold">{label}</p>}
               <p className="text-sec-text">🚧 This page is still under construction 🚧</p>
          </div>
     );
};

export default Scaffold;
