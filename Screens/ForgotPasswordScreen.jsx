import { Button, Icon, Text } from "@rneui/base";
import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", padding: 9 }}>
        <Icon
          name="rowing"
          style={{ justifyContent: "flex-start", marginTop: "10%" }}
        />
      </View>
      <View
        style={{
          padding: 24,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",

            marginBottom: 0,
            fontWeight: "regular",
            color: "#192586",
            lineHeight: 54,
            alignSelf: "center",
          }}
        >
          Forgot Password
        </Text>
      </View>
      <Text style={{ textAlign: "center", paddingTop: 24, fontSize: 16 }}>
        Enter E-mail Address
      </Text>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          borderWidth: 2,
          padding: 9,
          marginTop: 30,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          justifyContent: "center",
          paddingLeft: 16,
        }}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="example@gmail.com"
        selectionColor="#5c6dc9"
      ></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate("LogInScreen")}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "gray",
            marginTop: 12,
            paddingBottom: 9,
          }}
        >
          Back to sign in
        </Text>
      </TouchableOpacity>
      <Button
        title={"Send"}
        onPress={() => navigation.navigate("ForgotPasswordVerifyScreen")}
        buttonStyle={{
          backgroundColor: "#192586",
        }}
        containerStyle={{
          width: 330,
          marginTop: 16,
          borderRadius: 50,
          justifyContent: "center",
          alignSelf: "center",
        }}
        // onPress={SignIn(auth, email, password)}
      />
      <View
        style={{
          position: "absolute", //Here is the trick
          bottom: 0, //Here is the trick
          width: "100%",
          height: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "gray",
              width: "100%",
              height: 50,
            }}
          >
            Don't have an account?{"\n"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ForgotPasswordScreen;
