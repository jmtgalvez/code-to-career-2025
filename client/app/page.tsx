import { FormField } from './components/ui/form';
import { login } from './lib/server_actions';

export default function LoginPage() {
  return (
    <div className='w-full h-screen rounded flex items-center justify-center'>
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
            className='bg-green-500 rounded-lg hover:bg-green-300 p-2 font-bold text-black'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
