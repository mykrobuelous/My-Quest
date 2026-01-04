// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import { Toaster } from 'react-hot-toast';

// 🧪 UTILITY IMPORT
import { useAppSelector } from '../store/store';
import { navState } from '../store/reducers/navReducer';

// 🧩 COMPONENT IMPORT
import LevelLayout from '@/features/Level/LevelLayout';
import ExerciseLayout from '@/features/Exercise/ExerciseLayout';
import NavBarLayout from '@/features/NavBar/NavBarLayout';
import FoodLayout from '@/features/Food/FoodLayout';
import CodingLayout from '@/features/Coding/CodingLayout';
import JournalLayout from '@/features/Journal/JournalLayout';
import HomeLayout from '@/features/Home/HomeLayout';
import LoginLayout from '@/features/Login/LoginLayout';

/* ===================================================================== */
/*
🧱 APP LAYOUT - Main App Layout where pathing exist
📚 CONTENT
    1. 
*/

interface Props {
     className?: string;
}

const AppLayout: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const { pageNav, login } = useAppSelector(navState);

     const renderPage = () => {
          switch (pageNav) {
               case 'level':
                    return <LevelLayout />;
               case 'exercise':
                    return <ExerciseLayout />;
               case 'food':
                    return <FoodLayout />;
               case 'coding':
                    return <CodingLayout />;
               case 'journals':
                    return <JournalLayout />;
               default:
                    return <HomeLayout />;
          }
     };

     return login ? (
          <div className={twMerge('flex', className)}>
               <NavBarLayout className="border-stroke border-2" />
               <div className="flex-1">{renderPage()}</div>
               <Toaster position="top-center" />
          </div>
     ) : (
          <LoginLayout />
     );
};

export default AppLayout;
