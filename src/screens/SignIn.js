import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/images/logo_1.png";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import { Dimensions } from "react-native";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import { db } from "../fire";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const SignIn = (props) => {
  const [Gas, setgas] = useState([]);

  const GasCollection = collection(db, "Gas");
  const [DeviceName, setDeviceName] = useState("");
  // const [ deviceno, setDeviceno] = useState('');
  const [Password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  useEffect(() => {
    const getGas = async () => {
      const data = await getDocs(GasCollection);
      setgas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getGas();
  }, []);

  const onSignInPressed = () => {
    if (setDeviceName === Gas.DeviceName && setPassword === Gas.password) {
      // props.navigation.navigate(Home);
      alert("successful");
    } else {
      alert("Unsuccessful");
    }
    // setDeviceName("");
    // setPassword("");
  };

  const onForgotPasswordPressed = () => {
    props.navigation.navigate(ForgotPassword);
  };

  const onTermsOfUsePressed = () => {
    props.navigation.navigate(TermsConditions);
  };

  const onPrivacyPolicyPressed = () => {
    props.navigation.navigate(PrivacyPolicy);
  };

  const { wp, hp } = Dimensions.get("window");

  return (
    <View
      style={{
        height: hp,
        width: wp,
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFF",
          alignItems: "center",
          padding: 30,
          flex: 1,
        }}
      >
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        {/* {gas.map((gas) =>  {
  <Text>{gas.DeviceName}</Text>


})}; */}
        <CustomInput
          placeholder="Enter Your Model Number"
          value={DeviceName}
          setvalue={setDeviceName}
        />
        {/* <CustomInput
       placeholder="Enter Your Device Number" 
       value={deviceno} 
       setvalue={setDeviceno}
       /> */}
        <CustomInput
          placeholder="Enter Your Password"
          value={Password}
          setvalue={setPassword}
        />

        <Text>
          By Registering, you confirm that you accept our {""}
          <Text style={{ color: "blue" }} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and {""}
          <Text style={{ color: "blue" }} onPress={onPrivacyPolicyPressed}>
            Privacy Policy.
          </Text>
        </Text>
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          bgColor="orange"
          fgColor="black"
        />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          //type="TERTIARY"
          bgColor="lightgray"
          fgColor="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 70,
    width: "70%",
    maxHeight: 200,
    maxWidth: 300,
    marginLeft: 60,
  },
});

export default SignIn;
