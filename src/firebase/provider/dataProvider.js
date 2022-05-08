import { firebaseConfig } from "../firebaseConfig";
import { FirebaseDataProvider } from 'react-admin-firebase';

const options = {};

export const dataProvider = FirebaseDataProvider(firebaseConfig, options);