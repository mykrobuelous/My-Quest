// 📦 LIBRARIES IMPORT
import GenButton from '@/shared/components/Button/GenButton';
import GenInput from '@/shared/components/Input/GenInput';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import toast from 'react-hot-toast';
import useCoding from '../hooks/useCoding';

/* ===================================================================== */
// Add the File Description Here...

interface Props {
     className?: string;
}

const COD_AddExeSection: React.FC<Props> = ({ className }) => {
     const [duration, setDuration] = useState(0);
     const [subject, setSubject] = useState('');
     const { addCoding } = useCoding();

     const clearInputsHandler = () => {
          setDuration(0);
          setSubject('');
     };

     const addEntryHandler = () => {
          if (duration > 0 && subject.trim() !== '') {
               clearInputsHandler();
               addCoding(subject.trim(), duration);
               toast.success('Coding entry added successfully!');
          } else toast.error('Please enter valid subject or duration');
     };

     return (
          <div
               className={twMerge(
                    'flex items-center gap-4',
                    'border-stroke bg-card w-fit overflow-hidden rounded-lg border-2 px-4 py-2',
                    className
               )}
          >
               <GenInput
                    className="w-50"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
               />
               <GenInput
                    className="w-20"
                    placeholder="Duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
               />

               <GenButton label="Add Entry" onClick={addEntryHandler} />
          </div>
     );
};

export default COD_AddExeSection;
