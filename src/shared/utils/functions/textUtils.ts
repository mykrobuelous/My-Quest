/* ===================================================================== */
/*
/* 🛠️ ADD_FILE_TITLE_HERE - Add_File_Description_Here */

// 🎯 CAPTIALIZE - Takes a string and capitalize it.

export const capitalize = (text: string): string => {
     if (text.length === 0) return '';
     return text.charAt(0).toUpperCase() + text.slice(1);
};
