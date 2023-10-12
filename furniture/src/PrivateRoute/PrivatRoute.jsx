import React from 'react'
import { useContext,  } from 'react'
import { AuthContent } from '../AuthContent/AuthContentProvider'
import { Navigate,Outlet} from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
function PrivatRoute() {
    const {isauth,setIsauth} = useContext(AuthContent);
    const toast = useToast();
  return (
    <div>
        <div>
      {isauth ? (
        <Outlet />
      ) : (
        <>
           {
             toast({
              position: "top",
              title: 'Error',
              description: ' Login Frist',
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
           }
          <Navigate to="/login" />
        </>
      )}
    </div>
    </div>
  )
}

export default PrivatRoute