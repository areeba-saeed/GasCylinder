import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import AppSettings from './src/screens/AppSettings';
import ChangePassword from './src/screens/ChangePassword';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import ForgotPassword from './src/screens/ForgotPassword';
import AboutUs from './src/screens/AboutUs';
import ContactUs from './src/screens/ContactUs';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import TermsConditions from './src/screens/TermsConditions';
import Notifications from './src/screens/Notifications';
import { MyStack } from "./routes/homestack";
import SignIn from './src/screens/SignIn';
import Splash from './src/screens/Splash';

 const App = () => {

  return (
    <MyStack>
       <SignIn/>
     </MyStack>
    //  <SignIn/>
  );
 }


export default App;