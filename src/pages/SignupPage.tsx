import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return <div className="m-4">
    <div className='text-3xl font-bold mb-10'>회원가입</div>

    <div>
    <TextField label="타이틀" placeholder="내용을 입력해주세요."/>
    <TextField label="타이틀" placeholder="내용을 입력해주세요."/>
    <TextField label="타이틀" placeholder="내용을 입력해주세요."/>
    <TextField label="타이틀" placeholder="내용을 입력해주세요."/>
   </div>

    <div className="mt-10">
    <div className='text-center py-4 text-gray-800 border border-gray-800 mt-2'>회원가입</div>
    </div>
  </div>;
};