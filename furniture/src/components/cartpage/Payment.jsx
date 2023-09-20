import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, Box, Button, Flex, FormControl, FormLabel, Grid, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, useDisclosure, useToast } from "@chakra-ui/react";
import { Heading, Container,Alert } from '@chakra-ui/react'
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { cartTotal, userInfor } from "../../redux/action";
import { AuthContent } from "../../AuthContent/AuthContentProvider";
function Payment() {
    const [promo, setPromo] = useState("")
    let navigate=useNavigate();
    let [price, setPrice] = useState(2000)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const [info, setInfo] = useState({
        lname: '',
        fname: '',
        phone: '',
        email: ''
      })
      const [cartItems, setCartItems] = useState([]);
      let dispatch=useDispatch();
      let {store,setStore,imgChair,total,setTotal}=useContext(AuthContent);
      
      

      const handleClick = () => {
        dispatch(userInfor(info))
        setInfo({ ...info, lname: '', fname: '', phone: '', email: '' })
    navigate('/Delivery')
      }
      const handleApply = () => {
        if (promo === "MANDY40") {
            let val = total * 0.4; 
            let afterPromo = Math.floor(total - val);
            setTotal(afterPromo);
            toast({
              title: 'promo aplied',
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }
          else if (promo === "MASAI60") {
            let val = total * 0.4; 
            let afterPromo = Math.floor(total - val);
            console.log(afterPromo);
            setTotal(afterPromo); 
            toast({
              title: 'promo aplied',
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
           
          }
          else{
           alert("you are able to use only two promo, MANDY40 and MASAI60")     
          }
          
          setPromo('');
      
  
        
        }

 
    return <Box background="rgb(242,242,242)"  padding= "20px" >

        <Box width= "80%" margin= "auto" >

            <p>Cart</p>
            <Heading>Your Information</Heading>
            <Box width= "100%" >
                
                    <Box mt={30} p={8}  bg={"white"} justify="space-around" borderRadius="10px">
                        <Grid   templateColumns="repeat(2,1fr)" gap="40px">
                            <Box >
                                <FormControl isRequired>
                                    <Input mt={10} name="lname" placeholder='Last name' value={info.fname} required onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })}/>
                                    <Input mt={10} name="fname" placeholder='First name' value={info.lname} onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })} />
                                     <Input mt={10} name='phone' placeholder="Phone" type="number" value={info.phone} onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })}/>
                                    <Input mt={10} name='email' type="email" placeholder='Email' value={info.email} onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })} />
                                </FormControl>
                            </Box>

                            <Box  w="100%">

                                <FormControl>
                                    <Flex gap={3}>
                                        <Box  >
                                            <FormControl isRequired>
                                            <Input mt={10} w="400px" placeholder="Promo Code"  onChange={(e) => {
                                                {
                                                    setPromo(e.target.value)
                                                    console.log(promo)
                                                }
                                            }} />
                                            </FormControl>
                                            
                                        </Box>
                                        <Box>
                                            <Button colorScheme='yellow' mt={10} onClick={handleApply}>Apply</Button>
                                            </Box>
                                    </Flex>
                                </FormControl>
                                <Heading mt="208px" mb={35} size="md">Total  __________________________________________ ${total ? total : "0"}</Heading>
                                <Box mt="60px">
                                    <Button colorScheme="red" mr="60px" float={"right"} onClick={handleClick} >Next Step</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                
            </Box>

        </Box>


    </Box>

}
export default Payment;