// 📦 LIBRARIES IMPORT
import { useState, type ReactNode } from 'react';
import { ModalContext, type ModalContent } from './ModalContext';

/* ===================================================================== */
/*
🧩 FOOD MODAL PROVIDER - Creates the provider for Food Modals
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     children: ReactNode;
}

const ModalProvider: React.FC<Props> = ({ children }) => {
     const [content, setContent] = useState<ModalContent>(null);

     const openModal = (content: ReactNode) => {
          setContent(content);
     };
     const closeModal = () => {
          setContent(null);
     };
     return (
          <ModalContext.Provider value={{ openModal, closeModal }}>
               {children}
               {content && (
                    <div
                         className="flex-center bg-background/70 fixed inset-0"
                         onClick={closeModal}
                    >
                         <div
                              className="bg-card border-stroke item-shadow w-full max-w-md rounded-xl border-2"
                              onClick={(e) => e.stopPropagation()}
                         >
                              {content}
                         </div>
                    </div>
               )}
          </ModalContext.Provider>
     );
};

export default ModalProvider;
