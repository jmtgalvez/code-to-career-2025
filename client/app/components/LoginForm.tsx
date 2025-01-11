'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FormField } from './ui/form';

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z
    .string()
    .min(12)
    .refine((password) => /[A-Z]/.test(password), {
      message: 'Must contain upper case letter',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'Must contain lower case letter',
    })
    .refine((password) => /[0-9]/.test(password), {
      message: 'Must contain a number',
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: 'Must contain a special character',
    }),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      className='max-w-96 border border-black p-4 rounded-md'
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <h1 className='text-xl font-bold'>Sign In</h1>
      <form action=''>
        <FormField
          label='User'
          name='user'
        />
        <FormField
          label='Password'
          name='password'
          type='password'
        />
        <input
          className='p-2 font-bold text-white bg-blue-300 hover:bg-blue-500 cursor-pointer'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
}
