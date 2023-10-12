import React, { useContext, useState } from 'react';
import "./Delivery.css"
import { Box, Button, Heading, Input, Radio, RadioGroup, Text } from '@chakra-ui/react';
import PaymentCard from './PaymentCard';
import { useSelector,useDispatch } from 'react-redux';
import { storePaymentInfo } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
import { Cod } from './Cod';
import { AuthContent } from '../../AuthContent/AuthContentProvider';

  const PaymentPage = () => {
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [paymentInfo,setPaymentInfo]=useState({
    country:'',
    city:'',
    zip_code:'',
    address:''
  
  })
  const [value, setValue] = useState('1')
  const {total,setCartItems,cartItems,setStore}=useContext(AuthContent);

  const handlePaymentMethodChange = (newValue) => {
    setValue(newValue);
  }
  const handleOrder = () => {
    if (
      paymentInfo.country.trim() === '' ||
      paymentInfo.city.trim() === '' ||
      paymentInfo.zip_code.trim() === '' ||
      paymentInfo.address.trim() === ''
    ) {
      alert('Please fill in all the fields');
      return;
    }
  
    // Store payment information
    dispatch(storePaymentInfo(paymentInfo));
  
    // Clear the cart items
    setStore([]);
  
    // Navigate to the "thankyoupage"
    navigate('/thankyoupage');
  };
  

  return (
    <Box className='abid-payment-container'>
      <Box className='pyment-head-abid'> <Heading fontSize={'3xl'} color={'gray.600'}>Payment page</Heading> </Box>
      <Box className='payment-inner-abid'>
        {/* left */}
        <Box className='payment-left'  width="45%">
          <Box className='payment-left-first' h="40%">
            <Input placeholder='State' name='country' value={paymentInfo.country} onChange={(e)=>setPaymentInfo({...paymentInfo,[e.target.name]:e.target.value})}/>
            <Input placeholder='City' name='city' value={paymentInfo.city}  onChange={(e)=>setPaymentInfo({...paymentInfo,[e.target.name]:e.target.value})} />
          </Box>
          <Box className='payment-left-sec' h="60%" >
            <Text fontSize={['sm','sm', 'md', 'xl']}>Payment Method</Text>
            <RadioGroup onChange={handlePaymentMethodChange} value={value} display={'flex'} flexDirection={'column'}>
              <Radio   colorScheme='orange' value='1'> <Text fontSize={["sm" ,"sm","sm","md"]}> Pay on Delivery</Text></Radio>
              <Radio colorScheme='orange' value='2'> <Text fontSize={["sm" ,"sm","sm","md"]}> Pay by Card </Text></Radio>
            </RadioGroup>
          </Box>
        </Box>

        {/* right */}
        <Box className='payment-right'  width="45%">
          <Box className='payment-right-first'  h="40%">
            <Input placeholder='Zip Code' name='zip_code' value={paymentInfo.zip_code}  onChange={(e)=>setPaymentInfo({...paymentInfo,[e.target.name]:e.target.value})}/>
            <Input placeholder='Address' name='address' value={paymentInfo.address}  onChange={(e)=>setPaymentInfo({...paymentInfo,[e.target.name]:e.target.value})}/>
          </Box>

          <Box  margin={'auto'}  h={'20%'}>{value==='2' ? <PaymentCard/>:<Cod/>}</Box>
         
       
          <Box className='payment-sec' mt={'10px'} h="40%">
            <hr />
       <Box ><Text id='inner-text'>SubTotal</Text><Text id='inner-text'>${total?total-15:"0"}</Text></Box>
       <Box> <Text id='inner-text'>Shipping</Text><Text id='inner-text'>$15</Text></Box>
       <Box> <Text id='inner-text'>Total</Text><Text id='inner-text'>${total?total:'0'}</Text></Box>
      </Box> 
        
        </Box>
      </Box>
      <Box className='payment-next-btn'>
        <Button id='payment-btn' onClick={handleOrder}>
          Order
        </Button>
      </Box>
   
    </Box>
  );

  }
  export default PaymentPage;