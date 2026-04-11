import { cache } from 'react';

export const checkUserLoggedIn = cache(async () => {
  // const userId = (await cookies()).get('user_id')?.value;
  // return userId;

  return true;
});
