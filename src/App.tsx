// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import AppLayout from './shared/layout/AppLayout';
import ProviderLayout from './shared/layout/ProviderLayout';

/* ===================================================================== */
/*
🧩 APP - Main App Component
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

const App: React.FC<Props> = ({ className }) => {
     return (
          <ProviderLayout>
               <AppLayout
                    className={twMerge('view-screen bg-background overflow-hidden', className)}
               />
          </ProviderLayout>
     );
};

export default App;
