import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';

const PaymentCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [card, setCard] = useState({
    name: '',
    card: '',
    exp_date: '',
    cvv: ''
  })
  const [otp, setOtp] = useState();
  const [inputOtp, setInputOtp] = useState()

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if any input field is empty
    if (
      card.name.trim() === '' ||
      card.card.trim() === '' ||
      card.exp_date.trim() === '' ||
      card.cvv.trim() === '' ||
      inputOtp.trim() === ''
    ) {
      alert('Please fill in all the fields');
      return;
    }

    // console.log(otp);
    // console.log(inputOtp);

    if (otp === parseInt(inputOtp)) {
      alert('Card details Added');
      setIsOpen(false);
      console.log(card)
    } else {
      alert('Wrong OTP');
    }

  };



  const handleOtp = () => {
    let otp_num = Math.floor(Math.random() * (9999 - 1000) + 1000);
    alert("Otp - " + otp_num)
    setOtp(otp_num)

  }

  return (
    <div>
      <Button display={"block"} color={'white'} bg={'#ff9b0e'} size={["xs" ,"sm","sm","sm"]} borderRadius={"10px 0px 10px 0px"} onClick={handleOpenModal}>Add Card</Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size={["xs" ,"sm","sm","sm"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Card</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={handleFormSubmit}>
            <ModalBody>
              <VStack spacing={4} align="start">
                <Box>

                  <Text fontSize="sm" fontWeight="bold" mb={1}>
                    Name
                  </Text>
                  <Input
                    width='50%'
                    placeholder="Enter Name"
                    value={card.name}
                    name='name'
                    required
                    onChange={(e) => setCard({ ...card, [e.target.name]: e.target.value })}
                  />
                  <Input
                    ml={'50px'}
                    width='30%'
                    type='password'
                    placeholder="Otp"
                    paddingLeft={'40px'}
                    name='otp'
                    value={inputOtp}
                    onChange={(e) => setInputOtp(e.target.value)}
                  />
                  <Text fontSize="sm" fontWeight="bold" mb={1}>
                    Card Number
                  </Text>
                  <HStack spacing={8} >
                    <Input
                    type='number'
                      w={"62%"}
                      placeholder="**** **** **** *786"
                      name='card'
                      value={card.card}
                      onChange={(e) => setCard({ ...card, [e.target.name]: e.target.value })}
                    />
                    <Button
                      onClick={handleOtp}
                      colorScheme="teal"
                      size="sm"
                      ml={2}
                      variant="outline"
                    >
                      Get Otp
                    </Button>
                  </HStack>
                </Box>
                <HStack spacing={4} w="full">
                  <Box flex={1}>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>
                      Expiry Date
                    </Text>
                    <Input
                      placeholder="MM/YY"
                      name='exp_date'
                      value={card.exp_date}
                      onChange={(e) => setCard({ ...card, [e.target.name]: e.target.value })}
                    />
                  </Box>
                  <Box flex={1}>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>
                      CVV
                    </Text>
                    <Input
                    type='password'
                      placeholder="1**"
                      name='cvv'
                      value={card.cvv}
                      onChange={(e) => setCard({ ...card, [e.target.name]: e.target.value })}
                    />
                  </Box>
                </HStack>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
                Close
              </Button>
              <Button type="submit" colorScheme="green">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PaymentCard;