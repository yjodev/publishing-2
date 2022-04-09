import React from 'react';
import { TextField } from '../components/TextField';

export const LoginPage = () => {
  return <div className="m-4 space-y-20">
    <div className=' text-3xl font-bold'>로그인</div>

    <div className="space-y-4">
      <TextField label="이메일" placeholder="이메일을 입력해주세요."/>
      <TextField label="비밀번호" placeholder="비밀번호를 입력해주세요." type="password"/>
    </div>

    <div >
      <div className='bg-gray-800 text-white text-center rounded-md py-4'>로그인</div>
      <div className='text-center py-4 text-gray-800 border border-gray-800 rounded-md mt-2'>회원가입</div>
    </div>
  </div>;
};
