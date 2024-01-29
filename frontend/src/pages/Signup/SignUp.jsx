import React, { useState, useEffect } from 'react';
import { verifyEmail, verifyPassword, verifyUsername } from './utils';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [errorCode, setErrorCode] = useState([1, 1, 1,1]);

  const handleEmailChange = (target) => {
    if (!verifyEmail(target)) {
      let tempArray = [...errorCode];
      tempArray[0] = 1;
      setErrorCode(tempArray);
    } else {
      let tempArray = [...errorCode];
      tempArray[0] = 0;
      setEmail(target);
    }
  };

  const handlePasswordChange = (target) => {
    if (!verifyPassword(target)) {
      let tempArray = [...errorCode];
      tempArray[1] = 1;
      setErrorCode(tempArray);
    } else {
      let tempArray = [...errorCode];
      tempArray[1] = 0;
      setPass(target);
    }
  };

  const handleRePasswordChange = (target) => {
    if (pass !== target) {
      let tempArray = [...errorCode];
      tempArray[2] = 1;
      setErrorCode(tempArray);
    } else {
      let tempArray = [...errorCode];
      tempArray[2] = 0;
      setErrorCode(tempArray);
    }
  };

  const handleUserChange = (target) => {
    if(!verifyUsername(target)){
      let tempArray = [...errorCode];
      tempArray[3] = 1;
      setErrorCode(tempArray);
    }else{
      let tempArray = [...errorCode];
      tempArray[3] = 0;
      setErrorCode(tempArray);
      setUser(user)
    }
  }

  useEffect(() => {
    // Clear errors when the corresponding input fields change in a valid way
    setErrorCode(Array(4).fill(0));
  }, [email, pass, rePass, user])


  const onSubmit = (e) => {
    e.preventDefault()
    if(errorCode.every(element => element !==1)){
      console.log("the data is valid")
    }else{
      console.log("The data is not valid")
    }
  }

  return (
    <div>
      <span>
        {errorCode[0] == 1 && <p>Enter a valid email</p>}
        {errorCode[1] == 1 && <p>Enter a valid password, should contain both upper case lower case and 6 characters</p>}
        {errorCode[3] == 1 && <p>Enter a valid Username</p>}
        {errorCode[2] == 1 && <p>Pass dont match</p>}

      </span>
      <form action="" method="post" className='flex flex-col justify-center items-center gap-10 p-5 w-full bg-[#45187f]'>
          <input type="email" name="email" id="email"  placeholder='Email' onChange={e => handleEmailChange(e.target.value)} className='py-1 px-5'/>
          <input type="text" name="username" id="username"  placeholder='Username' onChange={e => handleUserChange(e.target.value)} className='py-1 px-5'/>
          <input type="password" name="password" id="password"  placeholder='Password' onChange={e => handlePasswordChange(e.target.value)} className='py-1 px-5'/>
          <input type="password" name="password" id="password"  placeholder='Re-Enter the password' onChange={e => handleRePasswordChange(e.target.value)} className='py-1 px-5'/>
          <input type="submit" onClick={(e) => onSubmit(e)} className='py-1 px-5 bg-[#1c0a33] text-white cursor-pointer' />
      </form>
    </div>
  )
}

export default SignUp
