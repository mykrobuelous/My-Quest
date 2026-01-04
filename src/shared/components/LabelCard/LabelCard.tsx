// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 LABEL CARD - Values with a label for EXP
📶 INPUTS
    - 🔤 Label - Label of the value
    - 🔤 Value - Value of the component 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
     className?: string;
     label: string;
     value: string | number;
}

const LabelCard: React.FC<Props> = ({ className, label, value }) => {
     return (
          <div className={twMerge('flex-center bg-card flex-col rounded-sm px-4 py-2', className)}>
               <p className="text-2xl font-semibold">{value}</p>
               <p className="text-sec-text text-[10px] font-semibold">{label}</p>
          </div>
     );
};

export default LabelCard;
