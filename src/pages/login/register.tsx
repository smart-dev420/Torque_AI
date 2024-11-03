import { motion, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";
import { GoogleIcon, LinkEdinIcon } from "../component/icons";
import { useRouter } from "../../routes/hooks/index";
import Button from "@mui/material/Button";

import { imageAssets } from "../../utils/constant";
import { ProgressBar } from "./progressbar";
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

const RegisterComponent = ({ setPages }: any) => {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);
  const router = useRouter();
  const handlNext = () => {
    router.push("/");
  };
  return (
    <div>
      <motion.section
        variants={pageVariant}
        initial={location.hasOwnProperty("state.name") ? "initial" : "initial2"}
        animate="animate"
        exit="exit"
      >
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
                />
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
                />
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
            />
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
            />
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
            <button
              className="w-[114px] h-[28px] px-[12px] py-[8px] btn-white"
              onClick={handlNext}
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
