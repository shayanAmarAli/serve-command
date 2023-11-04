// "use client"
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';

// type FormData = {
//   name: string;
//   email: string;
//   password: string;
// };

// export default function Form() {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

//   const onSubmit = async (data: FormData) => {
//     (data.email && data.name && data.password) ? console.log(data) : alert("Fields are empty") 
    
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="name">Name</label>
//       <input type="text" id="name" {...register('name')} />
//       {errors.name && <p>{errors.name.message}</p>}

//       <label htmlFor="email">Email</label>
//       <input type="email" id="email" {...register('email')} />
//       {errors.email && <p>{errors.email.message}</p>}

//       <label htmlFor="password">Password</label>
//       <input type="password" id="password" {...register('password')} />
//       {errors.password && <p>{errors.password.message}</p>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function Form() {
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!data.name) {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }

    if (!data.email) {
      setEmailError('Email is required');
      return;
    } else {
      setEmailError('');
    }

    if (!data.password) {
      setPasswordError('Password is required');
      return;
    } else {
      setPasswordError('');
    }

    console.log(data);
        reset();

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"  {...register('name')} />
      {nameError && <p>{nameError}</p>}

      <label htmlFor="email">Email</label>
      <input type="email" id="email"  {...register('email')} />
      {emailError && <p>{emailError}</p>}

      <label htmlFor="password">Password</label>
      <input type="password" id="password"  {...register('password')}
      className={`${passwordError && "bg-red-200"}`} />
      {passwordError && <p className='text-red-300'>{passwordError}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}