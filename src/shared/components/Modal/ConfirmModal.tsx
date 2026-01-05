// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import GenButton from '../Button/GenButton';
import { useModal } from '@/shared/context/useModal';

/* ===================================================================== */
/*
🧩 CONFIRM MODAL - Modal for Confirm action
📶 INPUTS
    - 🎯 onConfirm - Confirm Action for the Modal
    - 🎯 onCancel - Closing the modal without action
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     onConfirm: () => void;
     message: string;
     title?: string;
}

const ConfirmModal: React.FC<Props> = ({ className, onConfirm, message, title = 'Confirm' }) => {
     const { closeModal } = useModal();
     return (
          <div className={twMerge('flex flex-col gap-4', 'p-4', className)}>
               <div className="flex flex-col gap-1">
                    <p className="text-2xl leading-none font-bold">{title}</p>
                    <p className="text-sm">{message}</p>
               </div>
               <div className="flex-center flex justify-between">
                    <GenButton
                         label="Cancel"
                         onClick={() => {
                              closeModal();
                         }}
                    />
                    <GenButton
                         label="Confirm"
                         onClick={() => {
                              onConfirm();
                              closeModal();
                         }}
                    />
               </div>
          </div>
     );
};

export default ConfirmModal;
