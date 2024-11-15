import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import CustomSelect, { CustomMenuItem } from "../component/customSelect";
import { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import ImageUpload from "./imageUpload";
import {
  checkIfEmailExists,
  getUserDataByToken,
  updateUserDataByEmail,
} from "../../utils/helper";
import { industryList, roleList, teamList } from "../../utils/constant";
import { UserData } from "../interface";
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InformationPage = () => {
  const themeContext = useContext(ThemeContext);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [showCurrentPassword, setCurrentShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);
  const [isExistingEmail, setIsExistingEmail] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setCurrentShowPassword((prev) => !prev);
  };

  const toggleNewPasswordVisibility = () => {
    setNewShowPassword((prev) => !prev);
  };

  const fetchUserData = async () => {
    const token = localStorage.getItem("access_token") ?? "";
    const data = await getUserDataByToken(token);
    if (data) {
      setUserData(data);
      const check = await checkIfEmailExists(data.mail);
      setIsExistingEmail(check);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to handle updates for top-level fields (e.g., first_name, last_name)
  const handleUpdate = async (field: keyof UserData, value: any) => {
    if (!userData) return;

    const updatedData = { ...userData, [field]: value };
    setUserData(updatedData);

    const response = await updateUserDataByEmail(userData.doc_id, {
      [field]: value,
    });

    if (!response.success) {
      console.error("Failed to update user data");
      setUserData(userData);
    }
  };

  // Function to handle updates for nested experience fields
  const handleExperienceUpdate = async (
    field: keyof UserData["experience"],
    value: any
  ) => {
    if (!userData) return;

    const updatedData = {
      ...userData,
      experience: { ...userData.experience, [field]: value },
    };
    setUserData(updatedData); // Optimistic UI update

    const response = await updateUserDataByEmail(userData.doc_id, {
      experience: { ...userData.experience, [field]: value },
    });

    if (!response.success) {
      console.error("Failed to update user data");
      // Revert UI change if the update fails
      setUserData(userData);
    }
  };

  const handlePasswordChange = async () => {
    if (!userData || !isExistingEmail) return;

    // Validate passwords match
    if (currentPassword.trim() === "") {
      setPasswordError("Current password is required");
      return;
    }
    if (newPassword.trim() === "" || newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const credential = EmailAuthProvider.credential(
        user.email!,
        currentPassword
      );

      try {
        // Reauthenticate user to ensure they are authenticated
        await reauthenticateWithCredential(user, credential);

        // Update password
        await updatePassword(user, newPassword);
        setPasswordError("");
        alert("Password updated successfully!");
      } catch (error) {
        console.error(error);
        setPasswordError("Failed to update password. Please try again.");
      }
    } else {
      setPasswordError("User not authenticated.");
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/3 shrink-0 flex flex-row gap-[16px]">
          <ImageUpload docId={userData?.doc_id || ""} />
        </div>
        <div className="w-full flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <div className="font-h5-700 font-grey1 text-left">First Name</div>
            <div className="flex flex-row gap-[32px]">
              <input
                className="input-text font-b4-500 font-grey1 w-full"
                type="text"
                placeholder="First Name"
                value={userData?.first_name || ""}
                onChange={(e) =>
                  setUserData((prev) =>
                    prev ? { ...prev, first_name: e.target.value } : null
                  )
                }
              />
              <button
                className="px-[12px] rounded-[50px] Button w-[83px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
                onClick={() => handleUpdate("first_name", userData?.first_name)}
              >
                <EditIcon style={{ fontSize: "13px" }} /> edit
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <div className="font-h5-700 font-grey1 text-left">Last Name</div>
            <div className="flex flex-row gap-[32px]">
              <input
                className="input-text font-b4-500 font-grey1 w-full"
                type="text"
                placeholder="Last Name"
                value={userData?.last_name || ""}
                onChange={(e) =>
                  setUserData((prev) =>
                    prev ? { ...prev, last_name: e.target.value } : null
                  )
                }
              />
              <button
                className="px-[12px] rounded-[50px] Button w-[83px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
                onClick={() => handleUpdate("last_name", userData?.last_name)}
              >
                <EditIcon style={{ fontSize: "13px" }} /> edit
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row gap-[32px]">
              <div className="flex flex-col gap-y-2 w-[50%]">
                <div className="font-h5-700 font-grey1 text-left">
                  Current Password
                </div>
                <div className="h-[32px]">
                  <div className="relative w-full">
                    <input
                      className="input-text font-b4-500 font-grey1 w-full pr-10"
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword || ""}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      disabled={!isExistingEmail}
                    />
                    <button
                      type="button"
                      onClick={toggleCurrentPasswordVisibility}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      disabled={!isExistingEmail}
                    >
                      {showCurrentPassword ? (
                        <VisibilityOffIcon style={{ fontSize: 24 }} />
                      ) : (
                        <VisibilityIcon style={{ fontSize: 24 }} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 w-[50%]">
                <div className="font-h5-700 font-grey1 text-left">
                  New Password
                </div>
                <div className="h-[32px]">
                  <div className="relative w-full">
                    <input
                      className="input-text font-b4-500 font-grey1 w-full pr-10"
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword || ""}
                      onChange={(e) => setNewPassword(e.target.value)}
                      disabled={!isExistingEmail}
                    />
                    <button
                      type="button"
                      onClick={toggleNewPasswordVisibility}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      disabled={!isExistingEmail}
                    >
                      {showNewPassword ? (
                        <VisibilityOffIcon style={{ fontSize: 24 }} />
                      ) : (
                        <VisibilityIcon style={{ fontSize: 24 }} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 justify-end">
                <button
                  className="px-[12px] rounded-[50px] Button w-[73px] h-[31px]"
                  style={{
                    backgroundColor: themeContext?.theme.activeButtonBackground,
                    color: themeContext?.theme.activeColor,
                  }}
                  onClick={handlePasswordChange}
                  disabled={!isExistingEmail}
                >
                  <EditIcon style={{ fontSize: "13px" }} /> edit
                </button>
              </div>
            </div>
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="font-h5-700 font-grey1 text-left">Company Name</div>
        <div className="flex flex-row gap-[32px]">
          <input
            className="input-text font-b4-500 font-grey1 w-full"
            type="text"
            placeholder="Company Name"
            value={userData?.experience.companyName || ""}
            onChange={(e) =>
              setUserData((prev) =>
                prev
                  ? {
                      ...prev,
                      experience: {
                        ...prev.experience,
                        companyName: e.target.value,
                      },
                    }
                  : null
              )
            }
          />

          <button
            className="px-[12px] rounded-[50px] Button w-[75px]"
            style={{
              backgroundColor: themeContext?.theme.activeButtonBackground,
              color: themeContext?.theme.activeColor,
            }}
            onClick={() =>
              handleExperienceUpdate(
                "companyName",
                userData?.experience.companyName
              )
            }
          >
            <EditIcon style={{ fontSize: "13px" }} /> edit
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <div className="font-h5-700 font-grey1 text-left">Industry</div>
        <CustomSelect
          IconComponent={(props) => (
            <KeyboardArrowDownIcon
              {...props}
              sx={{ color: "#D9DCFB !important", fontSize: "30px" }}
            />
          )}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#292929",
                borderRadius: "8px",
                width: "100px !important",
              },
            },
          }}
          value={userData?.experience.industry || "Retail"}
          onChange={(e: SelectChangeEvent<any>) =>
            handleExperienceUpdate("industry", e.target.value)
          }
        >
          {industryList.map((item) => (
            <CustomMenuItem value={item.value} key={item.value}>
              {item.name}
            </CustomMenuItem>
          ))}
        </CustomSelect>
      </div>

      <div className="flex flex-col gap-[8px]">
        <div className="font-h5-700 font-grey1 text-left">Role</div>
        <CustomSelect
          IconComponent={(props) => (
            <KeyboardArrowDownIcon
              {...props}
              sx={{ color: "#D9DCFB !important", fontSize: "30px" }}
            />
          )}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#292929",
                borderRadius: "8px",
                width: "100px !important",
              },
            },
          }}
          value={userData?.experience.role || "CMO"}
          onChange={(e: SelectChangeEvent<any>) =>
            handleExperienceUpdate("role", e.target.value)
          }
        >
          {roleList.map((item) => (
            <CustomMenuItem value={item.value} key={item.value}>
              {item.name}
            </CustomMenuItem>
          ))}
        </CustomSelect>
      </div>

      <div className="flex flex-col gap-[8px]">
        <div className="font-h5-700 font-grey1 text-left">Team Size</div>
        <CustomSelect
          IconComponent={(props) => (
            <KeyboardArrowDownIcon
              {...props}
              sx={{ color: "#D9DCFB !important", fontSize: "30px" }}
            />
          )}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#292929",
                borderRadius: "8px",
                width: "100px !important",
              },
            },
          }}
          value={userData?.experience.teamsize || "1-10"}
          onChange={(e: SelectChangeEvent<any>) =>
            handleExperienceUpdate("teamsize", e.target.value)
          }
        >
          {teamList.map((item) => (
            <CustomMenuItem value={item.value} key={item.value}>
              {item.name}
            </CustomMenuItem>
          ))}
        </CustomSelect>
      </div>
    </>
  );
};

export default InformationPage;
