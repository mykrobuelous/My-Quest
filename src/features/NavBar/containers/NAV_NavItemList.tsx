// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import { BookText, ChartNoAxesColumn, Footprints, Home, Salad, SquareTerminal } from 'lucide-react';

// 🧩 COMPONENT IMPORT
import NAV_Items from '../components/NAV_Items';
import { useAppSelector } from '@/shared/store/store';
import { navState } from '@/shared/store/reducers/navReducer';
import usePageNav from '../hooks/usePageNav';

/* ===================================================================== */
/*
🧩 NAV ITEM LIST - Where the navigations list are.
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

const NAV_NavItemList: React.FC<Props> = ({ className }) => {
     // === 🧠 DATA HOOKS ===
     const { pageNav } = useAppSelector(navState);

     // === 🔄 FUNCTION HOOKS ===
     const { setPageNav } = usePageNav();

     return (
          <div className={twMerge('flex flex-1 flex-col gap-1', 'px-2 py-4', className)}>
               <NAV_Items
                    label="Home"
                    Icon={Home}
                    selected={pageNav === 'home'}
                    onClick={() => {
                         if (pageNav !== 'home') setPageNav('home');
                    }}
               />
               <NAV_Items
                    label="Level & Progress"
                    Icon={ChartNoAxesColumn}
                    selected={pageNav === 'level'}
                    onClick={() => {
                         if (pageNav !== 'level') setPageNav('level');
                    }}
               />
               <NAV_Items
                    label="Exercise"
                    Icon={Footprints}
                    selected={pageNav === 'exercise'}
                    onClick={() => {
                         if (pageNav !== 'exercise') setPageNav('exercise');
                    }}
               />
               <NAV_Items
                    label="Food Journals"
                    Icon={Salad}
                    selected={pageNav === 'food'}
                    onClick={() => {
                         if (pageNav !== 'food') setPageNav('food');
                    }}
               />
               <NAV_Items
                    label="Coding"
                    Icon={SquareTerminal}
                    selected={pageNav === 'coding'}
                    onClick={() => {
                         if (pageNav !== 'coding') setPageNav('coding');
                    }}
               />
               <NAV_Items
                    label="Journals"
                    Icon={BookText}
                    selected={pageNav === 'journals'}
                    onClick={() => {
                         if (pageNav !== 'journals') setPageNav('journals');
                    }}
               />
          </div>
     );
};

export default NAV_NavItemList;
