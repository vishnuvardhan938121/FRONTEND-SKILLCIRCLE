import { lazy } from "react";
import Contact from "../pages/Contact";
import VerifyEmail from "../pages/VerifyEmail";
import Services from "../pages/Services";

const Signup = lazy(() => import("../pages/SignUp"));
const routes = [
  { name: "Register", path: "/signUp", element: <Signup /> },
  {name: "Contact" , path:"/contact",element:<Contact/>},
  {name:"VerifyEmail",path:"/verify-email/:verificationToken",element:<VerifyEmail/>},
  {name:"Services", path:"/services",element:<Services/>}
];

export default routes;
