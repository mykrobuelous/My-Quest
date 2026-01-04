// 📦 LIBRARIES IMPORT

// 🧩 COMPONENT IMPORT
import { twMerge } from 'tailwind-merge';
import NAV_AppLogo from './containers/NAV_AppLogo';
import NAV_NavItemList from './containers/NAV_NavItemList';
import NAV_Accounts from './containers/NAV_Accounts';

/* ===================================================================== */
/*
🧩 NAVBAR - Navbar of the application to the left
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

const NavBarLayout: React.FC<Props> = ({ className }) => {
     return (
          <div className={twMerge('flex flex-col', 'h-full w-50', className)}>
               <NAV_AppLogo />
               <NAV_NavItemList />
               <NAV_Accounts />
          </div>
     );
};

export default NavBarLayout;
