/* ===================================================================== */

import type { IDBrand } from '@/shared/types/utilTypes';
import type { JournalCategoryType, JournalType } from './journal.types';

export const journalData: JournalType[] = [
     {
          id: 'JOR001' as IDBrand,
          date: 1717200000000, // 2024-06-01T00:00:00.000Z
          categoryId: 'JORCAT003' as IDBrand,
          subject: 'My First Journal Entry',
          content: 'Today I started my journaling journey. Feeling excited!',
     },
     {
          id: 'JOR002' as IDBrand,
          date: 1717286400000,
          categoryId: 'JORCAT002' as IDBrand,
          subject: 'Grateful Moments',
          content: 'Noticed small acts of kindness today and felt thankful.',
     },
     {
          id: 'JOR003' as IDBrand,
          date: 1717372800000,
          categoryId: 'JORCAT001' as IDBrand,
          subject: 'A Bit Anxious',
          content: 'Anxiety crept in during the afternoon; practiced deep breathing.',
     },
     {
          id: 'JOR004' as IDBrand,
          date: 1717459200000,
          categoryId: 'JORCAT003' as IDBrand,
          subject: 'Random Thoughts',
          content: 'Brainstormed a few project ideas and sketched rough outlines.',
     },
     {
          id: 'JOR005' as IDBrand,
          date: 1717545600000,
          categoryId: 'JORCAT002' as IDBrand,
          subject: 'Nature Walk',
          content: 'Enjoyed a quiet walk in the park and appreciated the fresh air.',
     },
     {
          id: 'JOR006' as IDBrand,
          date: 1717632000000,
          categoryId: 'JORCAT001' as IDBrand,
          subject: 'Tired but Content',
          content: 'Long day at work, felt exhausted yet satisfied with progress.',
     },
     {
          id: 'JOR007' as IDBrand,
          date: 1717718400000,
          categoryId: 'JORCAT003' as IDBrand,
          subject: 'Creative Burst',
          content: 'Wrote a short poem and experimented with a new melody.',
     },
     {
          id: 'JOR008' as IDBrand,
          date: 1717804800000,
          categoryId: 'JORCAT002' as IDBrand,
          subject: 'Supportive Friends',
          content: 'Had a heartfelt conversation with a friend; grateful for support.',
     },
     {
          id: 'JOR009' as IDBrand,
          date: 1717891200000,
          categoryId: 'JORCAT001' as IDBrand,
          subject: 'Restless Evening',
          content: 'Couldn’t sleep well; reflected on what might be causing restlessness.',
     },
     {
          id: 'JOR010' as IDBrand,
          date: 1717977600000,
          categoryId: 'JORCAT003' as IDBrand,
          subject: 'Learning Notes',
          content: 'Tried a new coding pattern and documented lessons learned.',
     },
     {
          id: 'JOR011' as IDBrand,
          date: 1718064000000,
          categoryId: 'JORCAT002' as IDBrand,
          subject: 'Simple Joys',
          content: 'Delighted by a good cup of coffee and a sunny window seat.',
     },
     {
          id: 'JOR012' as IDBrand,
          date: 1718150400000,
          categoryId: 'JORCAT001' as IDBrand,
          subject: 'Motivated',
          content: 'Felt motivated to tackle a challenging task and made steady progress.',
     },
     {
          id: 'JOR013' as IDBrand,
          date: 1718236800000,
          categoryId: 'JORCAT003' as IDBrand,
          subject: 'Weekend Plans',
          content: 'Planning a short trip and listing places to visit and things to pack.',
     },
     {
          id: 'JOR014' as IDBrand,
          date: 1718323200000,
          categoryId: 'JORCAT002' as IDBrand,
          subject: 'Family Time',
          content: 'Spent quality time with family and enjoyed meaningful conversations.',
     },
     {
          id: 'JOR015' as IDBrand,
          date: 1718409600000,
          categoryId: 'JORCAT001' as IDBrand,
          subject: 'Reflective Night',
          content: 'Meditated on personal goals and adjusted a few priorities.',
     },
     {
          id: 'JOR016' as IDBrand,
          date: 1718496000000,
          categoryId: 'JORCAT003' as IDBrand,
          subject: 'Project Progress',
          content: 'Made a breakthrough in a side project and documented next steps.',
     },
];

export const JournalCategoryData: JournalCategoryType[] = [
     {
          id: 'JORCAT001' as IDBrand,
          name: 'feelings',
          guideQuestion: 'How are you feeling today?',
     },
     {
          id: 'JORCAT002' as IDBrand,
          name: 'appreciation',
          guideQuestion: 'What are you grateful for today?',
     },
     {
          id: 'JORCAT003' as IDBrand,
          name: 'freestyle',
          guideQuestion: "What's on your mind today?",
     },
];
