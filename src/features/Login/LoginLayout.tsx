// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 LOGIN LAYOUT - Forms the Login of the application
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

const LoginLayout: React.FC<Props> = ({ className }) => {
     return (
          <div className={twMerge('view-screen flex-center', 'bg-background', className)}>
               <input type="file" accept=".json,applicatin.json" />
          </div>
     );
};

export default LoginLayout;
