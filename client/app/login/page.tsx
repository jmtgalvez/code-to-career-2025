import { redirect } from 'next/navigation';
import { FormField } from '../components/ui/form';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  'use server';
  const credentials = {
    user: formData.get('user'),
    password: formData.get('password'),
  };

  if (credentials.user == 'Admin' && credentials.password == '@dm!N2025') {
    const cookieStore = await cookies();
    cookieStore.set('authToken', '123456789');
    return redirect('/homepage');
  }
}

export default function LoginPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-96 p-4 bg-white/15 rounded-md'>
        <h1 className='w-full text-center font-bold text-2xl'>Sign in</h1>
        <form
          className='grid gap-2'
          action={login}
        >
          <FormField
            label='User'
            name='user'
          />
          <FormField
            label='Password'
            name='password'
            type='password'
          />
          <button
            type='submit'
            className='bg-white/50 p-2 font-bold hover:bg-white/70'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
