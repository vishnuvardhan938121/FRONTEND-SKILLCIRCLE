import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate, Outlet, Navigate } from "react-router-dom";

import currentUserState from "../../store/user.store";

import authApi from "../../apis/auth.api";
import Loader from "../../components/Loader/Loader";

export default function ProtectedRouter() {
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);

  const checkUserSession = () => {
    authApi.verifySession({
      success: ({ data }) => {
        const userData = {
          isLoggedIn: true,
          Id: data.data.userId,
          name: data.data.username,
          address:data.data.address,
          email: data.data.email,
          mobile: data.data.mobile,
          isEmailVerified:data.data.isEmailVerified,
          isOnBoardingCompleted:data.data.isOnBoardingCompleted,
          userType: data.data.userType,
          profilePicture:data.data.profilePicture
        };

        if(data.data.userType==="Provider"){
          navigate("/");
      }


        setCurrentLoggedInUser(userData);
      },
      error: () => {
        navigate("/");
      },
      final: () => {
        setIsLoaded(true);
      },
    });
  };

  useEffect(() => {
    checkUserSession();
  }, [navigate]);

  return (
    <>
      {isLoaded ? (
        currentLoggedInUser.isLoggedIn ? (
          <Outlet />
        ) : (
          <Navigate to="/" />
        )
      ) : (
        <Loader />
      )}
    </>
  );
}
