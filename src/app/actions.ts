'use server';

import { answerCustomerInquiries as answerCustomerInquiriesFlow, type AnswerCustomerInquiriesInput } from '@/ai/flows/answer-customer-inquiries';
import { z } from 'zod';

const AnswerCustomerInquiriesInputSchema = z.object({
  query: z.string().min(1, "Query cannot be empty."),
});

export async function answerCustomerInquiries(input: AnswerCustomerInquiriesInput) {
  const parsedInput = AnswerCustomerInquiriesInputSchema.safeParse(input);

  if (!parsedInput.success) {
    throw new Error(parsedInput.error.format()._errors.join(', '));
  }
  
  // You can add validation, authentication, or other server-side logic here.
  
  const result = await answerCustomerInquiriesFlow(parsedInput.data);
  return result;
}
