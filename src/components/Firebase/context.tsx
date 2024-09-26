import { createContext } from 'react';
import { FirebaseApp } from 'firebase/app';

// Create a context with a default value of null or a FirebaseApp instance
const FirebaseContext = createContext<FirebaseApp | null>(null);

export default FirebaseContext;