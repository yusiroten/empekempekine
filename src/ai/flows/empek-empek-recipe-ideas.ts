'use server';
/**
 * @fileOverview Empek-Empek recipe idea generator.
 *
 * - generateRecipeIdea - A function that generates Empek-Empek recipe ideas.
 * - RecipeIdeaInput - The input type for the generateRecipeIdea function.
 * - RecipeIdeaOutput - The return type for the generateRecipeIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeIdeaInputSchema = z.object({
  trend: z
    .string()
    .describe('The current food trend or seasonal availability.'),
});
export type RecipeIdeaInput = z.infer<typeof RecipeIdeaInputSchema>;

const RecipeIdeaOutputSchema = z.object({
  recipeName: z.string().describe('The name of the Empek-Empek recipe.'),
  ingredients: z.string().describe('The ingredients required for the recipe.'),
  instructions: z.string().describe('The instructions to prepare the recipe.'),
  sideDishSuggestion: z
    .string()
    .describe('Suggestion of a side dish that goes well with the recipe.'),
});
export type RecipeIdeaOutput = z.infer<typeof RecipeIdeaOutputSchema>;

export async function generateRecipeIdea(input: RecipeIdeaInput): Promise<RecipeIdeaOutput> {
  return generateRecipeIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'empekEmpekRecipeIdeaPrompt',
  input: {schema: RecipeIdeaInputSchema},
  output: {schema: RecipeIdeaOutputSchema},
  prompt: `You are an expert chef specializing in Empek-Empek Palembang variations.

You will use the current trend or seasonal availability to create a unique Empek-Empek recipe.

Current Trend/Seasonal Availability: {{{trend}}}

Consider the current trend or seasonal availability to create a new Empek-Empek recipe.
Include a suggestion for a side dish that complements the recipe.

Recipe Name:
Ingredients:
Instructions:
Side Dish Suggestion: `,
});

const generateRecipeIdeaFlow = ai.defineFlow(
  {
    name: 'generateRecipeIdeaFlow',
    inputSchema: RecipeIdeaInputSchema,
    outputSchema: RecipeIdeaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
