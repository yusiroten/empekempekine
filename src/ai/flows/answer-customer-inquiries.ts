'use server';

/**
 * @fileOverview An AI agent to answer customer inquiries about Empek-Empek products.
 *
 * - answerCustomerInquiries - A function that answers customer inquiries.
 * - AnswerCustomerInquiriesInput - The input type for the answerCustomerInquiries function.
 * - AnswerCustomerInquiriesOutput - The return type for the answerCustomerInquiries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerCustomerInquiriesInputSchema = z.object({
  query: z.string().describe('The customer inquiry.'),
});
export type AnswerCustomerInquiriesInput = z.infer<typeof AnswerCustomerInquiriesInputSchema>;

const AnswerCustomerInquiriesOutputSchema = z.object({
  answer: z.string().describe('The answer to the customer inquiry.'),
});
export type AnswerCustomerInquiriesOutput = z.infer<typeof AnswerCustomerInquiriesOutputSchema>;

export async function answerCustomerInquiries(input: AnswerCustomerInquiriesInput): Promise<AnswerCustomerInquiriesOutput> {
  return answerCustomerInquiriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerCustomerInquiriesPrompt',
  input: {schema: AnswerCustomerInquiriesInputSchema},
  output: {schema: AnswerCustomerInquiriesOutputSchema},
  prompt: `You are a customer service representative for Empek-Empek Palembang by Ine Sartika Sari.
  Use the following information to answer customer inquiries about Empek-Empek products.

  Product Information:
  Empek-Empek Palembang by Ine Sartika Sari offers a variety of delicious Empek-Empek products made with high-quality ingredients.
  We have Lenjer, Adaan, Kulit, and Telur Empek-Empek available.
  Our prices range from Rp. 5.000 to Rp. 10.000 per piece, depending on the type.
  We also offer combo packages with a mix of different Empek-Empek.
  
  Frequently Asked Questions:
  Q: What are the ingredients?
  A: Our Empek-Empek is made from fresh fish, tapioca flour, and a blend of spices.
  Q: How long does shipping take?
  A: Shipping usually takes 1-3 days, depending on your location.
  Q: Do you offer discounts for bulk orders?
  A: Yes, we offer discounts for orders over 100 pieces. Please contact us for more details.
  Q: How should I store Empek-Empek?
  A: You can store Empek-Empek in the refrigerator for up to 3 days or in the freezer for longer storage.

  Inquiry: {{{query}}}
  `,
});

const answerCustomerInquiriesFlow = ai.defineFlow(
  {
    name: 'answerCustomerInquiriesFlow',
    inputSchema: AnswerCustomerInquiriesInputSchema,
    outputSchema: AnswerCustomerInquiriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
