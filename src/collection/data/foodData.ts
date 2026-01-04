/* ===================================================================== */

import type { IDBrand } from '@/shared/types/utilTypes';
import type { FoodType } from './food.types';

export const foodData: FoodType[] = [
     {
          id: 'meal-1' as IDBrand,
          meal: 'Breakfast — Oatmeal & Fruit',
          foodList: [
               { id: 'm1f1' as IDBrand, name: 'Rolled oats', amount: '1 cup' },
               { id: 'm1f2' as IDBrand, name: 'Milk (or plant milk)', amount: '1 cup' },
               { id: 'm1f3' as IDBrand, name: 'Banana, sliced', amount: '1 medium' },
               { id: 'm1f4' as IDBrand, name: 'Honey', amount: '1 tbsp' },
          ],
     },
     {
          id: 'meal-2' as IDBrand,
          meal: 'Lunch — Grilled Chicken Salad',
          foodList: [
               { id: 'm2f1' as IDBrand, name: 'Grilled chicken breast', amount: '150 g' },
               { id: 'm2f2' as IDBrand, name: 'Mixed salad greens', amount: '2 cups' },
               { id: 'm2f3' as IDBrand, name: 'Cherry tomatoes', amount: '1/2 cup' },
               { id: 'm2f4' as IDBrand, name: 'Olive oil & lemon dressing', amount: '2 tbsp' },
          ],
     },
     {
          id: 'meal-3' as IDBrand,
          meal: 'Snack — Greek Yogurt & Nuts',
          foodList: [
               { id: 'm3f1' as IDBrand, name: 'Greek yogurt', amount: '3/4 cup' },
               { id: 'm3f2' as IDBrand, name: 'Mixed nuts (unsalted)', amount: '2 tbsp' },
               { id: 'm3f3' as IDBrand, name: 'Berries', amount: '1/2 cup' },
          ],
     },
     {
          id: 'meal-4' as IDBrand,
          meal: 'Dinner — Salmon, Quinoa & Veggies',
          foodList: [
               { id: 'm4f1' as IDBrand, name: 'Baked salmon', amount: '180 g' },
               { id: 'm4f2' as IDBrand, name: 'Quinoa (cooked)', amount: '1 cup' },
               { id: 'm4f3' as IDBrand, name: 'Steamed broccoli', amount: '1 cup' },
          ],
     },
     {
          id: 'meal-5' as IDBrand,
          meal: 'Breakfast — Avocado Toast with Egg',
          foodList: [
               { id: 'm5f1' as IDBrand, name: 'Whole grain bread', amount: '2 slices' },
               { id: 'm5f2' as IDBrand, name: 'Avocado, mashed', amount: '1/2 fruit' },
               { id: 'm5f3' as IDBrand, name: 'Poached egg', amount: '1' },
               { id: 'm5f4' as IDBrand, name: 'Chili flakes', amount: 'pinch' },
               { id: 'm5f5' as IDBrand, name: 'Chili flakes', amount: 'pinch' },
               { id: 'm5f6' as IDBrand, name: 'Chili flakes', amount: 'pinch' },
               { id: 'm5f7' as IDBrand, name: 'Chili flakes', amount: 'pinch' },
               { id: 'm5f8' as IDBrand, name: 'Chili flakes', amount: 'pinch' },
          ],
     },
     {
          id: 'meal-6' as IDBrand,
          meal: 'Lunch — Turkey & Hummus Wrap',
          foodList: [
               { id: 'm6f1' as IDBrand, name: 'Whole wheat wrap', amount: '1' },
               { id: 'm6f2' as IDBrand, name: 'Sliced turkey', amount: '100 g' },
               { id: 'm6f3' as IDBrand, name: 'Hummus', amount: '2 tbsp' },
               { id: 'm6f4' as IDBrand, name: 'Lettuce & cucumber', amount: '1/2 cup' },
          ],
     },
     {
          id: 'meal-7' as IDBrand,
          meal: 'Snack — Apple & Peanut Butter',
          foodList: [
               { id: 'm7f1' as IDBrand, name: 'Apple, sliced', amount: '1 medium' },
               { id: 'm7f2' as IDBrand, name: 'Peanut butter', amount: '1.5 tbsp' },
          ],
     },
     {
          id: 'meal-8' as IDBrand,
          meal: 'Dinner — Veggie Stir-Fry with Tofu',
          foodList: [
               { id: 'm8f1' as IDBrand, name: 'Firm tofu, cubed', amount: '150 g' },
               { id: 'm8f2' as IDBrand, name: 'Bell peppers & snap peas', amount: '2 cups' },
               { id: 'm8f3' as IDBrand, name: 'Soy-ginger sauce', amount: '2 tbsp' },
               { id: 'm8f4' as IDBrand, name: 'Brown rice (cooked)', amount: '1 cup' },
          ],
     },
     {
          id: 'meal-9' as IDBrand,
          meal: 'Breakfast — Smoothie Bowl',
          foodList: [
               { id: 'm9f1' as IDBrand, name: 'Frozen berries', amount: '1 cup' },
               { id: 'm9f2' as IDBrand, name: 'Spinach', amount: '1 cup' },
               { id: 'm9f3' as IDBrand, name: 'Almond milk', amount: '3/4 cup' },
               { id: 'm9f4' as IDBrand, name: 'Granola topping', amount: '2 tbsp' },
          ],
     },
     {
          id: 'meal-10' as IDBrand,
          meal: 'Dinner — Pasta Primavera',
          foodList: [
               { id: 'm10f1' as IDBrand, name: 'Whole grain pasta', amount: '1.5 cups (cooked)' },
               { id: 'm10f2' as IDBrand, name: 'Zucchini & cherry tomatoes', amount: '1.5 cups' },
               { id: 'm10f3' as IDBrand, name: 'Parmesan', amount: '2 tbsp' },
               { id: 'm10f4' as IDBrand, name: 'Olive oil', amount: '1 tbsp' },
          ],
     },
];
