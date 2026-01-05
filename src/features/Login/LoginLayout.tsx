// 📦 LIBRARIES IMPORT
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import useLoadData from './hooks/useLoadData';
import usePageNav from '../NavBar/hooks/usePageNav';

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
     const [error, setError] = useState<string | null>(null);

     const { loadExerciseData, loadFoodData, loadJournalData, loadCodingData, loadLevelData } =
          useLoadData();
     const { setLogin } = usePageNav();

     const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setError(null);
          const file = event.target.files?.[0];
          if (!file) return;

          const reader = new FileReader();

          reader.onload = () => {
               try {
                    const text = String(reader.result);
                    const parsed = JSON.parse(text);

                    loadExerciseData(parsed.exercise);
                    loadFoodData(parsed.food);
                    loadJournalData(parsed.journal);
                    loadCodingData(parsed.coding);
                    loadLevelData(parsed.level);
                    setLogin(true);
               } catch {
                    setError('Invalid JSON file.');
               }
          };

          reader.onerror = () => {
               setError('Error reading file.');
          };
          reader.readAsText(file);

          event.target.value = '';
     };

     return (
          <div
               className={twMerge(
                    'view-screen flex-center flex-col gap-2',
                    'bg-background',
                    className
               )}
          >
               <div
                    className={twMerge(
                         'border-stroke bg-card overflow-hidden rounded-lg border-2 px-4 py-2',
                         className
                    )}
               >
                    <input
                         type="file"
                         accept=".json,application.json"
                         className="cursor-pointer"
                         onChange={onFileChange}
                    />
               </div>
               {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>
     );
};

export default LoginLayout;
