import { Button, Icon, Text } from "@rneui/base";
import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import {  } from 'react-native'

const SignIn = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};



const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = () => {
    navigation.navigate("NavigationLayout");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#ebebeb", flex: 1 }}>
      <Text
        style={{
          fontSize: 54,
          textAlign: "center",
          marginTop: 65,
          marginBottom: 0,
          fontWeight: "bold",
          color: "#192586",
          lineHeight: 54,
        }}
      >
        Memo
      </Text>
      <Text
        style={{
          fontSize: 28,
          textAlign: "right",
          marginRight: 20,
          marginBottom: 0,
          lineHeight: 28,
          color: "#5c6dc9",
        }}
      >
        Flashcards
      </Text>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          borderWidth: 2,
          padding: 9,
          marginTop: 70,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          justifyContent: "center",
          alignContent: "center",
          paddingLeft: 16,
        }}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="Username"
        selectionColor="#5c6dc9"
      ></TextInput>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          marginTop: 2,
          borderWidth: 2,
          padding: 9,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          alignContent: "center",
          textAlignVertical: "center",
          paddingLeft: 16,
        }}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Password"
        selectionColor="#5c6dc9"
      ></TextInput>

      <Button
        title={"Login"}
        buttonStyle={{
          backgroundColor: "#192586",
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 30,
          borderRadius: 50,
          justifyContent: "center",
          alignSelf: "center",
        }}
        // onPress={SignIn(auth, email, password)}
        onPress={onLoginPressed}
      />
      <Text style={{ textAlign: "center", fontSize: 16, color: "#5c6dc9" }}>
        {" "}
        or{" "}
      </Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 12,
            color: "#192586",
          }}
        >
          Forgot password?{" "}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 10 }}
      onPress={() => navigation.navigate('RegisterScreen')}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 1,
            color: "#5c6dc9",
          }}
        >
          {" "}
          Don't have an account yet?{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LogInScreen;
