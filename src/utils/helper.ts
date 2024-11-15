import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { UserData } from "../pages/interface";
import { firestore } from "../components/Firebase/firebase";
import { fetchSignInMethodsForEmail, getAuth } from "firebase/auth";

export function formatNumber(number: number): string {
  if (number >= 1000000) {
    // Format numbers in millions
    const millions = number / 1000000;
    return `${millions.toFixed(millions >= 10 ? 0 : 1)}M`;
  } else if (number >= 1000) {
    // Format numbers in thousands
    const thousands = number / 1000;
    return `${thousands.toFixed(thousands >= 10 ? 0 : 1)}K`;
  } else {
    // For numbers less than a thousand, just return the number
    return number.toFixed(0);
  }
}

export const getUserDataByToken = async (
  token: string
): Promise<UserData | null> => {
  try {
    // Reference to the 'users' collection
    const usersRef = collection(firestore, "users");

    // Create a query to filter by email
    const q = query(usersRef, where("access_token", "==", token));

    // Execute the query
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data() as UserData;
      userData.doc_id = querySnapshot.docs[0].id;
      return userData;
    } else {
      console.log("No user found with the given token.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data by token:", error);
    return null;
  }
};

export const updateUserDataByEmail = async (
  id: string,
  updatedData: Partial<any>
): Promise<{ success: boolean; message: string }> => {
  try {
    // Reference to the user document using the doc id as identifier
    const userDocRef = doc(firestore, "users", id);

    // Update the user data in Firestore
    await updateDoc(userDocRef, updatedData);

    return { success: true, message: "Update successful" };
  } catch (error) {
    console.error("Error updating user data:", error);
    return { success: false, message: "An error occurred while updating." };
  }
};

export const checkIfEmailExists = async (email: string) => {
  const auth = getAuth();

  try {
    // Fetch the sign-in methods for the email
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);

    // If the array is empty, the email is not registered
    if (signInMethods.length === 0) {
      console.log("Email not registered");
      return false; // Email does not exist
    } else {
      console.log("Email already exists");
      return true; // Email exists
    }
  } catch (error) {
    console.error("Error checking email existence:", error);
    return false; // In case of an error, assume the email doesn't exist
  }
};
