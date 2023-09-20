import React, { useContext, useState,useEffect } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
Text
,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaHeart, FaShoppingCart, FaShare, FaBars } from 'react-icons/fa';
import { AuthContent } from '../../AuthContent/AuthContentProvider';
import { Link } from 'react-router-dom';


function NavbarFirst() {


  const {store,namelogin}= useContext(AuthContent);
 console.log(namelogin);
  const NumberOfItem = store.length;
  console.log(NumberOfItem);
  
  const [cartItemCount, setCartItemCount] = useState(NumberOfItem);
  useEffect(() => {
    setCartItemCount(NumberOfItem);
  }, [NumberOfItem]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: '4', md: '8' }}
      py="3"
      borderBottom='1px'
      
    >
    <Link to="/">
      <Box
        width="50px"
        height="50px"
        borderRadius="50%"
       
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginRight='10px'
        
      >
        <Image src="https://img.freepik.com/premium-vector/m-letter-vector-logo-design-template-graphic-alphabet-symbol-corporate-business-identity_418020-102.jpg?size=626&ext=jpg&ga=GA1.2.1015256055.1691636772&semt=ais" alt="Logo" borderRadius="50%" />
      </Box>
      </Link>
      <Flex
        display={{ base: 'none', md: 'flex' }} // Hide on small screens, show on medium screens and above
        justifyContent="space-between"
        alignItems="center"
        gap="7" // Adjust the gap between items
      >
        <Link to="/chair">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Chair
      </Text>
      </Link>

      <Link to="/table">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Table
      </Text>
      </Link>

      <Link to="/lambs">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Lamps
      </Text>
      </Link>

      <Link to="/sofas">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Sofas
      </Text>
      </Link>

      <Link to="/cases">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Cases
      </Text>
      </Link>

      <Link to="/other">
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Other
      </Text>
      </Link>

      </Flex>
      <Flex alignItems="center" gap="4">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.700" />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <Tooltip label="Favorite">
          <IconButton aria-label="Favorite" icon={<FaHeart />} variant="ghost" colorScheme="gray" />
        </Tooltip>
        <Tooltip label="Share">
          <IconButton aria-label="Share" icon={<FaShare />} variant="ghost" colorScheme="gray" />
        </Tooltip>
        <Flex alignItems="center" gap="2">
          <Tooltip label="Cart Page">
            <Link to="/cart">
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart />}
              variant="ghost"
              colorScheme="gray"
            />
            </Link>
          </Tooltip>
          
          <Box
          ml="-6"
          p="1"
          color="red"
          borderRadius="full"
          fontWeight="bold"
          fontSize="sm"
          minWidth="1.5rem"
          textAlign="center"
          marginBottom='15px'
        >
          {cartItemCount}
        </Box>
        </Flex>
        <Tooltip label="Menu">
          <Menu 
        
          >
            <MenuButton
              display={{lg : 'none'}}
              as={IconButton}
              aria-label="Menu"
              icon={<FaBars />}
              variant="ghost"
              colorScheme="gray"
              _hover={{ // Add hover effect styling
                color: 'teal.500',
                backgroundColor: 'transparent',
              }}
            />
            <MenuList
              _hover={{ // Add hover effect styling for the MenuList
                backgroundColor: 'gray.100',

              }}
            >
              <Link to="/chair">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Chair</MenuItem>
              </Link>
              <Link to="/table">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Table</MenuItem>
              </Link>
              <Link to="/lambs">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Lamps</MenuItem>
              </Link>

              <Link to="/sofas">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Sofas</MenuItem>
              </Link>
              <Link to="/cases">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Cases</MenuItem>
              </Link>
              <Link to="/other">
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Other</MenuItem>
              </Link>
              <Link to="/login" >
              <MenuItem >
              <Button colorScheme="blue" size="md" width="100%"  bg='#f79525'>
          {namelogin.length===0 ? "Login" : namelogin}
    </Button></MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Tooltip>
      
        <Link to="/login">
  <Box display={{ base: 'none', md: 'none', lg: 'flex' }}>
    <Button colorScheme="blue" size="md" width="100%" bg='#f79525'>
      {namelogin.length === 0 ? "Login" : namelogin}
    </Button>
  </Box>
</Link>


      </Flex>
    </Box>
  );
}

export default NavbarFirst;
