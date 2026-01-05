// 📦 LIBRARIES IMPORT
import GenButton from '@/shared/components/Button/GenButton';
import { allDataSelector } from '@/shared/store/selectors';
import { useAppSelector } from '@/shared/store/store';
import { Download } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 DOWNLOAD - Operations to download the json files of the application.
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

const NAV_Download: React.FC<Props> = ({ className }) => {
     const allData = useAppSelector(allDataSelector);

     const downloadJson = () => {
          const jsonText = JSON.stringify(allData, null, 2);
          const blob = new Blob([jsonText], { type: 'application/json' });
          const url = URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = 'my_quest_data.json';
          a.click();
          URL.revokeObjectURL(url);
     };
     return (
          <div className={twMerge('p-2', className)}>
               <GenButton
                    className="view-full"
                    label="Download Data"
                    Icon={Download}
                    onClick={downloadJson}
               />
          </div>
     );
};

export default NAV_Download;
