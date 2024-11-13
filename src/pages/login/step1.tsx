import { motion, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import { GoogleIcon, LinkEdinIcon } from "../component/icons";
import Button from "@mui/material/Button";
import { auth, firestore, signInWithGooglePopup } from "../../components/Firebase/firebase";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signInWithEmailAndPassword } from "firebase/auth";
import * as yup from "yup";
import { collection, getDocs, query, where } from "firebase/firestore";
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

interface StepProps {
  setPages: (n: number) => void;
}

const validationSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const Step1 = ({ setPages }: StepProps) => {
  const location = useLocation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await validationSchema.validate({ email, password }, { abortEarly: false });
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);

        const userCollection = collection(firestore, "users");
        const userQuery = query(userCollection, where("email", "==", email));
        
        try {
          const querySnapshot = await getDocs(userQuery);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const { firstName, lastName } = doc.data();
              localStorage.setItem('firstName', firstName);
              localStorage.setItem('lastName', lastName);
              localStorage.setItem('userMail', email);
              console.log("User First Name:", firstName);
              console.log("User Last Name:", lastName);
            });
          } else {
            console.log("No user found with this email");
          }
        } catch (error) {
          console.error("Error retrieving user data:", error);
        }
        setPages(1);
        console.log(user);
    })
    .catch((error) => {
      if (error instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach(err => {
          if (err.path) validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        if (error.code === 'auth/invalid-credential') {
          toast.error("Invalid credentials. Please try again.");
        } else if (error.code === 'auth/user-not-found') {
          toast.error("No user found with this email address.");
        } else if (error.code === 'auth/wrong-password') {
          toast.error("Incorrect password. Please try again.");
        } else {
          console.error("Unexpected error:", error);
        }
      }
    });
  }

  const SignIn = async () => {
    try {
      // const response = await signInWithGooglePopup();
      // console.log("Access Token:", response);
      login();
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const login = useGoogleLogin({
    flow: 'auth-code', // Explicitly use auth-code flow
    onSuccess: async (codeResponse) => {
      try {
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
          code: codeResponse.code,
          client_id: process.env.REACT_APP_CLIENT_ID, // Replace with your Google Client ID
          client_secret: process.env.REACT_APP_CLIENT_SECRET, // Replace with your Google Client Secret
          // redirect_uri: 'https://app.torque-ai.com', // Replace with your redirect URI
          redirect_uri: 'http://localhost:3002', // Replace with your redirect URI
          grant_type: 'authorization_code',
        });

        const accessToken = tokenResponse.data.refresh_token;

        localStorage.setItem('access_token',accessToken );
        setPages(1);

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
  const themeContext = useContext(ThemeContext);
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
          <div className="flex flex-col w-[100%] gap-y-2 md:mt-[32px] mt-[8px]">
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
              placeholder="Email address"
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
            {errors.password && <p className="error">{errors.password}</p>}
            <p
              className="B4 cursor-pointer"
              style={{
                textAlign: "left",
                textDecoration: "underline",
                color: "#ffffff",
              }}
            >
              Forgot password
            </p>
          </div>
          <div className="flex justify-center w-full cursor-pointer md:mt-[32px] mt-[8px]">
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                borderRadius: "50px",
                border: `1px solid ${themeContext?.theme.activeButtonBackground}`,
                textTransform: "none",
              }}
              onClick={() => SignIn()}
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
            Don’t have an account?{" "}
            <a
              href="/register"
              style={{ textDecoration: "underline", color: "#ffffff" }}
            >
              Create Account
            </a>
          </p>

          <div className="pt-[32px] pb-[40px]">
            <button
              className="w-[114px] h-[28px] px-[12px] py-[8px] btn-white"
              type="submit"
            >
              Log In
            </button>
          </div>
        </div>
        </form>
      </motion.section>
    </div>
  );
};
