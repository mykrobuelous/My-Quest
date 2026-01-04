/* ===================================================================== */
/*
/* 🛠️ TIME  UTILS - Functions that involve time. 
📚 CONTENT
    1. 
*/

// 🎯 GET TIME INFO - Get minutes, days, hours from minutes

export const getTimeInfo = (
     min: number
): {
     totalDays: number;
     totalHours: number;
     totalMinutes: number;
     fullText: string;
} => {
     const totalMinutes = Math.max(0, Math.floor(min));

     // whole values for human-readable text
     const wholeHours = Math.floor(totalMinutes / 60);
     const wholeDays = Math.floor(wholeHours / 24);
     const remainingHours = wholeHours % 24;
     const remainingMinutes = totalMinutes % 60;

     // decimal totals
     const totalHours = Number((totalMinutes / 60).toFixed(2));
     const totalDays = Number((totalMinutes / (60 * 24)).toFixed(2));

     const fmt = (value: number, singular: string, plural: string) =>
          `${value} ${value === 1 ? singular : plural}`;

     const parts: string[] = [];
     if (wholeDays > 0) parts.push(fmt(wholeDays, 'd', 'ds'));
     if (remainingHours > 0) parts.push(fmt(remainingHours, 'hr', 'hrs'));
     if (remainingMinutes > 0) parts.push(fmt(remainingMinutes, 'min', 'mins'));
     if (parts.length === 0) parts.push('0 minutes');

     return {
          totalDays,
          totalHours,
          totalMinutes,
          fullText: parts.join(', '),
     };
};
