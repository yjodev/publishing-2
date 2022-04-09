import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return <div className="m-4 space-y-10">
    
          <div className='text-3xl font-bold '>회원가입</div>

          <div className="space-y-4">
            <TextField label="이름" placeholder="이름을 입력해주세요."/>
            <TextField label="이메일" placeholder="이메일을 입력해주세요."/>
            <TextField label="비밀번호" placeholder="비밀번호를 입력해주세요."/>
            <TextField label="비밀번호 재입력" placeholder="비밀번호를 재입력해주세요."/>
          </div>

          <div>
            <div className='text-center py-4 text-gray-800 border border-gray-800 rounded-md'>회원가입</div>
          </div>
  </div>;
};