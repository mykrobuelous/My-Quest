// 📦 LIBRARIES IMPORT

import { twMerge } from 'tailwind-merge';
import useJournal from '../hooks/useJournal';
import { BookText, ChevronLeft } from 'lucide-react';
import { useAppSelector } from '@/shared/store/store';
import { selectedJournalSelector } from '@/shared/store/selectors';
import GenInput from '@/shared/components/Input/GenInput';
import { useState } from 'react';
import GenSelect from '@/shared/components/Input/GenSelect';
import { journalState } from '@/shared/store/reducers/journalReducer';
import { capitalize } from '@/shared/utils/functions/textUtils';
import GenTextarea from '@/shared/components/Input/GenTextarea';
import GenButton from '@/shared/components/Button/GenButton';
import type { IDBrand } from '@/shared/types/utilTypes';
import toast from 'react-hot-toast';

/* ===================================================================== */
/*
🧩 JOURNAL VIEW - Place to journal and edit my journal
📶 INPUTS
    - 🎯 Back Handler - Function triggered or passed in.
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     backHandler: () => void;
}

const JOR_AddJournalView: React.FC<Props> = ({ className, backHandler }) => {
     // === 🧠 DATA HOOKS ===
     const selectedJournal = useAppSelector(selectedJournalSelector);
     const { journalCategory } = useAppSelector(journalState);

     // === 🔄 FUNCTION HOOKS ===
     const { addJournal } = useJournal();

     // === 🖥️ REACT HOOKS ===
     const [subject, setSubject] = useState<string>('');
     const [category, setCategory] = useState<IDBrand>(journalCategory[0].id);
     const [content, setContent] = useState<string>('');

     // === ⚙️ INLINE LOGIC ===
     const guideQuestion =
          journalCategory.find((catItem) => category === catItem.id)?.guideQuestion || '';

     const cannotSave =
          !selectedJournal ||
          ((selectedJournal.subject ?? '') === subject &&
               (selectedJournal.categoryId ?? '') === category &&
               (selectedJournal.content ?? '') === content);

     // === 📊 HANDLERS ===
     const addJournalHandler = () => {
          if (subject.trim() !== '' && content.trim() !== '') {
               addJournal({
                    subject: subject.trim(),
                    categoryId: category,
                    content: content.trim(),
               });
               toast.success('Journal added successfully!');
               backHandler();
          } else {
               toast.error('Please fill in all fields before saving the journal.');
          }
     };

     return (
          <div className={twMerge('flex flex-1 flex-col gap-4', className)}>
               <div className="flex cursor-pointer gap-1" onClick={backHandler}>
                    <ChevronLeft className="h-5 w-5" />
                    <p className="text-sm underline">Back Journal List</p>
               </div>
               <p className="text-2xl font-bold">Add New Journal</p>
               <div className="flex gap-4">
                    <div className="flex w-50 flex-col gap-1">
                         <p className="text-sec-text text-xs font-semibold uppercase">Subject</p>
                         <GenInput value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div className="flex w-40 flex-col gap-1">
                         <p className="text-sec-text text-xs font-semibold uppercase">Category</p>
                         <GenSelect
                              items={journalCategory.map((catItem) => {
                                   return { label: capitalize(catItem.name), value: catItem.id };
                              })}
                              value={category}
                              onChange={(e) => setCategory(e.target.value as IDBrand)}
                         />
                    </div>
               </div>
               <div className="flex w-200 flex-1 flex-col gap-2">
                    <p className="text-xl italic">{guideQuestion}</p>
                    <GenTextarea
                         className="view-full resize-none"
                         value={content}
                         onChange={(e) => setContent(e.target.value)}
                    />
               </div>
               <div
                    className={twMerge(
                         'flex gap-3',
                         'border-stroke bg-card w-fit overflow-hidden rounded-lg border-2 px-4 py-2',
                         className
                    )}
               >
                    <GenButton
                         label="Add New Journal"
                         Icon={BookText}
                         className="w-50"
                         disabled={cannotSave}
                         onClick={addJournalHandler}
                    />
               </div>
          </div>
     );
};

export default JOR_AddJournalView;
