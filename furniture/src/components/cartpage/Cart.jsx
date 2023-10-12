import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Heading, Text } from '@chakra-ui/react';
import style from "./Cart.css";
import { Box, Flex, Img, Center } from '@chakra-ui/react';
import { AuthContent } from '../../AuthContent/AuthContentProvider';
import { cartTotal, removeFromCart } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const [show, setShow] = useState(false);
  
  let { store, setStore, setTotal, total,cartItems, setCartItems } = useContext(AuthContent);
  console.log(store);
  let dispatch = useDispatch();

  // const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  useEffect(() => {
    setCartItems(store);
  }, [store, show]);

  useEffect(() => {
    const totalVal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalVal);
    dispatch(cartTotal(totalVal));
  }, [cartItems]);

  const IncreaseQuantity = (index) => {
    // Find the item by index
    const item = cartItems[index];
    if (item) {
      // Increase quantity
      item.quantity += 1;
      // Update total price
      setTotal((prevTotalPrice) => prevTotalPrice + item.price);
    }
  };

  const DecreaseQuantity = (index) => {
    // Find the item by index
    const item = cartItems[index];
    if (item && item.quantity > 1) {
      // Decrease quantity, but not below 1
      item.quantity -= 1;
      // Update total price
      setTotal((prevTotalPrice) => prevTotalPrice - item.price);
    }
  };
  const DeleteItem = (id) => {
    console.log(id)
    const newCartData = store.filter((item,i) => i !== id);
    setStore(newCartData);
  };
  

  return (
    <div style={{ width: "80%", margin:"auto", marginBottom: "150px" }} >
      {cartItems.length === 0 ? (
        <div>
          <Heading>Add Item to Cart</Heading>
          <Center>
            <Img
              src="https://cdn.dribbble.com/users/20130/screenshots/2933302/carrello-800600.gif"
              width="50%"
            />
          </Center>
        </div>
      ) : (
        <div width="80%" margin="auto">
          <div>
            {cartItems.map((item, index) => (
              <Box key={item.id}>
                <Box display="flex" alignItems="center" justifyContent="space-between" p={4}>
                  <Box>
                    <Flex
                      alignItems="center"
                      flexDirection={{ base: 'column', md: 'row' }}
                      justifyContent="center"
                    >
                      <img src={item.img1} alt="name" width="120" style={{ marginRight: '16px' }} />
                      <h3 style={{ marginBottom: '8px' }}>{item.category}</h3>
                      <h3 style={{ marginBottom: '8px', marginLeft: '8px', fontWeight: 'bold' }}>
                        ₹{item.price}
                      </h3>
                    </Flex>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <Button
                      style={{ marginRight: '8px', marginLeft: '8px' }}
                      onClick={() => DecreaseQuantity(index)} // Pass the item index
                    >
                      -
                    </Button>
                    <h2 style={{ margin: '0 16px' }}>{item.quantity}</h2>
                    <Button
                      style={{ marginRight: '8px', marginLeft: '8px' }}
                      onClick={() => IncreaseQuantity(index)} // Pass the item index
                    >
                      +
                    </Button>
                    <Box>
                    <button onClick={() => DeleteItem(index)}>
                        <FaTrash />
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </div>
          <Box style={{ float: 'right', textAlign: 'right', marginRight: '20px', marginTop: '20px' }}>
            <Flex>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                Total Price:
              </h3>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff5733', paddingLeft: '10px' }}>
                ₹{total}
              </h3>
            </Flex>

            <Link to="/payment">
              <Button
                backgroundColor="#4caf50"
                color="white"
                padding="10px 20px"
                borderRadius="5px"
                cursor="pointer"
                fontSize="16px"
                marginTop="10px"
                transition="background-color 0.3s ease"
              >
                Checkout
              </Button>
            </Link>
          </Box>
        </div>
      )}
    </div>
  );
}

export { Cart };
