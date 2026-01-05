// 📦 LIBRARIES IMPORT
import { LogOut } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import usePageNav from '../hooks/usePageNav';
import { useModal } from '@/shared/context/useModal';
import ConfirmModal from '@/shared/components/Modal/ConfirmModal';

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

const NAV_Logout: React.FC<Props> = ({ className }) => {
     const { setLogin } = usePageNav();
     const { openModal } = useModal();

     return (
          <div
               className={twMerge(
                    'flex items-center gap-1',
                    'border-stroke border-t-2 px-3 py-2',
                    'cursor-pointer',
                    className
               )}
               onClick={() =>
                    openModal(
                         <ConfirmModal
                              message="Are you sure you want to logout? Make sure to download data first"
                              onConfirm={() => setLogin(false)}
                         />
                    )
               }
          >
               <LogOut className="text-sec-text h-6 w-6" strokeWidth={3} />
               <p className="text-sec-text text-sm tracking-tight">Logout</p>
          </div>
     );
};

export default NAV_Logout;
