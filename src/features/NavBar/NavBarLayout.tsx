// 📦 LIBRARIES IMPORT

// 🧩 COMPONENT IMPORT
import { twMerge } from 'tailwind-merge';
import NAV_AppLogo from './containers/NAV_AppLogo';
import NAV_NavItemList from './containers/NAV_NavItemList';
import NAV_Logout from './containers/NAV_Logout';
import NAV_Download from './containers/NAV_Download';

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
               <NAV_Download />
               <NAV_Logout />
          </div>
     );
};

export default NavBarLayout;
