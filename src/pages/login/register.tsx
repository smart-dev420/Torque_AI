import { motion, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import { GoogleIcon, LinkEdinIcon } from "../component/icons";
import { useRouter } from "../../routes/hooks/index";
import Button from "@mui/material/Button";

import { imageAssets } from "../../utils/constant";
import { ProgressBar } from "./progressbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../components/Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import UserContext from "../../utils/userContext";
export const Register = () => {
  return (
    <div className="bg-[#000] w-full min-h-screen">
      <div className="max-w-[600px] w-full flex-col mx-[auto]">
        <div className="pt-[64px] ">
          <img
            src={imageAssets.logo}
            alt="Torque AI"
            className="mx-[auto] max-w-[210px] max-h-[50px]"
          />
        </div>
        <div className="mt-[64px] rounded-[8px] bg-[#141414] max-h-[680px] h-full flex-col text-center	px-[40px]">
          <RegisterComponent />
        </div>
        <ProgressBar step={0} />
      </div>
    </div>
  );
};

const pageVariant: Variants = {
  initial: {
    x: "-60%",
    opacity: 0,
  },
  initial2: {
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-60%",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const validationSchema = yup.object().shape({
  userFirstName: yup.string().required("First name is required"),
  userLastName: yup.string().required("Last name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const RegisterComponent = ({ setPages }: any) => {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const {  setMail, setFirstName, setLastName, setUserId } = useContext(UserContext);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ userFirstName, userLastName, email, password }, { abortEarly: false });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      setFirstName(userFirstName);
      setLastName(userLastName);
      setUserId(user.uid);
      router.push('/');
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach(err => {
          if (err.path) validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        toast.error("Error: "+error);
      }
    }
  };

  const login = useGoogleLogin({
    flow: 'auth-code', // Explicitly use auth-code flow
    onSuccess: async (codeResponse) => {
      try {
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
          code: codeResponse.code,
          client_id: process.env.REACT_APP_CLIENT_ID, // Replace with your Google Client ID
          client_secret: process.env.REACT_APP_CLIENT_SECRET, // Replace with your Google Client Secret
          redirect_uri: process.env.REACT_APP_HOST, // Replace with your redirect URI
          // redirect_uri: 'http://localhost:3000', // Replace with your redirect URI
          grant_type: 'authorization_code',
        });

        const accessToken = tokenResponse.data.refresh_token;

        localStorage.setItem('access_token',accessToken );
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
          headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`,
          },
        });
        
        // Log the user's email address
        const userEmail = userInfoResponse.data.email;
        
        setMail(userEmail);
        setFirstName(userInfoResponse.data.given_name);
        setLastName(userInfoResponse.data.family_name);
        router.push('/');

        // Now you can access the user's email address
       
      } catch (error) {
        toast.error('Error retrieving user info:' + error);
      }
    },
    onError: (errorResponse) => {
      toast.error('Login Failed:' + errorResponse);
    },
    scope: 'https://www.googleapis.com/auth/adwords', // Google Ads API scope
  });
  return (
    <div>
      <motion.section
        variants={pageVariant}
        initial={location.hasOwnProperty("state.name") ? "initial" : "initial2"}
        animate="animate"
        exit="exit"
      >
        <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-4">
          <div className="pt-[40px]">
            <span className="font-h2-700 font-grey ">Get Started</span>
          </div>
          <div className="pb-[16px] B5">
            Welcome to Torque AI! Let's set up your account to unlock powerful
            marketing insights.
          </div>
          <div className="flex flex-row gap-y-4 justify-between">
            <div className="flex flex-row w-[100%] gap-x-4">
              <div className="flex flex-col w-[100%] gap-y-2">
                <h5 style={{ textAlign: "left" }}>First Name</h5>
                <input
                  type="text"
                  name="firsName"
                  style={{
                    backgroundColor: themeContext?.theme.hoverBackground,
                    height: "40px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    borderRadius: "20px",
                  }}
                  required
                  placeholder="First Name"
                  onChange={(e) => setUserFirstName(e.target.value)}
                />
                {errors.userFirstName && <p className="error">{errors.userFirstName}</p>}
              </div>
              <div className="flex flex-col w-[100%] gap-y-2">
                <h5 style={{ textAlign: "left" }}>Last Name</h5>
                <input
                  type="text"
                  name="lastName"
                  style={{
                    backgroundColor: themeContext?.theme.hoverBackground,
                    height: "40px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    borderRadius: "20px",
                  }}
                  required
                  placeholder="Last Name"
                  onChange={(e) => setUserLastName(e.target.value)}
                />
                {errors.userLastName && <p className="error">{errors.userLastName}</p>}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] gap-y-2">
            <h5 style={{ textAlign: "left" }}>Email</h5>
            <input
              type="email"
              name="email"
              style={{
                backgroundColor: themeContext?.theme.hoverBackground,
                height: "40px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "20px",
              }}
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="flex flex-col w-[100%] gap-y-2">
            <h5 style={{ textAlign: "left" }}>Password</h5>
            <input
              type="password"
              name="password"
              style={{
                backgroundColor: themeContext?.theme.hoverBackground,
                height: "40px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "20px",
              }}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <h6 className="error">{errors.password}</h6>}
          </div>
          <div className="flex justify-center w-full cursor-pointer">
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                borderRadius: "50px",
                border: `1px solid ${themeContext?.theme.activeButtonBackground}`,
                textTransform: "none",
              }}
              onClick={login}
            >
              <p
                className="Button"
                style={{ color: themeContext?.theme.color }}
              >
                Continue with Google
              </p>
            </Button>
          </div>
          <div className="flex justify-center w-full cursor-pointer">
            <Button
              variant="outlined"
              startIcon={<LinkEdinIcon />}
              sx={{
                borderRadius: "50px",
                border: `1px solid ${themeContext?.theme.activeButtonBackground}`,
                textTransform: "none",
              }}
            >
              <p
                className="Button"
                style={{ color: themeContext?.theme.color }}
              >
                Continue with LinkedIn
              </p>
            </Button>
          </div>
          <p className="B3">
            Already have an account?{" "}
            <a
              href="/"
              style={{ textDecoration: "underline", color: "#ffffff" }}
            >
              Log In
            </a>
          </p>
          <div className="pt-[32px] pb-[40px]">
            <button type="submit"
              className="w-[114px] h-[28px] px-[12px] py-[8px] btn-white"
            >
              Let's Get Started
            </button>
          </div>
        </div>
        </form>
      </motion.section>
    </div>
  );
};
