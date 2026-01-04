// 🧪 UTILITY IMPORT

import type { LevelInfoType } from '@/collection/data/level.types';

/* ===================================================================== */
/*
/* 🛠️ LEVEL UTILS - Any calculation regarding levels  */
/*
📚 CONTENT
    1. getLevelInfo - A function to get level information based on total experience points.
*/

// 🎯 GET LEVEL INFO - Get the info needed from total exp
export const getLevelInfo = (totalExp: number, baseExp = 50): LevelInfoType => {
     let level = 1;

     // find current level
     while (baseExp * (level + 1) * level <= totalExp) {
          level++;
     }

     const expToCurrent = baseExp * level * (level - 1);
     const expToNext = baseExp * (level + 1) * level;
     const currentExp = totalExp - expToCurrent;
     const expNeeded = expToNext - expToCurrent;

     return {
          level,
          totalExp,
          currentExp,
          expNeeded,
     };
};

// 🎯 CONVERT TIMESTAMP DATE - Convert TimeStamp to Date MM DD, YYYY

export const convertTimestampDate = (timestamp: number) => {
     const date = new Date(timestamp);
     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const BASE_EXP = {
     exercise: 5,
     coding: 10,
};

// 🎯 GET EXERCISE POINTS - Get points and formulizes how much points to gain per exercise.
export const getExerciseXP = (duration: number) => {
     return Math.floor(duration / BASE_EXP.exercise);
};

// 🎯 GET CODING POINTS - Points for coding
export const getCodingXP = (duration: number) => {
     return Math.floor(duration / BASE_EXP.coding);
};
