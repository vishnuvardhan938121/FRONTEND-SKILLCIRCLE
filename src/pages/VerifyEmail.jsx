import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import authApi from '../apis/auth.api';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verificationToken } = useParams();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(''); // Initialize email state

  useEffect(() => {
    const verifyEmail = async () => {
      if (!verificationToken) {
        console.error('Verification token not found.');
        setError(true); // Set error if token is missing
      } else {
        authApi.handleVerificationEmail({
            verify_token:verificationToken,
          payload: { verificationToken },
          success: (res) => {
            console.log(res);
            navigate("/dashboard");
            toast.success("Your Email is Verified Successfully", {
              position: "top-center",
              autoClose: 2000
            });
          },
          error: (err) => {
            console.log(err);
            setError(true);
            toast.error(err?.response?.data?.message, {
              position: "top-center",
              autoClose: 2000
            });
          }
        });
      }
    };

    verifyEmail();
  }, [verificationToken]);

  const handleResendEmail = () => {
    authApi.sendVerifyEmail({
      payload: { email },
      success: (res) => {
        toast.success("Verification email has been sent to your email", {
          position: "top-center",
          autoClose: 2000
        });
      },
      error: (err) => {
        console.error(err);
        toast.error("Error sending verification email", {
          position: "top-center",
          autoClose: 2000
        });
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {error ? (
          <div>
            <h2 className="text-2xl font-medium text-red-600 mb-4">
              Verification failed!
            </h2>
            <p className="text-gray-600 mb-4">
              There was an error verifying your email. Please check the link or try again later.
            </p>
            <div className="mb-4">
              <input 
                type="email" 
                className="border border-gray-400 px-3 py-2 rounded-md w-full" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              onClick={handleResendEmail}
            >
              Resend Verification Email
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              Verifying your email...
            </h2>
            <div className="border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;