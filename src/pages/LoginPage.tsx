import React, { useState } from 'react';
import { TextField } from '../components/TextField';
import data from "../db/data.json"
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { replace } = useHistory();


  const users = data.users;

  const checkUser = () => {
    if (email === '' || password === '') {
      alert('아이디와 비밀번호를 입력해주세요');
      return;
    } 


    for(let i=0 ; i<users.length ; i++) {
      if (email === users[i].email && password === users[i].password) {
        alert("로그인 성공");
        replace('/'); // 현재 상위 페이지를 대체
        return;
      } else if ( email === users[i].email && password !== users[i].password ){
          alert('비밀번호가 틀립니다');
          return;
        }
      }
    }
    alert("로그인 실패");
  

  return <div className="m-4 space-y-20">
    <div className=' text-3xl font-bold'>로그인</div>

    <div className="space-y-4">
      <TextField 
      label={"이메일"} 
      placeholder="이메일을 입력해주세요."
      value={email}
      onChange={(event) => {
          setEmail(event.target.value);
          }}
          />
      <TextField 
        label={"비밀번호"} 
        placeholder="비밀번호를 입력해주세요." 
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
          }}
        type="password"
      />
    </div>

    <div >
      <div 
      className='bg-gray-800 text-white text-center rounded-md py-4' 
      onClick={() => {
        checkUser();
      }}>
        로그인</div>
      <div 
      className='text-center py-4 text-gray-800 border border-gray-800 rounded-md mt-2'>회원가입</div>
    </div>
  </div>;
};
