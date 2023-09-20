import React from 'react'
import { useContext,  } from 'react'
import { AuthContent } from '../AuthContent/AuthContentProvider'
import { Navigate,Outlet} from 'react-router-dom';
function PrivatRoute() {
    const {isauth,setIsauth} = useContext(AuthContent);

  return (
    <div>
        <div>
      {isauth ? (
        <Outlet />
      ) : (
        <>
           {alert("Please log in first")}
          <Navigate to="/login" />
        </>
      )}
    </div>
    </div>
  )
}

export default PrivatRoute