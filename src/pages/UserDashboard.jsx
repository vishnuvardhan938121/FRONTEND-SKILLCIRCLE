import React, { useState, useEffect } from "react";
import currentUserState from "../store/user.store";
import { useRecoilState } from "recoil";
import Header from "../components/Header";
import authApi from "../apis/auth.api";
import { toast } from "react-toastify";

function Dashboard() {
  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);
  const [currentStep, setCurrentStep] = useState(1);

  
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);

  const [photo, setPhoto] = useState(null);
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email,setEmail]=useState(currentLoggedInUser.email);

  useEffect(() => {
    if (currentLoggedInUser) {
      if (!currentLoggedInUser.isEmailVerified) {
        setCurrentStep(1);
      } else if (!currentLoggedInUser.isOnboarded) {
        setCurrentStep(2);
      } else {
        setCurrentStep(3);
      }
    }
  }, [currentLoggedInUser]);

  const handleVerifyEmail = () => {
    console.log("Email verification initiated...");
    setEmailVerificationSent(true);

    authApi.sendVerificationEmail({
      payload:{
        email
      },
      success:(res)=>{
        toast.success("Email has been sent SuccessFully",{
          position:"top-center",
          autoClose:"2000"
        })
      },
      error:(err)=>{
        toast.error((err?.response?.data?.message) || "Error in server",{
          position:"top-center",
          autoClose:"2000"
        })
      }
    })
  };

  const handleOnboardingSubmit = (event) => {
    event.preventDefault();
    console.log("Onboarding data submitted:", { photo, mobile, address });
    setCurrentStep(3);
  };

  return (
    <>
    <Header isScrolled={true}/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex items-center w-full max-w-xl mb-4">
        {/* Step 1 */}
        <div className="flex items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707   
 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="ml-2   
 text-sm font-medium text-gray-500">
            Personal Info
          </span>
        </div>

        {/* Line Connector */}
        <div className="w-full bg-gray-200 h-px flex-1"></div>

        {/* Step 2 */}
        <div className="flex items-center flex-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${currentStep >= 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"}`} 
          >
            <span>2</span> 
          </div>
          <span
            className={`ml-2 text-sm font-medium ${
              currentStep >= 2 ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Account Info
          </span>
        </div>

        {/* Line Connector */}
        <div className="w-full bg-gray-200 h-px flex-1"></div>

        {/* Step 3 */}
        <div className="flex items-center flex-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${currentStep >= 3 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"}`}
          >
            <span>3</span>
          </div>
          <span
            className={`ml-2 text-sm font-medium ${
              currentStep >= 3 ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Confirmation
          </span>
        </div>
      </div>



      {currentStep === 1 && (
        <div className="modal bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
          <div className="modal-content text-center">
            <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
            {!emailVerificationSent ? (
              <>
                <p className="text-gray-600 mb-6">
                  Please verify your email address to continue.
                </p>
                <button
                  onClick={handleVerifyEmail}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Verify Email
                </button>
              </>
            ) : (
              <p className="text-green-500 font-medium">
                Verification email sent! Please check your inbox.
              </p>
            )}
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="modal bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="modal-content">
            <h2 className="text-2xl font-bold mb-4">Complete Onboarding</h2>
            <form onSubmit={handleOnboardingSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="photo"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Photo:
                </label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Mobile:
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address:
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Complete Onboarding
              </button>
            </form>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard!</h2>
        </div>
      )}
    </div>
    </>
  );
}

export default Dashboard;