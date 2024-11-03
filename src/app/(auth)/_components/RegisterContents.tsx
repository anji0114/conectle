// 'use client';

// import { useCallback, useState } from 'react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import {
//   type TRegisterForm,
//   registerSchema,
// } from '@/app/(auth)/_constants/authSchema';
// import { register as signup } from '@/app/(auth)/_services/register';

// export const RegisterContents = () => {
//   const [errorMessage, setErrorMessage] = useState('');
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { isValid },
//   } = useForm<TRegisterForm>({
//     defaultValues: { password: '', email: '', username: '' },
//     resolver: zodResolver(registerSchema),
//   });

//   const onSubmit = useCallback(
//     async (value: TRegisterForm) => {
//       setErrorMessage('');
//       try {
//         await signup(value);
//       } catch (error) {
//         if (error instanceof Error) {
//           setErrorMessage(error.message);
//         } else {
//           setErrorMessage(
//             'ログインに失敗しました。再度時間を置いてからお試しください。',
//           );
//         }
//         reset({ password: '' });
//       }
//     },
//     [reset],
//   );

//   return null;
// };
