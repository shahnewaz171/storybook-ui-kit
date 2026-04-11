'use server';

import { simulateDelay } from '@/utils';

export const submitLoginForm = async (_email: string) => {
  await simulateDelay();

  //   const payload = {
  //     email: formData.get('email'),
  //     password: formData.get('password')
  //   };

  //   if (email) {
  //     unauthorized();
  //   }
};
