// 📦 LIBRARIES IMPORT
import { Provider } from 'react-redux';
import store from '../store/store';
import ModalProvider from '../context/ModalProvider';

/* ===================================================================== */
/*
🧱 PROVIDER LAYOUT - Adds the providers to the Application
📚 CONTENT
    1. 
*/

interface Props {
     children: React.ReactNode;
}

const ProviderLayout: React.FC<Props> = ({ children }) => {
     return (
          <Provider store={store}>
               <ModalProvider>{children}</ModalProvider>
          </Provider>
     );
};

export default ProviderLayout;
