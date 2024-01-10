'use client';

import React, { useTransition } from 'react';
import Lottie from 'lottie-react';
import profile from '@/public/images/profile.json';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ImSpinner } from 'react-icons/im';

const Register = () => {
  const [loading, startTransitions] = useTransition();
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleRegisterSubmit = async data => {
    // e.preventDefault();
    // const formData = new FormData(e.target);
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    // add toaster to tell user to login
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='w-30 mr-8 rounded-md text-foreground border-2 border-muted bg-primary
        px-8 py-2 font-medium transition hover:border-primary/50 hover:bg-primary/50 '
        >
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[60rem] grid grid-cols-2'>
        <Lottie animationData={profile} loop={true} />

        <div className='flex w-full flex-col py-5 pr-32'>
          <form
            onSubmit={() => {
              startTransitions();
              handleRegisterSubmit();
            }}
            className='flex w-80 flex-col justify-center '
          >
            <Label htmlFor='name' className=' text-lg font-semibold'>
              Name
            </Label>
            <Input
              id='name'
              name='name'
              placeholder='enter name'
              className='mt-6 h-12 w-full cursor-pointer rounded-md bg-muted/50 px-10 text-sm focus:outline-none'
              {...register('name')}
            />
            <Label htmlFor='email' className='mt-12 text-lg font-semibold'>
              Email
            </Label>
            <Input
              id='email'
              name='email'
              placeholder='email address'
              className='mt-6 h-12 w-full cursor-pointer rounded-md bg-muted/50 px-10 text-sm focus:outline-none'
              {...register('email')}
            />
            <Label htmlFor='password' className='mt-12 text-lg font-semibold'>
              Password
            </Label>
            <Input
              id='password'
              name='password'
              placeholder='enter password'
              className='mt-6 h-12 w-full cursor-pointer rounded-md bg-muted/50 px-10 text-sm focus:outline-none'
              {...register('password')}
            />
            <Label htmlFor='password' className='mt-12 text-lg font-semibold'>
              Confirm Password
            </Label>
            <Input
              id='password'
              placeholder='confirm password'
              className='mt-6 h-12 w-full cursor-pointer rounded-md bg-muted/50 px-10 text-sm focus:outline-none'
            />
            <DialogFooter>
              <Button
                disabled={loading}
                type='button'
                onClick={() => {
                  startTransitions(handleSubmit(handleRegisterSubmit));
                }}
                className=' w-80 mt-14 pb-10 h-12 rounded-lg border-2 border-primary bg-primary px-8 py-2 font-semibold text-accent hover:text-muted-foreground shadow-md transition hover:border-primary hover:bg-muted'
              >
                {loading && <ImSpinner className='animate-spin mr-3' />}
                Register
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
