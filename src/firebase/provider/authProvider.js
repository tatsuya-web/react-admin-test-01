import { firebaseConfig } from "../firebaseConfig";
import { FirebaseAuthProvider } from 'react-admin-firebase';

const options = {};

export const authProvider = FirebaseAuthProvider(firebaseConfig);