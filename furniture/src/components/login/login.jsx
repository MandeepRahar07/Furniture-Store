import React, { useContext, useState } from 'react';
import { Button,bg, Alert} from '@chakra-ui/react';
import './Style.css';
import { AuthContent } from '../../AuthContent/AuthContentProvider';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const { arr, setNamelogin, setIsauth ,isauth} = useContext(AuthContent);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (e.g., remove the token from localStorage)
    localStorage.removeItem('token');

    // Reset user-related state
    setNamelogin('');
    setIsauth(false);

    // Redirect to the login page or any other desired page
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    try {
      const response = await fetch('https://ivory-dhole-veil.cyclic.cloud/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
        const { token } = data;
        alert('Login successful!');
        console.log('Token:', token);
        localStorage.setItem('token', token);

        // Now that you are logged in, you can fetch user data
        // Replace this URL with the endpoint that retrieves user data based on the token
        const userResponse = await fetch('https://ivory-dhole-veil.cyclic.cloud/user', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          console.log('User Data:', userData);
          const matchedUser = userData.find(user => user.email === email);

          if (matchedUser) {
            // Access the name property of the matched user
            const matchedUserName = matchedUser.name;
            console.log('Matched User Name:', matchedUserName);
            // Now you can use matchedUserName as needed, e.g., setNamelogin(matchedUserName)
            setNamelogin(matchedUserName);
            setIsauth(true);
          } else {
            console.log('No user found with the provided email.');
          }
        }

        navigate('/');
      } else {
        alert('Login failed, please recheck email and password');
        console.error('Login failed. Status:', response.status);
        const errorData = await response.json();
        console.error('Error Message:', errorData.message);
      }
    } catch (error) {
      alert('Login failed, please recheck email and password');
      console.error('Error:', error);
    }
  };

  return (
    <div className='body'>
      <div class="main_div">
      {!isauth ? (
  <>
    <div class="title">Login Form</div>
    <div class="social_icons">
      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cface%20book%20log%20in%7C&placement=&creative=589460569900&keyword=face%20book%20log%20in&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-6167883633%26loc_physical_ms%3D1007824%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwqZSlBhBwEiwAfoZUIM-tJmhVIDXIb9pn7G27SABd70_ZXYVdLQPShV47NqCJMIn6wLldoBoCUjoQAvD_BwE">
        <i class="fab fa-facebook-f"></i> <span>Facebook</span>
      </a>
      <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den">
        <i class="fab fa-twitter"></i><span>Twitter</span>
      </a>
    </div>
  </>
) : (
  ""
)}

        {isauth ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Display the logout button when the user is logged in */}
          {/* {alert("You are Already Logged In")} */}
          <h4 style={{ textAlign: 'center', color: 'gray' }}>Thank you for visiting our website! Please feel free to explore.</h4>
          <Button onClick={handleLogout} marginTop="20px" color="white" bg="#0d8bd9">
            Logout
          </Button>
        </div>
        
        ) : (
          <form onSubmit={handleSubmit}>
            <div class="input_box">
              <input type="text" placeholder="Email or Phone" name="email" required id="login_email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div class="icon"><i class="fas fa-user"></i></div>
            </div>
            <div class="input_box">
              <input type="password" placeholder="Password" required id="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
              <div class="icon"><i class="fas fa-lock"></i></div>
            </div>
            <div class="option_div">
              <div class="check_box">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div class="forget_div">
              </div>
            </div>
            <div class="input_box button">
              <input type="submit" value="Login" id="login" />
            </div>
            <div class="sign_up">
              Not a member? <Link style={{ textDecoration: "none" }} to={"/sign_up"}>SignUp Now</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
