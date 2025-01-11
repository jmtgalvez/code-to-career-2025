'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  'use server';
  const credentials = {
    user: formData.get('user'),
    password: formData.get('password'),
  };

  if (
    credentials.user == process.env.ADMIN_USER &&
    credentials.password == process.env.ADMIN_PASSWORD
  ) {
    const cookieStore = await cookies();
    cookieStore.set('authToken', '123456789');
    return redirect('/homepage');
  }
}
