import React, {  useState } from 'react'
import './Style1.css';
// import { AuthContent } from '../../AuthContent/AuthContentProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
export const SignUp = () => {

    // const{arr,setArr,setCheck}=useContext(AuthContent)
    const[log,setLog]=useState({
      name:"",
      email:"",
      phone:"",
      password:"",
    })
    console.log(log)
    const toast = useToast()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
        email: log.email,
        password: log.password,
        name: log.name,
        phone: log.phone,
      };
      console.log(formData);
    
      // Check if the email is already registered
      const userResponse = await fetch('https://mandeeprahar.onrender.com/user', {
        method: 'GET',
      });
    
      if (userResponse.ok) {
        const userData = await userResponse.json();
        console.log('User Data:', userData);
        const matchedUser = userData.find(user => user.email === log.email);
    
        if (matchedUser) {
          toast({
            position: "top",
            title: 'Error',
            description: 'This email id is already registered. Please use another one.',
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        } else {
          try {
            const response = await fetch("https://mandeeprahar.onrender.com/sign_up", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
    
            if (response.ok) {
              toast({
                position: "top",
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 2000,
                isClosable: true,
              });
              navigate('/login');
            } else {
              console.error("Signup failed.");
              toast({
                position: "top",
                title: 'Error',
                description: 'singup failed',
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
            }
          } catch (error) {
            console.error("Error:", error);
          }
        }
      } else {
        console.error("Error fetching user data.");
      }
    };

    // const saveData =(e)=>{
    //     e.preventDefault()
    //  let logData=arr.filter((el)=>{
    //    return el.email===log.email||el.phone===log.phone
    //  })
    //  if(logData.length>=1){
    //     alert("All ready register")
    //  }else{
    //     setArr([...arr,log])

    //     alert("Successfully")
    //     setCheck(true);
    //  }
    // }
    // console.log(arr)


  return (
    <div className='body'>
    <div class="container">
    <div class="title">Registration</div>
    <div class="content">
      <form onSubmit={handleSubmit}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" id="name"name="name"value={log.name} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" id="email" name="email"value={log.email} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" name="phone"value={log.phone} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password"id="password" name="password"value={log.password} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})} />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="Confirm your password" required id="conform-password"/>
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Trans-gender</span>
            </label>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register"id="register"/>
        </div>
      </form>
      Already a member? <Link style={{textDecoration:"none"}} to={"/login"}>Login</Link>
    </div>
  </div>
  </div>
  )
}
